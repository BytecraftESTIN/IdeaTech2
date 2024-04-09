import { ClashDisplay, inter } from "../utils/customFonts";
import "./globals.css";

export const metadata = {
  title: "IDEATECH3",
  description: "Ideatech3 is a tech event that brings together tech enthusiasts to ideate and technicate together. hosted for the second version by ByteCraft Algeria ESTIN Bejaia.",
  icons: "./logo.png",
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
