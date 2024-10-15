import { Montserrat } from "next/font/google";
import Head from "next/head";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Junior Webdeveloper Portfolio</title>
        <meta
          name="description"
          content="Showcasing my work as a junior web developer."
        />
      </Head>

      <main>Home</main>
      <footer className="flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
