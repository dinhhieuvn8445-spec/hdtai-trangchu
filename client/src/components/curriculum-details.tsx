import { Button } from "@/components/ui/button";

export default function CurriculumDetails() {
  const scrollToRegistration = () => {
    const element = document.getElementById('dang-ky');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              📚 Chi tiết nội dung giáo trình
            </h2>
            <p className="text-xl text-slate-600 mb-4">
              Khóa học "KIẾM TIỀN BẰNG AI" - Làm chủ các công cụ AI phổ biến hiện nay
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-slate-800 font-medium text-lg">
                🎯 <strong>Mục tiêu:</strong> Giúp học viên ứng dụng AI vào công việc thực tế, tăng hiệu quả và tạo thu nhập
              </p>
            </div>
          </div>

          {/* PHẦN I - AI MASTER */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-3xl font-bold mb-4">🔹 PHẦN I - AI MASTER</h3>
              <p className="text-xl text-blue-100">Nền tảng ChatGPT từ A-Z - Xây dựng nền tảng vững chắc về AI</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  <i className="fas fa-robot text-blue-600 mr-3"></i>
                  1. ChatGPT Cơ bản (29 video)
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-play-circle text-blue-500 mt-1 mr-3"></i>
                    <span className="text-slate-700"><strong>Khởi đầu:</strong> Tạo tài khoản, quản lý dự án và session hiệu quả</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-star text-yellow-500 mt-1 mr-3"></i>
                    <span className="text-slate-700"><strong>5 phương pháp ra lệnh độc quyền:</strong></span>
                  </li>
                  <li className="ml-6 text-slate-600">• Mô tả rõ ràng có cấu trúc</li>
                  <li className="ml-6 text-slate-600">• Đặt vai trò (Role Playing)</li>
                  <li className="ml-6 text-slate-600">• Tách bước theo quy trình</li>
                  <li className="ml-6 text-slate-600">• Đưa mẫu làm theo format</li>
                  <li className="ml-6 text-slate-600">• Chỉ dẫn phản hồi tương ứng</li>
                  <li className="flex items-start">
                    <i className="fas fa-lightbulb text-yellow-500 mt-1 mr-3"></i>
                    <span className="text-slate-700"><strong>Ứng dụng thực tế:</strong> Tra cứu, dịch thuật, tóm tắt, lên ý tưởng</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  <i className="fas fa-file-excel text-green-600 mr-3"></i>
                  2. ChatGPT với Word & Excel (25 video)
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-table text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700"><strong>Excel:</strong> Tạo bảng tính tự động, phân tích dữ liệu, tạo biểu đồ</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-file-word text-blue-500 mt-1 mr-3"></i>
                    <span className="text-slate-700"><strong>Word:</strong> Chỉnh sửa tài liệu, tạo báo cáo, hợp đồng</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-chart-line text-purple-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Theo dõi công việc và tạo báo cáo tự động</span>
                  </li>
                </ul>

                <h4 className="text-xl font-bold text-slate-900 mb-4 mt-6">
                  <i className="fas fa-cog text-purple-600 mr-3"></i>
                  3. ChatGPT Nâng cao (13 video)
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-user-cog text-purple-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Cấu hình chuyên sâu: Cá nhân hóa, bảo mật</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-robot text-blue-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Tạo trợ lý ảo cho doanh nghiệp</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-video text-red-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Tích hợp Sora video, hội thoại voice</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Tools Section */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                <i className="fas fa-tools text-blue-600 mr-3"></i>
                Bộ công cụ AI chuyên nghiệp
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <i className="fas fa-image text-purple-500 text-2xl mb-2"></i>
                  <p className="font-semibold">Xử lý Hình ảnh</p>
                  <p className="text-sm text-slate-600">Shakker, LetsEnhance, Canva</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-video text-red-500 text-2xl mb-2"></i>
                  <p className="font-semibold">Tạo Video</p>
                  <p className="text-sm text-slate-600">Kling AI, Leonardo, HeyGen</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-microphone text-green-500 text-2xl mb-2"></i>
                  <p className="font-semibold">Xử lý Giọng nói</p>
                  <p className="text-sm text-slate-600">Vbee, D-ID</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-music text-orange-500 text-2xl mb-2"></i>
                  <p className="font-semibold">Tạo Nhạc</p>
                  <p className="text-sm text-slate-600">Suno AI</p>
                </div>
              </div>
            </div>
          </div>

          {/* PHẦN II - AI AUTOMATION */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-3xl font-bold mb-4">🔹 PHẦN II - AI AUTOMATION</h3>
              <p className="text-xl text-purple-100">Tự động hóa toàn diện - Xây dựng hệ thống tự động hóa thông minh</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  <i className="fas fa-robot text-purple-600 mr-3"></i>
                  Chatbot & Tự động hóa
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-comments text-blue-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Khai thác chatbot thương mại có sẵn</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-link text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700"><strong>Make.com & N8N.io:</strong> Kết nối và tự động hóa ứng dụng</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-cogs text-purple-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Xây dựng chatbot: Make + Google Sheets + ChatGPT</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  <i className="fas fa-share-alt text-purple-600 mr-3"></i>
                  Tích hợp đa nền tảng
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fab fa-facebook text-blue-600 mt-1 mr-3"></i>
                    <span className="text-slate-700">Facebook Messenger</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-globe text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Website (webhook, chat widget)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-comment-dots text-purple-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Landbot interface</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-purple-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                <i className="fas fa-tasks text-purple-600 mr-3"></i>
                Mô hình tự động hóa cơ bản
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <i className="fab fa-facebook text-blue-600 text-xl mb-2"></i>
                  <p className="font-semibold">Tự động đăng bài Facebook</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <i className="fas fa-envelope text-green-600 text-xl mb-2"></i>
                  <p className="font-semibold">Gửi email marketing</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <i className="fas fa-comments text-purple-600 text-xl mb-2"></i>
                  <p className="font-semibold">Nhắn tin khách hàng</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <i className="fas fa-reply text-orange-600 text-xl mb-2"></i>
                  <p className="font-semibold">Phản hồi bình luận</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <i className="fab fa-youtube text-red-600 text-xl mb-2"></i>
                  <p className="font-semibold">Đăng video YouTube</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <i className="fas fa-video text-blue-600 text-xl mb-2"></i>
                  <p className="font-semibold">Đăng Facebook Reels</p>
                </div>
              </div>
            </div>
          </div>

          {/* PHẦN III - AI IN REAL WORK */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-3xl font-bold mb-4">🔹 PHẦN III - AI IN REAL WORK</h3>
              <p className="text-xl text-green-100">Ứng dụng thực tế - Thực chiến ứng dụng AI vào 10+ ngành nghề cụ thể</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  <i className="fas fa-rocket text-green-600 mr-3"></i>
                  Chatbot & Tự động hóa nâng cao
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-images text-blue-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Chatbot trả lời kèm hình ảnh sản phẩm</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-video text-red-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Tạo video từ ảnh + nội dung tự động</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-share-alt text-purple-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Đăng lên TikTok, Shorts, Reels qua API</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  <i className="fas fa-brain text-green-600 mr-3"></i>
                  Quy trình tư duy hệ thống
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-search text-blue-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Phân loại nghề nghiệp theo tình huống</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-target text-red-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Xác định nỗi đau / mục tiêu chính</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-cogs text-purple-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Thiết kế sơ đồ / công cụ / quy trình</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Case Study */}
            <div className="mt-8 bg-green-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                <i className="fas fa-store text-green-600 mr-3"></i>
                Case Study: 10+ Ngành nghề thực tế
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="text-center bg-white p-4 rounded-lg">
                  <i className="fas fa-tshirt text-pink-500 text-2xl mb-2"></i>
                  <p className="font-semibold text-sm">Shop quần áo</p>
                </div>
                <div className="text-center bg-white p-4 rounded-lg">
                  <i className="fas fa-mobile-alt text-blue-500 text-2xl mb-2"></i>
                  <p className="font-semibold text-sm">Cửa hàng điện thoại</p>
                </div>
                <div className="text-center bg-white p-4 rounded-lg">
                  <i className="fas fa-cut text-purple-500 text-2xl mb-2"></i>
                  <p className="font-semibold text-sm">Salon tóc</p>
                </div>
                <div className="text-center bg-white p-4 rounded-lg">
                  <i className="fas fa-coffee text-orange-500 text-2xl mb-2"></i>
                  <p className="font-semibold text-sm">Quán ăn, cà phê</p>
                </div>
                <div className="text-center bg-white p-4 rounded-lg">
                  <i className="fas fa-chalkboard-teacher text-green-500 text-2xl mb-2"></i>
                  <p className="font-semibold text-sm">Giáo viên</p>
                </div>
                <div className="text-center bg-white p-4 rounded-lg">
                  <i className="fas fa-calculator text-blue-500 text-2xl mb-2"></i>
                  <p className="font-semibold text-sm">Kế toán</p>
                </div>
                <div className="text-center bg-white p-4 rounded-lg">
                  <i className="fas fa-home text-red-500 text-2xl mb-2"></i>
                  <p className="font-semibold text-sm">Homestay</p>
                </div>
                <div className="text-center bg-white p-4 rounded-lg">
                  <i className="fas fa-building text-gray-500 text-2xl mb-2"></i>
                  <p className="font-semibold text-sm">Bất động sản</p>
                </div>
                <div className="text-center bg-white p-4 rounded-lg">
                  <i className="fas fa-tools text-yellow-500 text-2xl mb-2"></i>
                  <p className="font-semibold text-sm">Thợ sửa chữa</p>
                </div>
                <div className="text-center bg-white p-4 rounded-lg">
                  <i className="fas fa-plug text-blue-600 text-2xl mb-2"></i>
                  <p className="font-semibold text-sm">Thiết bị điện</p>
                </div>
              </div>
            </div>

            {/* Example Case */}
            <div className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                <i className="fas fa-star text-yellow-500 mr-3"></i>
                Ví dụ thực tế: LENA CLOSET - Shop thời trang nữ
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-slate-800 mb-3">📉 Thực trạng:</h5>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Doanh thu 120-150 triệu/tháng</li>
                    <li>• Lợi nhuận thấp do chi phí cao</li>
                    <li>• Làm việc cực nhọc, hiệu quả thấp</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800 mb-3">🎯 Giải pháp AI:</h5>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Tăng doanh thu bằng automation</li>
                    <li>• Giảm chi phí vận hành</li>
                    <li>• Giảm khối lượng công việc hàng ngày</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
              🎯 Lợi ích khóa học
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user text-blue-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-slate-900 mb-3">Cho Cá nhân</h4>
                <ul className="text-slate-700 space-y-2">
                  <li>• Nâng cao hiệu suất 300-500%</li>
                  <li>• Tạo thu nhập thụ động từ AI</li>
                  <li>• Tiết kiệm thời gian, tăng chất lượng</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-building text-green-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-slate-900 mb-3">Cho Doanh nghiệp</h4>
                <ul className="text-slate-700 space-y-2">
                  <li>• Giảm chi phí vận hành 40-60%</li>
                  <li>• Tự động hóa quy trình kinh doanh</li>
                  <li>• Tăng doanh thu qua tối ưu marketing</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-graduation-cap text-purple-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-slate-900 mb-3">Kỹ năng đạt được</h4>
                <ul className="text-slate-700 space-y-2">
                  <li>• Thành thạo 20+ công cụ AI</li>
                  <li>• Xây dựng hệ thống tự động hóa</li>
                  <li>• Tư duy hệ thống áp dụng AI</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">💡 Nguyên tắc vàng</h3>
              <p className="text-xl mb-6">
                "AI không thông minh hơn thông tin bạn đưa cho nó"
              </p>
              <p className="text-lg mb-8">
                Khóa học HDT AI sẽ giúp bạn chuẩn hóa dữ liệu đầu vào và tối ưu hóa kết quả đầu ra
              </p>
              <Button 
                onClick={scrollToRegistration}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                ĐĂNG KÝ NGAY ĐỂ NHẬN ƯU ĐÃI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

