import localFont from "next/font/local";
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
}) 

const ClashDisplay = localFont({
  src: [
    {
      path: "../public/Fonts/OTF/ClashDisplay-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/Fonts/OTF/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Fonts/OTF/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Fonts/OTF/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Fonts/OTF/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/Fonts/OTF/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});

export { ClashDisplay, inter };