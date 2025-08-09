import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Curriculum from "@/components/curriculum";
import Instructors from "@/components/instructors";
import Countdown from "@/components/countdown";
import RegistrationForm from "@/components/registration-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter bg-white text-slate-800">
      <Header />
      <Hero />
      <Features />
      <Curriculum />
      <Instructors />
      <Countdown />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
