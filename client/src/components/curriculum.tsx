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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Lộ trình học và các gói đào tạo
            </h2>
            <p className="text-xl text-slate-600 mb-4">
              Từ AI Master cơ bản đến AI in Real Work nâng cao + Nhiều hình thức học tập linh hoạt
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-blue-800 font-medium">
                📚 <strong>Giáo trình chuẩn:</strong> AI Master → AI Automation → AI in Real Work
              </p>
            </div>
          </div>

          {/* 3 Gói khóa học cơ bản */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
              📖 Các khóa học theo từng phần
            </h3>
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
                Học full combo 3 phần + 365 ngày support
              </p>
              <Button 
                onClick={scrollToRegistration}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                ĐĂNG KÝ COMBO NGAY
              </Button>
            </div>
          </div>

          {/* 4 Gói đào tạo mới */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
              🎓 Các gói đào tạo chuyên nghiệp
            </h3>
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* Gói 1: Mua khóa học và hỗ trợ online */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-blue-200">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold">GÓI CƠ BẢN</span>
                    <i className="fas fa-laptop text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">KHÓA HỌC ONLINE</h3>
                  <p className="text-blue-100">Học online + Hỗ trợ từ xa</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-blue-600">9 triệu VNĐ</div>
                    <div className="text-sm text-slate-500">Một lần thanh toán</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-2">📖 Nội dung học:</h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• AI Master (Nền tảng ChatGPT)</li>
                        <li>• AI Automation (Tự động hóa)</li>
                        <li>• AI in Real Work (Ứng dụng thực tế)</li>
                      </ul>
                    </div>
                    
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Truy cập khóa học trọn đời</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Hỗ trợ online qua chat/email</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Tài liệu PDF đầy đủ</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Video bài giảng HD</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button 
                    onClick={scrollToRegistration}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Chọn gói này
                  </Button>
                </div>
              </div>

              {/* Gói 2: Đào tạo online theo giáo trình */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-purple-200">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-bold">PHỔ BIẾN</span>
                    <i className="fas fa-video text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">ĐÀO TẠO ONLINE</h3>
                  <p className="text-purple-100">Live training + Tương tác trực tiếp</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-purple-600">15 triệu VNĐ</div>
                    <div className="text-sm text-slate-500">Bao gồm khóa học miễn phí</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-purple-800 mb-2">🎯 Đặc biệt:</h5>
                      <p className="text-sm text-purple-700 font-medium">+ Được cấp khóa học miễn phí (trị giá 9 triệu)</p>
                    </div>
                    
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Đào tạo live online theo lịch</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Tương tác trực tiếp với giảng viên</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Q&A session sau mỗi buổi học</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Bài tập thực hành có chấm điểm</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Nhóm hỗ trợ riêng 24/7</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button 
                    onClick={scrollToRegistration}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Chọn gói này
                  </Button>
                </div>
              </div>

              {/* Gói 3: Đào tạo trực tiếp tại công ty */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-green-200">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-bold">CHUYÊN NGHIỆP</span>
                    <i className="fas fa-building text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">TẠI CÔNG TY</h3>
                  <p className="text-green-100">Học sinh đến công ty học</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-green-600">16 triệu VNĐ</div>
                    <div className="text-sm text-slate-500">Bao gồm khóa học miễn phí</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-2">🏢 Đặc biệt:</h5>
                      <p className="text-sm text-green-700 font-medium">+ Được cấp khóa học miễn phí (trị giá 9 triệu)</p>
                    </div>
                    
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Học trực tiếp tại văn phòng HDT AI</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Môi trường học tập chuyên nghiệp</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Thực hành trên máy tính công ty</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Networking với học viên khác</span>
                      </li>

                    </ul>
                  </div>
                  
                  <Button 
                    onClick={scrollToRegistration}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Chọn gói này
                  </Button>
                </div>
              </div>

              {/* Gói 4: Đào tạo tại nhà học sinh */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-red-200">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold">VIP</span>
                    <i className="fas fa-home text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">TẠI NHÀ HỌC SINH</h3>
                  <p className="text-red-100">Giảng viên đến nhà dạy</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-red-600">20 triệu VNĐ</div>
                    <div className="text-sm text-slate-500">Bao gồm khóa học miễn phí</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-red-800 mb-2">👑 Đặc biệt:</h5>
                      <p className="text-sm text-red-700 font-medium">+ Được cấp khóa học miễn phí (trị giá 9 triệu)</p>
                    </div>
                    
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Giảng viên đến tận nhà dạy</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Lịch học linh hoạt theo yêu cầu</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">1-on-1 cá nhân hóa hoàn toàn</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Tốc độ học theo khả năng cá nhân</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 text-sm">Hỗ trợ trọn đời sau khóa học</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button 
                    onClick={scrollToRegistration}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Chọn gói này
                  </Button>
                </div>
              </div>
            </div>
          </div>



          {/* Call to action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">🎯 Không biết chọn gói nào?</h3>
              <p className="text-lg mb-6">
                Liên hệ với chúng tôi để được tư vấn gói học phù hợp nhất với nhu cầu của bạn
              </p>
              <Button 
                onClick={scrollToRegistration}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                TƯ VẤN MIỄN PHÍ NGAY
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

