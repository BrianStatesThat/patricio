'use client';
import { Analytics } from "@vercel/analytics/react"
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navicons from "@/components/Navicons";
import { useEffect,useState } from "react";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});


export default function RootLayout({ children}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) ) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=> {
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])
  return (
    <html lang="en" className="scroll-smooth" >
      <body
        className={`${outfit.className} ${ovo.className} max-w-full intialiased leading-8 overflow-x-hidden dark:bg-darkTheme
        dark:text-white
      `}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        {children}
        <Footer isDarkMode={isDarkMode} />
        <Navicons isDarkMode={isDarkMode}/>
        <Analytics/>
      </body>
    </html>
  );
}
