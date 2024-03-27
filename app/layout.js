import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Облачные сервисы",
  description: "Made with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
    <Header/>
    { children }
    <Footer/>
    </html>
  );
}
