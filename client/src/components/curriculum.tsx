import { Button } from "@/components/ui/button";

export default function Curriculum() {
  const scrollToRegistration = () => {
    const element = document.getElementById('dang-ky');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="khoa-hoc" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Lộ trình học 3 phần chính
            </h2>
            <p className="text-xl text-slate-600">
              Từ AI Master cơ bản đến AI in Real Work nâng cao
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Part 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <h3 className="text-xl font-bold text-white mb-2">PHẦN I</h3>
                <h4 className="text-2xl font-bold text-white">AI MASTER</h4>
                <p className="text-blue-100 mt-2">Nền tảng ChatGPT từ A-Z</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-4">3.000K VNĐ</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Làm quen ChatGPT từ căn bản</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">5 phương pháp ra lệnh chuẩn</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Quản lý session hiệu quả</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Thực hành cơ bản đa dạng</span>
                  </li>
                </ul>
                <Button 
                  onClick={scrollToRegistration}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Chọn gói này
                </Button>
              </div>
            </div>

            {/* Course Part 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
                <h3 className="text-xl font-bold text-white mb-2">PHẦN II</h3>
                <h4 className="text-2xl font-bold text-white">AI AUTOMATION</h4>
                <p className="text-purple-100 mt-2">Tự động hóa & Chatbot</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-4">3.000K VNĐ</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Cá nhân hóa ChatGPT</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Xây dựng chatbot bán hàng</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Tạo video với AI</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">So sánh các AI khác</span>
                  </li>
                </ul>
                <Button 
                  onClick={scrollToRegistration}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Chọn gói này
                </Button>
              </div>
            </div>

            {/* Course Part 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                <h3 className="text-xl font-bold text-white mb-2">PHẦN III</h3>
                <h4 className="text-2xl font-bold text-white">AI IN REAL WORK</h4>
                <p className="text-green-100 mt-2">Ứng dụng thực tế văn phòng</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-4">4.000K VNĐ</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">ChatGPT với Word & Excel</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Tối ưu hóa công việc văn phòng</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Bài tập thực hành thực tế</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span className="text-slate-700">Mô phỏng tình huống công việc</span>
                  </li>
                </ul>
                <Button 
                  onClick={scrollToRegistration}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Chọn gói này
                </Button>
              </div>
            </div>
          </div>

          {/* Full Combo Offer */}
          <div className="mt-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">🔥 GÓI COMBO ĐẶC BIỆT</h3>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-4xl font-bold">9.000K VNĐ</span>
              <span className="text-xl line-through opacity-75">10.000K VNĐ</span>
              <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-semibold">-10%</span>
            </div>
            <p className="text-xl mb-6">
              Học full combo 3 phần + 365 ngày support + Tặng kèm sách thiết kế
            </p>
            <Button 
              onClick={scrollToRegistration}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              ĐĂNG KÝ COMBO NGAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
