import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Next JS",
  description: "Next JSF",
};

const RootLayout = ({ children }) => {
  console.log("from RootLayout");
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>{children}</body>
    </html>
  );
};

export default RootLayout;
