import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramadan Calendar",
  description: "Ramadan Calendar 2024, Ramadan Sehar Iftar Calendar, Remaining Time Sehar | Iftar | Tomorrow Sehar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} `}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <main className="flex flex-col items-center h-full pm-10 sm:pm-0">
          {/* <NavLink href={"/"} className={ "m-3 my-10 rounded-md py-2 px-4 bg-primary/10 border border-border hover:text-muted-foreground" } onActive="underline">Home</NavLink> */}
          <nav className="px-8 py-3 rounded-full border shadow-lg drop-shadow-xl backdrop-blur-md backdrop-brightness-90 sticky sm:absolute mb-10 sm:mb-0 top-1">
            <ol className="flex gap-5">

            <li><Link href={"/"} className="hover:underline text-gradient-c1 hover:text-white">Home</Link></li>
            <li><Link href={"/Now"} className="hover:underline text-gradient-c1 hover:text-white">Now</Link></li>
            </ol>
          </nav>
          {/* <div className="bg-card/5 backdrop-brightness-90 shadow-lg drop-shadow-xl border rounded-xl mb-5 sm:py-10 py-4 sm:px-20 px-8 sm:pb-5 pb-2 backdrop-blur-sm sm:mt-16"> */}
            {children}
          {/* </div> */}
          <div className="flex justify-center items-center text-center border rounded-full py-2 px-3 backdrop-brightness-90 shadow-lg drop-shadow-xl backdrop-blur-sm">
            <a className="text-[#ffb02e] hover:underline" href={"https://github.com/immiProgrammer"} target="_blank">immiProgrammer (Imran Abid)</a>
          </div>
          </main>
      </ThemeProvider>
      </body>
    </html>
  );
}