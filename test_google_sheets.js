import 'dotenv/config';
import { google } from 'googleapis';

async function testGoogleSheetsAPI() {
  console.log('🔧 Testing Google Sheets API...');
  
  // Check environment variables
  console.log('Environment variables check:');
  console.log('- GOOGLE_PROJECT_ID:', process.env.GOOGLE_PROJECT_ID ? '✅ Set' : '❌ Missing');
  console.log('- GOOGLE_PRIVATE_KEY_ID:', process.env.GOOGLE_PRIVATE_KEY_ID ? '✅ Set' : '❌ Missing');
  console.log('- GOOGLE_PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? '✅ Set' : '❌ Missing');
  console.log('- GOOGLE_SERVICE_ACCOUNT_EMAIL:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? '✅ Set' : '❌ Missing');
  console.log('- GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? '✅ Set' : '❌ Missing');
  console.log('- GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID ? '✅ Set' : '❌ Missing');

  try {
    // Create service account credentials
    const credentials = {
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
    };

    console.log('🔑 Creating Google Auth...');
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    console.log('📊 Testing Google Sheets connection...');
    
    // Test data
    const testData = {
      name: 'Test User từ API',
      phone: '0987654321',
      email: 'test@hdtai.com',
      package: 'Full combo + 365 ngày support - 9.000K',
      notes: 'Test từ Google Sheets API trực tiếp',
      timestamp: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })
    };

    console.log('📝 Test data:', testData);

    // Add to Google Sheets
    const range = 'khách hàng đăng ký!A:F';
    const values = [[
      testData.timestamp,
      testData.name,
      testData.phone,
      testData.email,
      testData.package,
      testData.notes
    ]];

    console.log('🚀 Adding data to Google Sheets...');
    console.log('Sheet ID:', process.env.GOOGLE_SHEET_ID);
    console.log('Range:', range);
    console.log('Values:', values);

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: values
      }
    });

    console.log('✅ SUCCESS! Data added to Google Sheets');
    console.log('Response:', response.data);
    console.log('Updated range:', response.data.updates?.updatedRange);
    console.log('Updated rows:', response.data.updates?.updatedRows);

    return true;
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
    return false;
  }
}

// Run the test
testGoogleSheetsAPI().then(success => {
  if (success) {
    console.log('\n🎉 Google Sheets API test PASSED!');
    console.log('✅ Dữ liệu đã được ghi vào Google Sheet thành công!');
    console.log('🔗 Kiểm tra tại: https://docs.google.com/spreadsheets/d/15dd9lP2bOIPJG6t2bcwJNPSSelTwoy9hyZsnN6Z22gU');
  } else {
    console.log('\n❌ Google Sheets API test FAILED!');
  }
  process.exit(success ? 0 : 1);
});

