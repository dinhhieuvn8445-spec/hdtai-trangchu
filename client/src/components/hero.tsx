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


        </div>
      </div>
    </section>
  );
}
