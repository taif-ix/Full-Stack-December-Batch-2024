import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../styles/theme.scss'
import Providers from './providers';
// // 'use client';  have to kp client or server compoenent?
// import { Provider } from 'react-redux';
// import { store } from '../store';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// : {children: React.ReactNode } used in ts
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

