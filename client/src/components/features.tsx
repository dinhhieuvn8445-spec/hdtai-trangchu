export default function Features() {
  return (
    <section id="gioi-thieu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Tại sao chọn khóa học HDT AI?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Khóa học được thiết kế bài bản, từ căn bản đến nâng cao, 
              với phương pháp giảng dạy khoa học và ứng dụng thực tế.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-book-open text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-3">Nội dung toàn diện</h3>
              <p className="text-slate-600 text-sm">
                Từ ChatGPT cơ bản đến AI Automation nâng cao, bám sát nhu cầu công việc thực tế.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-green-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cogs text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-3">Phương pháp khoa học</h3>
              <p className="text-slate-600 text-sm">
                5 phương pháp ra lệnh độc quyền, quản lý session bài bản, thực hành trên case thực tế.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-purple-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tools text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-3">Bộ công cụ độc quyền</h3>
              <p className="text-slate-600 text-sm">
                Hàng chục prompt mẫu, template sẵn dùng, ví dụ thực chiến chi tiết từng bước.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-orange-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-headset text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-3">Hỗ trợ cá nhân hóa</h3>
              <p className="text-slate-600 text-sm">
                Mentoring 1:1, nhóm hỗ trợ riêng, cập nhật liên tục theo công nghệ mới nhất.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
