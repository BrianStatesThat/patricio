'use client';
import Services from "@/components/Services";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Subscription from "@/components/Subscription";
import Headerx from "@/components/Headerx";



export default function Home({isDarkMode}) {

  return (
    <>
      <Headerx isDarkMode={isDarkMode}/>
      <Services isDarkMode={isDarkMode} />
      <Subscription isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
