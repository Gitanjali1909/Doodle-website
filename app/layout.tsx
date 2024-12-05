import "./globals.css";
import Landing from "./components/Landing"; 
import Hero from "./components/Hero"
import Main from "./components/Main" 
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light-theme">
      <body>
        <Navbar />
        <Hero />
        <Landing />
        <Main />
        <Slider />
        <Footer />
        {children}
      </body>
    </html>
  );
}
