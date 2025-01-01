import { Barlow, Barlow_Condensed, Poppins } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ['400', '500', '700'],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ['400', '500', '700'],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: "SGR - Shyam Global Resources",
  description: "Shyam Global Resources",
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
