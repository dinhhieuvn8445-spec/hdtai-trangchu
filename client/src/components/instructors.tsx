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
            {/* Instructor 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={instructorImage1} 
                alt="Giảng viên Hoàng Anh Tú" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Giảng viên: Hoàng Anh Tú</h3>
                <p className="text-primary-600 font-medium mb-3">zyt - xingmuzi134</p>
                <div className="mb-4">
                  <p className="text-sm text-slate-600 mb-2">Chuyên môn:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Canva</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">ChatGPT</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Capcut</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">YouTube</span>
                  </div>
                </div>
                <p className="text-slate-700 text-sm">
                  "Tôi đã giảng dạy về các công cụ hỗ trợ Marketing, các công cụ AI như Leonardo AI, KlingAI, Digen, HeyGen, D-ID, Video-Gen..."
                </p>
              </div>
            </div>

            {/* Instructor 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={instructorImage2} 
                alt="Giảng viên Thanh Hải" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Giảng viên: Thanh Hải</h3>
                <p className="text-primary-600 font-medium mb-3">Automation Specialist</p>
                <div className="mb-4">
                  <p className="text-sm text-slate-600 mb-2">Chuyên môn:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Make</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">N8N</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Rapier</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">ManyChat</span>
                  </div>
                </div>
                <p className="text-slate-700 text-sm">
                  "Tôi đã giảng dạy về các công cụ hỗ trợ Marketing, các công cụ Automations hỗ trợ xây dựng quy trình tự động hóa cho nhiều cá nhân và doanh nghiệp..."
                </p>
              </div>
            </div>

            {/* Instructor 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={instructorImage3} 
                alt="Giảng viên HPT" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Giảng viên: HPT</h3>
                <p className="text-primary-600 font-medium mb-3">Open Source Developer</p>
                <div className="mb-4">
                  <p className="text-sm text-slate-600 mb-2">Chuyên môn:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Open Hand</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Devin</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">OpenAI</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">Programming</span>
                  </div>
                </div>
                <p className="text-slate-700 text-sm">
                  "Tôi đã giảng dạy về các công cụ mã nguồn mở, các công cụ AI và lập trình mã nguồn mở, lập trình hướng đối tượng..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
