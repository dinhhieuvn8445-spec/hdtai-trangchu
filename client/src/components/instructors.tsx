import instructorImage1 from "@assets/vietnamese_young_man_1754669358243.png";
import instructorImage2 from "@assets/vietnamese_young_man_3_1754669391855.png";
import instructorImage3 from "@assets/thịnh công tử_1754669398309.png";

export default function Instructors() {
  return (
    <section id="giang-vien" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Đội ngũ giảng viên chuyên nghiệp
            </h2>
            <p className="text-xl text-slate-600">
              Những chuyên gia hàng đầu trong lĩnh vực AI và Automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Instructor 1 - AI Master */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={instructorImage1} 
                alt="Giảng viên Hoàng Anh Tú" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Giảng viên: Hoàng Anh Tú</h3>
                <p className="text-primary-600 font-medium mb-3">Chuyên gia AI Master</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-800 mb-3">📚 PHẦN I - AI MASTER</h4>
                  <p className="text-sm text-slate-600 mb-3 font-medium">Nền tảng ChatGPT từ A-Z</p>
                  
                  <div className="space-y-2">
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-xs text-blue-700">• ChatGPT Cơ bản (29 video)</p>
                      <p className="text-xs text-blue-700">• 5 phương pháp ra lệnh độc quyền</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-xs text-blue-700">• ChatGPT với Word & Excel (25 video)</p>
                      <p className="text-xs text-blue-700">• Tạo bảng tính, báo cáo tự động</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-xs text-blue-700">• ChatGPT Nâng cao (13 video)</p>
                      <p className="text-xs text-blue-700">• Bộ công cụ AI: Shakker, Leonardo, HeyGen</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-100 p-3 rounded-lg">
                  <p className="text-xs text-blue-800 font-medium">🎯 Kết quả: Thành thạo ChatGPT và 20+ công cụ AI</p>
                </div>
              </div>
            </div>

            {/* Instructor 2 - AI Automation */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={instructorImage2} 
                alt="Giảng viên Thanh Hải" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Giảng viên: Thanh Hải</h3>
                <p className="text-primary-600 font-medium mb-3">Chuyên gia Automation</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-purple-800 mb-3">🤖 PHẦN II - AI AUTOMATION</h4>
                  <p className="text-sm text-slate-600 mb-3 font-medium">Tự động hóa toàn diện</p>
                  
                  <div className="space-y-2">
                    <div className="bg-purple-50 p-2 rounded">
                      <p className="text-xs text-purple-700">• Chatbot & Tự động hóa</p>
                      <p className="text-xs text-purple-700">• Make.com & N8N.io</p>
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      <p className="text-xs text-purple-700">• Tích hợp đa nền tảng</p>
                      <p className="text-xs text-purple-700">• Facebook, Website, Landbot</p>
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      <p className="text-xs text-purple-700">• 6 mô hình tự động hóa cơ bản</p>
                      <p className="text-xs text-purple-700">• Email marketing, đăng bài tự động</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-100 p-3 rounded-lg">
                  <p className="text-xs text-purple-800 font-medium">🎯 Kết quả: Giảm chi phí vận hành 40-60%</p>
                </div>
              </div>
            </div>

            {/* Instructor 3 - AI in Real Work */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={instructorImage3} 
                alt="Giảng viên HPT" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Giảng viên: HPT</h3>
                <p className="text-primary-600 font-medium mb-3">Chuyên gia Ứng dụng thực tế</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-800 mb-3">💼 PHẦN III - AI IN REAL WORK</h4>
                  <p className="text-sm text-slate-600 mb-3 font-medium">Ứng dụng thực tế</p>
                  
                  <div className="space-y-2">
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-xs text-green-700">• Chatbot nâng cao với hình ảnh</p>
                      <p className="text-xs text-green-700">• Tạo video từ ảnh tự động</p>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-xs text-green-700">• Quy trình tư duy hệ thống</p>
                      <p className="text-xs text-green-700">• Áp dụng vào 10+ ngành nghề</p>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-xs text-green-700">• Case Study: LENA CLOSET</p>
                      <p className="text-xs text-green-700">• Shop thời trang 120-150 triệu/tháng</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="text-xs text-green-800 font-medium">🎯 Kết quả: Tăng hiệu suất 300-500%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tổng kết khóa học */}
          <div className="mt-16 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
              🎓 Lộ trình học hoàn chỉnh
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">AI Master</h4>
                <p className="text-sm text-slate-600">Nền tảng ChatGPT vững chắc</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">AI Automation</h4>
                <p className="text-sm text-slate-600">Tự động hóa quy trình</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">AI in Real Work</h4>
                <p className="text-sm text-slate-600">Ứng dụng thực tế hiệu quả</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg inline-block">
                <p className="font-semibold">💡 Nguyên tắc vàng: "AI không thông minh hơn thông tin bạn đưa cho nó"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

