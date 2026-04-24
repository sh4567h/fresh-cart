import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbars from "@/components/navbar";
import Footer from "@/components/footer";
import { Exo } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import AuthProvider from './../provider/auth-provider';
import TopBar from "@/components/Topbar";
 
const exo = Exo({
  subsets:['latin'],
  weight:['400' , '700']
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  
});

export const metadata: Metadata = {
  title: "Fresh Cart",
  description: "Fresh Cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${exo.className} relative `}>
      
      <AuthProvider>
        <TopBar/>
        <Navbars/>
        {children}
         <Toaster position="top-center" richColors />
        <Footer/>
        </AuthProvider>
        </body>
    </html>
  );
}
