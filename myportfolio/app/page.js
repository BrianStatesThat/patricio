'use client';
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Footer from "@/components/Footer";



export default function Home({isDarkMode}) {

  return (
    <>
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
