import { google } from 'googleapis';
import type { InsertRegistration } from '@shared/schema';

export class GoogleSheetsService {
  private sheets: any;
  private auth: any;

  constructor() {
    this.initializeAuth();
  }

  private initializeAuth() {
    try {
      console.log('🔧 Initializing Google Sheets auth...');
      console.log('Environment variables check:');
      console.log('- GOOGLE_PROJECT_ID:', process.env.GOOGLE_PROJECT_ID ? '✅ Set' : '❌ Missing');
      console.log('- GOOGLE_PRIVATE_KEY_ID:', process.env.GOOGLE_PRIVATE_KEY_ID ? '✅ Set' : '❌ Missing');
      console.log('- GOOGLE_PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? '✅ Set' : '❌ Missing');
      console.log('- GOOGLE_SERVICE_ACCOUNT_EMAIL:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? '✅ Set' : '❌ Missing');
      console.log('- GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? '✅ Set' : '❌ Missing');

      // Initialize Google Auth with service account
      this.auth = new google.auth.GoogleAuth({
        credentials: {
          type: 'service_account',
          project_id: process.env.GOOGLE_PROJECT_ID,
          private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          client_id: process.env.GOOGLE_CLIENT_ID,
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.replace('@', '%40')}`
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
      });

      this.sheets = google.sheets({ version: 'v4', auth: this.auth });
      console.log('✅ Google Sheets auth initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize Google Sheets auth:', error);
    }
  }

  async addRegistration(registration: InsertRegistration & { id: string; createdAt: Date }): Promise<boolean> {
    try {
      const spreadsheetId = '15dd9lP2bOIPJG6t2bcwJNPSSelTwoy9hyZsnN6Z22gU';
      
      // Check if credentials are available
      if (!this.auth || !this.sheets) {
        console.log('Google Sheets not configured - storing locally only');
        return false;
      }

      // Format data for Google Sheets
      const timestamp = registration.createdAt.toLocaleString('vi-VN', {
        timeZone: 'Asia/Ho_Chi_Minh',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const packageName = this.getPackageName(registration.package);
      
      const values = [
        [
          timestamp,
          registration.fullName,
          registration.phone,
          registration.email,
          packageName,
          registration.notes || '',
          registration.id
        ]
      ];

      // Add header row if sheet is empty
      const headerValues = [
        ['Thời gian', 'Họ tên', 'Số điện thoại', 'Email', 'Gói học', 'Ghi chú', 'ID']
      ];

      // Check if header exists
      const range = 'A1:G1';
      const headerCheck = await this.sheets.spreadsheets.values.get({
        spreadsheetId,
        range
      });

      // If no header, add it first
      if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
        await this.sheets.spreadsheets.values.update({
          spreadsheetId,
          range: 'A1:G1',
          valueInputOption: 'RAW',
          resource: { values: headerValues }
        });
      }

      // Append the new registration data
      const appendResponse = await this.sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'A:G',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: { values }
      });

      console.log('✅ Data successfully added to Google Sheets:', appendResponse.data);
      return true;

    } catch (error) {
      console.error('❌ Failed to add data to Google Sheets:', error);
      return false;
    }
  }

  private getPackageName(packageCode: string): string {
    const packages: Record<string, string> = {
      'ai-master': 'PHẦN I – AI MASTER (3.000K)',
      'ai-automation': 'PHẦN II – AI AUTOMATION (3.000K)',
      'ai-real-work': 'PHẦN III – AI IN REAL WORK (4.000K)',
      'full-combo': 'Full combo + 365 ngày support (9.000K)'
    };
    
    return packages[packageCode] || packageCode;
  }
}

export const googleSheetsService = new GoogleSheetsService();