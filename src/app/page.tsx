import FeaturedCoursed from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChoosesUs from "@/components/WhyChoosesUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased ">
      <HeroSection/>
      <FeaturedCoursed/>
      <WhyChoosesUs/>
      <TestimonialCards/>
    </main>
  );
}
