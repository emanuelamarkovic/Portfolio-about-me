import "./globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Navbar from "./components/navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${montserrat.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
