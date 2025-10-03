import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export const metadata = {
  title: "Music blog by Megabass",
  description: "A blog of music I listen to.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className} id="body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
