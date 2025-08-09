# Hướng dẫn Deploy Website HDT AI lên Vercel

## 🚀 Các bước deploy

### 1. Chuẩn bị dự án
```bash
# Build dự án
npm run build

# Kiểm tra cấu trúc
ls -la dist/
```

### 2. Deploy lên Vercel
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập và tạo project mới
3. Import repository hoặc upload folder
4. Vercel sẽ tự động detect cấu hình từ `vercel.json`

### 3. Cấu hình biến môi trường trên Vercel
Vào **Settings > Environment Variables** và thêm:

```
GOOGLE_PROJECT_ID=your-project-id
GOOGLE_PRIVATE_KEY_ID=your-private-key-id
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nyour-private-key-content\n-----END PRIVATE KEY-----
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_SHEET_ID=15dd9lP2bOIPJG6t2bcwJNPSSelTwoy9hyZsnN6Z22gU
SESSION_SECRET=your-super-secret-session-key-change-this-in-production
```

## 🔧 Cấu hình Google Sheets API

### Bước 1: Tạo Google Cloud Project
1. Truy cập [Google Cloud Console](https://console.cloud.google.com)
2. Tạo project mới hoặc chọn project hiện có
3. Enable Google Sheets API:
   - Vào **APIs & Services > Library**
   - Tìm "Google Sheets API" và enable

### Bước 2: Tạo Service Account
1. Vào **APIs & Services > Credentials**
2. Click **Create Credentials > Service Account**
3. Điền thông tin:
   - Service account name: `hdt-ai-sheets`
   - Description: `Service account for HDT AI website`
4. Click **Create and Continue**
5. Gán role **Editor** hoặc **Sheets Editor**
6. Click **Done**

### Bước 3: Tạo Key cho Service Account
1. Click vào service account vừa tạo
2. Vào tab **Keys**
3. Click **Add Key > Create new key**
4. Chọn **JSON** và download file

### Bước 4: Cấu hình Google Sheet
1. Mở Google Sheet với ID: `15dd9lP2bOIPJG6t2bcwJNPSSelTwoy9hyZsnN6Z22gU`
2. Click **Share** và thêm email của service account (từ JSON file)
3. Gán quyền **Editor**

### Bước 5: Cập nhật biến môi trường
Từ file JSON đã download, copy các thông tin sau vào Vercel:

```json
{
  "type": "service_account",
  "project_id": "your-project-id",           // → GOOGLE_PROJECT_ID
  "private_key_id": "your-private-key-id",   // → GOOGLE_PRIVATE_KEY_ID
  "private_key": "-----BEGIN PRIVATE...",    // → GOOGLE_PRIVATE_KEY
  "client_email": "service@project.iam...",  // → GOOGLE_SERVICE_ACCOUNT_EMAIL
  "client_id": "your-client-id"              // → GOOGLE_CLIENT_ID
}
```

## ✅ Kiểm tra hoạt động

1. Truy cập website đã deploy
2. Điền form đăng ký
3. Kiểm tra Google Sheet xem có dữ liệu mới không
4. Kiểm tra Vercel Functions logs nếu có lỗi

## 🔍 Troubleshooting

### Lỗi Google Sheets API
- Kiểm tra service account có quyền truy cập sheet không
- Kiểm tra biến môi trường `GOOGLE_PRIVATE_KEY` có đúng format không
- Kiểm tra Google Sheets API đã được enable chưa

### Lỗi CORS
- Đã được cấu hình sẵn trong `api/index.ts`
- Nếu vẫn lỗi, kiểm tra domain trong Vercel settings

### Lỗi Build
```bash
# Chạy local để debug
npm run dev

# Kiểm tra TypeScript
npm run check
```

## 📁 Cấu trúc dự án

```
KingaiVercel/
├── api/                 # Vercel API routes
│   └── index.ts        # Entry point cho API
├── client/             # Frontend React
│   ├── src/
│   └── index.html
├── server/             # Backend logic
│   ├── routes.ts       # API routes
│   ├── google-sheets.ts # Google Sheets integration
│   └── storage.ts      # Data storage
├── vercel.json         # Vercel configuration
├── .env.example        # Environment variables template
└── package.json
```

## 🎯 Tính năng chính

- ✅ Form đăng ký khóa học
- ✅ Lưu dữ liệu vào Google Sheets
- ✅ Responsive design
- ✅ Toast notifications
- ✅ Form validation
- ✅ CORS support
- ✅ Production ready

