'use client';
import Services from "@/components/Services";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Subscription from "@/components/Subscription";



export default function Home({isDarkMode}) {

  return (
    <>
      <Services isDarkMode={isDarkMode} />
      <Subscription isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
