import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-robot text-white text-lg"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-700">HDT AI</h1>
              <p className="text-xs text-slate-600">Công nghệ AI & Giáo dục</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('gioi-thieu')}
              className="text-slate-700 hover:text-primary-600 font-medium"
            >
              Giới thiệu
            </button>
            <button 
              onClick={() => scrollToSection('khoa-hoc')}
              className="text-slate-700 hover:text-primary-600 font-medium"
            >
              Khóa học
            </button>
            <button 
              onClick={() => scrollToSection('giang-vien')}
              className="text-slate-700 hover:text-primary-600 font-medium"
            >
              Giảng viên
            </button>
            <button 
              onClick={() => scrollToSection('lien-he')}
              className="text-slate-700 hover:text-primary-600 font-medium"
            >
              Liên hệ
            </button>
            <Button 
              onClick={() => scrollToSection('dang-ky')}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Đăng ký ngay
            </Button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('gioi-thieu')}
                className="text-slate-700 hover:text-primary-600 font-medium text-left"
              >
                Giới thiệu
              </button>
              <button 
                onClick={() => scrollToSection('khoa-hoc')}
                className="text-slate-700 hover:text-primary-600 font-medium text-left"
              >
                Khóa học
              </button>
              <button 
                onClick={() => scrollToSection('giang-vien')}
                className="text-slate-700 hover:text-primary-600 font-medium text-left"
              >
                Giảng viên
              </button>
              <button 
                onClick={() => scrollToSection('lien-he')}
                className="text-slate-700 hover:text-primary-600 font-medium text-left"
              >
                Liên hệ
              </button>
              <Button 
                onClick={() => scrollToSection('dang-ky')}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors w-full"
              >
                Đăng ký ngay
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
