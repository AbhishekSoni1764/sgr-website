import { Barlow, Barlow_Condensed, Poppins } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "SGR",
  description: "Shyam Global Resources",
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
