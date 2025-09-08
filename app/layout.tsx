import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vegi Export",
  description: "Export Quality Vegetables,fFruits and Spices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <head>
        {/* Font Awesome CDN */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
