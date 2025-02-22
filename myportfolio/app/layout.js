import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Brian Speelman",
  description: "Welcome to my portfolio! I am Mandilake Brian Speelman, a passionate front-end developer and AI enthusiast. I specialize in building sleek, responsive websites and AI-powered solutions that enhance user experiences. Explore my projects and see how I bring ideas to life with clean code and innovative design.",
  icons: {
    icon:"/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body
        className={`${outfit.className} ${ovo.className} intialiased leading-8 overflow-x-hidden dark:bg-darkTheme
        dark:text-white
      `}>
        {children}
      </body>
    </html>
  );
}
