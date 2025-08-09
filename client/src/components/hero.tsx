import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToRegistration = () => {
    const element = document.getElementById('dang-ky');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="fas fa-fire mr-2"></i>
            Dành riêng cho 200 người đăng ký đầu tiên
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Khóa học <span className="text-primary-600">AI Master</span><br />
            Chuyên nghiệp từ A-Z
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Học ChatGPT, AI Automation và ứng dụng thực tế trong công việc. 
            Từ căn bản đến nâng cao với đội ngũ giảng viên chuyên nghiệp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
              <i className="fas fa-play mr-2"></i>
              Xem video giới thiệu
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors"
            >
              Tải tài liệu miễn phí
            </Button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <div className="text-center">
              <p className="text-slate-600 mb-2">Giá đặc biệt hôm nay</p>
              <div className="text-5xl font-bold text-primary-600 mb-2">0 VNĐ</div>
              <p className="text-slate-500 line-through mb-4">9.000.000đ</p>
              <p className="text-sm text-green-600 font-medium bg-green-50 px-4 py-2 rounded-lg">
                + Tặng kèm sách thiết kế công việc cho trợ lý cá nhân
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
