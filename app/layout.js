import Link from "next/link";
import "./globals.css";
import { Fugaz_One, Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Moodly",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={"/"}>
        <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}>
          Moodly
        </h1>
        <div className="flex items-center justify-center">
          PLACEHOLDER CTA || STATUS
        </div>
      </Link>
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <Link
        href={"https://github.com/gaurav0909-max"}
        target="_blank"
        className=""
      >
        <p
          className={
            "text-indigo-500 duration-200 hover:text-white hover:bg-indigo-500  " +
            fugaz.className
          }
        >
          Created by ❤
        </p>
      </Link>
    </footer>
  );

  return (
    <html lang="en">
      <body
        className={
          "w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-600  " +
          opensans.className
        }
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
