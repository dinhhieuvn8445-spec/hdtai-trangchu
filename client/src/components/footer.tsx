export default function Footer() {
  return (
    <footer id="lien-he" className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-robot text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold">HDT AI</h3>
                  <p className="text-slate-400 text-sm">Công nghệ AI & Giáo dục</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6">
                Công ty cổ phần thương mại điện tử HDT AI - Chuyên đào tạo AI, tự động hóa và giáo dục công nghệ hàng đầu Việt Nam.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://zalo.me/g/ylfdge520" className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors">
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6">Liên hệ</h4>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-map-marker-alt mt-1 text-primary-400"></i>
                  <p className="text-sm">203 Bế Văn Đàn - Quang Trung - Đống Đa - Hà Nội</p>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-primary-400"></i>
                  <p className="text-sm">+84 33 473 4875</p>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-primary-400"></i>
                  <p className="text-sm">gattsvn@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h4 className="font-bold text-lg mb-6">Thời gian làm việc</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>Thứ 2 - Thứ 6: 8AM - 5PM</p>
                <p>Thứ 7: 8AM - 11AM</p>
                <p>Chủ nhật: Nghỉ</p>
              </div>

              <h4 className="font-bold text-lg mt-8 mb-4">Nhóm hỗ trợ</h4>
              <div className="space-y-2">
                <a href="https://zalo.me/g/ylfdge520" className="block text-blue-400 hover:text-blue-300 text-sm">
                  <i className="fas fa-users mr-2"></i>Nhóm Zalo
                </a>
                <p className="text-slate-400 text-sm">Telegram: (đang cập nhật)</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2025 HDT AI. Tất cả quyền được bảo lưu. | 
              <a href="#" className="text-primary-400 hover:text-primary-300"> Chính sách & Bảo mật</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
