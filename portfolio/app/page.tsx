import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1
          className="text-3xl sm:text-4xl text-center sm:text-left font-bold"
          style={{ color: "var(--geist-foreground)" }}
        >
          Junior Webdeveloper
        </h1>
        <ol className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          <li className="mb-2">
            "Code is more than just technology - it's my way of finding creative
            solutions to real problems."
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Image
            className="dark:invert"
            src="/image.png "
            alt="image"
            width={100}
            height={100}
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
