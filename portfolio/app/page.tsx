import Image from "next/image";
import ThemeToggle from "../app/components/ThemeToggle";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <div
      className={`${montserrat.variable} font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <nav className="flex justify-between items-center w-full">
        <ThemeToggle />
      </nav>
      <main className="flex flex-col sm:flex-row gap-8 items-center sm:justify-between w-full">
        <div className="flex flex-col gap-8 sm:items-start">
          <h1
            className="text-3xl sm:text-4xl text-center sm:text-left font-bold"
            style={{ color: "var(--geist-foreground)" }}
          >
            Junior Webdeveloper
          </h1>
          <ol className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            <li className="mb-2">
              "Code is more than just technology - it's my way of finding
              creative solutions to real problems."
            </li>
          </ol>
        </div>

        <div className="flex items-center justify-center">
          <Image
            className="dark:invert"
            src="/image.png"
            alt="image"
            width={400}
            height={500}
          />
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
