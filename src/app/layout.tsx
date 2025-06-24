import type { Metadata } from "next";
import {
  Dancing_Script,
  Geist,
  Geist_Mono,
  Great_Vibes,
  Pacifico,
  Playball,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});
const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"], // Thêm các trọng số bạn cần
});
const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const playball = Playball({
  variable: "--font-playball",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Thiệp mời lễ tốt nghiệp",
  description: "Lời mời tham dự lễ tốt nghiệp của Kông",
  openGraph: {
    title: "Lời mời lễ tốt nghiệp",
    description: "Lời mời tham dự lễ tốt nghiệp của Kông",
    // url: "https://kongdev123.id.vn/",
    type: "website",
    images: [
      {
        url: "https://kongdev123.id.vn/img/og-image.jpg",
        alt: "Ảnh lễ tốt nghiệp",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
      ${geistMono.variable} 
      ${playfairDisplay.variable} 
      ${greatVibes.variable}
      ${dancingScript.variable}
      ${pacifico.variable}
      ${playball.variable}
      antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
