import FeaturedCoursed from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Teachers from "@/components/Teachers";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoosesUs from "@/components/WhyChoosesUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased ">
      <HeroSection/>
      <FeaturedCoursed/>
      <WhyChoosesUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Teachers/>
      <Footer/>
      
    </main>
  );
}
