'use client';
import Services from "@/components/Services";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Subscription from "@/components/Subscription";
import Headerx from "@/components/Headerx";
import Ratings from "@/components/Ratings";



export default function Home({isDarkMode}) {

  return (
    <div className="max-w-full overflow-hidden">
      <Headerx isDarkMode={isDarkMode}/>
      <Services isDarkMode={isDarkMode} />
      <Subscription isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Ratings isDarkMode={isDarkMode} />
    </div>
  );
}
