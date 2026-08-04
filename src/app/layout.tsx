import type { Metadata } from "next";
import { Golos_Text, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "АгроМонитор — тепловизионный мониторинг здоровья животных",
  description:
    "АгроМонитор — роботизированная тросовая система тепловизионного мониторинга здоровья животных для закрытых животноводческих комплексов.",
};

const themeInitScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${golos.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
