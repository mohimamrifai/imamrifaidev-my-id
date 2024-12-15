import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "imamrifai.dev",
  description:
    "I am a software engineer and a lover of JavaScript, coding enthusiast, constantly learning and growing, building amazing projects.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
