import { ClashDisplay, inter } from "../utils/CustomFonts";
import "./globals.css";

export const metadata = {
  title: "IDEATECH2",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ClashDisplay.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
