import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ContactFormSection from "./component/Home/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kailey Air Systems | Professional HVAC Services in San Jose",
  description: "Expert residential and commercial AC repair, heating installation, and maintenance services in the Greater Bay Area. 24/7 Emergency Service.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth"> 
      <body className={`${inter.className} antialiased text-gray-900 bg-white`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <ContactFormSection />
        <Footer />
      </body>
    </html>
  );
}