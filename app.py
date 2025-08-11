import os
import json
import uuid
from datetime import datetime
from flask import Flask, send_from_directory, send_file, request, jsonify
from flask_cors import CORS
from google.oauth2 import service_account
from googleapiclient.discovery import build

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Debug middleware
@app.before_request
def log_request_info():
    print(f"🔍 Request: {request.method} {request.path}")
    if request.method == 'POST':
        print(f"🔍 Headers: {dict(request.headers)}")
        print(f"🔍 Content-Type: {request.content_type}")
        if request.is_json:
            print(f"🔍 JSON Data: {request.get_json()}")
        else:
            print(f"🔍 Raw Data: {request.get_data()}")

# Google Sheets configuration
GOOGLE_SHEET_ID = '15dd9lP2bOIPJG6t2bcwJNPSSelTwoy9hyZsnN6Z22gU'
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

def get_google_sheets_service():
    """Initialize Google Sheets service"""
    try:
        # Create credentials from environment variables
        credentials_info = {
            "type": "service_account",
            "project_id": os.getenv('GOOGLE_PROJECT_ID'),
            "private_key_id": os.getenv('GOOGLE_PRIVATE_KEY_ID'),
            "private_key": os.getenv('GOOGLE_PRIVATE_KEY', '').replace('\\n', '\n'),
            "client_email": os.getenv('GOOGLE_SERVICE_ACCOUNT_EMAIL'),
            "client_id": os.getenv('GOOGLE_CLIENT_ID'),
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": os.getenv('GOOGLE_CLIENT_X509_CERT_URL')
        }
        
        credentials = service_account.Credentials.from_service_account_info(
            credentials_info, scopes=SCOPES
        )
        
        service = build('sheets', 'v4', credentials=credentials)
        return service
    except Exception as e:
        print(f"Error initializing Google Sheets service: {e}")
        return None

def get_package_name(package_code):
    """Convert package code to readable name"""
    packages = {
        'ai-master': 'PHẦN I – AI MASTER (3.000K)',
        'ai-automation': 'PHẦN II – AI AUTOMATION (3.000K)', 
        'ai-real-work': 'PHẦN III – AI IN REAL WORK (4.000K)',
        'full-combo': 'Full combo + 365 ngày support (9.000K)'
    }
    return packages.get(package_code, package_code)

@app.route('/api/registrations', methods=['POST'])
def register():
    """Handle form registration"""
    try:
        data = request.get_json()
        print(f"🔍 Received data: {data}")
        
        # Validate required fields
        required_fields = ['fullName', 'phone', 'email', 'package']
        for field in required_fields:
            if not data.get(field):
                print(f"❌ Missing field: {field}")
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Generate unique ID and timestamp
        registration_id = str(uuid.uuid4())
        timestamp = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
        
        # Prepare data for Google Sheets
        package_name = get_package_name(data['package'])
        values = [[
            timestamp,
            data['fullName'],
            data['phone'], 
            data['email'],
            package_name,
            data.get('notes', ''),
            registration_id
        ]]
        
        # Try to add to Google Sheets
        sheets_success = False
        try:
            service = get_google_sheets_service()
            if service:
                # Check if header exists
                sheet = service.spreadsheets()
                header_range = 'A1:G1'
                header_result = sheet.values().get(
                    spreadsheetId=GOOGLE_SHEET_ID, 
                    range=header_range
                ).execute()
                
                # Add header if not exists
                if not header_result.get('values'):
                    header_values = [['Thời gian', 'Họ tên', 'Số điện thoại', 'Email', 'Gói học', 'Ghi chú', 'ID']]
                    sheet.values().update(
                        spreadsheetId=GOOGLE_SHEET_ID,
                        range='A1:G1',
                        valueInputOption='RAW',
                        body={'values': header_values}
                    ).execute()
                
                # Append new registration
                result = sheet.values().append(
                    spreadsheetId=GOOGLE_SHEET_ID,
                    range='A:G',
                    valueInputOption='RAW',
                    insertDataOption='INSERT_ROWS',
                    body={'values': values}
                ).execute()
                
                sheets_success = True
                print(f"✅ Data added to Google Sheets: {result}")
                
        except Exception as e:
            print(f"❌ Failed to add to Google Sheets: {e}")
        
        # Return success response
        return jsonify({
            'success': True,
            'message': 'Đăng ký thành công!',
            'id': registration_id,
            'sheets_updated': sheets_success
        })
        
    except Exception as e:
        print(f"Registration error: {e}")
        return jsonify({'error': 'Có lỗi xảy ra. Vui lòng thử lại sau.'}), 500

# Serve static files
@app.route('/')
def index():
    return send_file('dist/public/index.html')

@app.route('/<path:path>')
def static_files(path):
    try:
        return send_from_directory('dist/public', path)
    except:
        # For SPA routing, return index.html for non-existent routes
        return send_file('dist/public/index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port, debug=True)

