# HDT AI - Website Khóa học AI chuyên nghiệp

## 🎯 Giới thiệu

Website HDT AI là nền tảng giáo dục trực tuyến chuyên về AI và ChatGPT, cung cấp các khóa học từ cơ bản đến nâng cao với nhiều hình thức đào tạo linh hoạt.

## 🌟 Tính năng chính

### 📚 Khóa học đa dạng
- **AI Master**: Nền tảng ChatGPT từ A-Z (3.000K VNĐ)
- **AI Automation**: Tự động hóa & Chatbot (3.000K VNĐ)  
- **AI in Real Work**: Ứng dụng thực tế văn phòng (4.000K VNĐ)
- **Gói Combo**: Full 3 phần + 365 ngày support (9.000K VNĐ)

### 🎓 Gói đào tạo chuyên nghiệp
- **Khóa học Online**: 9 triệu VNĐ
- **Đào tạo Online**: 15 triệu VNĐ (Live training)
- **Đào tạo tại Công ty**: 16 triệu VNĐ
- **Đào tạo tại Nhà**: 20 triệu VNĐ (VIP 1-on-1)

### 💡 Nội dung giáo trình chi tiết
- **67 video bài giảng** trong 3 phần chính
- **5 phương pháp ra lệnh độc quyền**
- **20+ công cụ AI chuyên nghiệp**
- **Case study thực tế** từ các doanh nghiệp

### 📝 Form đăng ký tích hợp
- Validation dữ liệu đầy đủ
- Dropdown chọn gói khóa học
- Thông tin chuyển khoản tự động
- Gửi email xác nhận

## 🛠️ Công nghệ sử dụng

### Frontend
- **React 18** với TypeScript
- **Tailwind CSS** cho styling
- **Shadcn/UI** components
- **Lucide React** icons
- **React Hook Form** cho form validation

### Backend
- **Flask** Python framework
- **Google Sheets API** để lưu trữ đăng ký
- **CORS** support cho frontend-backend

### Deployment
- **Google Cloud Run** cho production
- **Docker** containerization
- **Nginx** reverse proxy

## 📁 Cấu trúc dự án

```
hdtai-trangchu/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
├── server/                # Backend utilities
├── shared/                # Shared schemas
├── dist/                  # Built frontend
├── app.py                 # Flask backend
├── Dockerfile            # Docker configuration
├── nginx.conf            # Nginx configuration
└── requirements.txt      # Python dependencies
```

## 🚀 Hướng dẫn cài đặt

### 1. Clone repository
```bash
git clone https://github.com/your-username/hdtai-trangchu.git
cd hdtai-trangchu
```

### 2. Cài đặt dependencies

#### Frontend
```bash
cd client
npm install
```

#### Backend
```bash
pip install -r requirements.txt
```

### 3. Cấu hình environment
```bash
cp .env.example .env
# Chỉnh sửa file .env với thông tin Google Sheets API
```

### 4. Chạy development

#### Frontend
```bash
cd client
npm run dev
```

#### Backend
```bash
python app.py
```

## 🌐 Deploy lên Google Cloud

### 1. Build frontend
```bash
cd client
npm run build
```

### 2. Deploy với gcloud
```bash
gcloud run deploy hdtai-website --source . --region=asia-southeast1
```

## 📊 Thống kê dự án

- **8 gói khóa học** đa dạng
- **67 video bài giảng** chất lượng cao
- **20+ công cụ AI** được hướng dẫn
- **10+ ngành nghề** ứng dụng thực tế
- **Responsive design** cho mọi thiết bị

## 🎯 Mục tiêu học viên

### Cá nhân
- Nâng cao hiệu suất 300-500%
- Tạo thu nhập thụ động từ AI
- Tiết kiệm thời gian, tăng chất lượng công việc

### Doanh nghiệp  
- Giảm chi phí vận hành 40-60%
- Tự động hóa quy trình kinh doanh
- Tăng doanh thu qua tối ưu marketing

### Kỹ năng đạt được
- Thành thạo 20+ công cụ AI
- Xây dựng hệ thống tự động hóa
- Tư duy hệ thống áp dụng AI

## 📞 Liên hệ

- **Địa chỉ**: 203 Bế Văn Đàn, Quang Trung, Hà Đông, Hà Nội
- **Email**: hdtai20055@gmail.com
- **Website**: https://hdtai.vn

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo issue hoặc pull request.

---

**Phát triển bởi HDT AI Team** 🚀


<!-- Trigger deployment with fixed Root Directory configuration -->

