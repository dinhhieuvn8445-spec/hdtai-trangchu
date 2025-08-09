import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 13,
    hours: 23,
    minutes: 59,
    seconds: 57
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-30T23:59:59').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById('dang-ky');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ⏰ THỜI GIAN ƯU ĐÃI CÓ HẠN
          </h2>
          <p className="text-xl mb-8">
            Đăng ký trước ngày 30/10/2025 để nhận ưu đãi đặc biệt
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-12">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
              <div className="text-sm uppercase tracking-wide">Ngày</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm uppercase tracking-wide">Giờ</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm uppercase tracking-wide">Phút</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm uppercase tracking-wide">Giây</div>
            </div>
          </div>

          <Button 
            onClick={scrollToRegistration}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <i className="fas fa-rocket mr-2"></i>
            NHANH TAY ĐĂNG KÝ NGAY!
          </Button>
        </div>
      </div>
    </section>
  );
}
