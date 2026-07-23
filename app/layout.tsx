import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Leivas outdoor",
  description: "Leivas outdoor Alicante",
=======
  title: "Leivas outdoor living",
  description: "Espacios exteriores que se viven como un refugio",
>>>>>>> master
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
<<<<<<< HEAD
      lang="en"
      className="h-full antialiased"
=======
      lang="es"
      className={`${montserrat.className} h-full antialiased`}
>>>>>>> master
    >
      <body className="min-h-full">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
