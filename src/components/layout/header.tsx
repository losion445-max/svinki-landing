import Image from "next/image";
import { Container } from "@/components/ui/container";

const navLinks = [
  { href: "#problem", label: "Проблема" },
  { href: "#tech", label: "Технология" },
  { href: "#economics", label: "Экономика" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between gap-4 py-3 sm:py-4">
          <a href="#top" className="flex items-center gap-3 text-foreground">
            <Image
              src="/logo.png"
              alt="АгроМонитор"
              width={56}
              height={56}
              priority
              className="h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14"
            />
            <span className="text-lg font-semibold tracking-tight sm:text-xl">
              АгроМонитор
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-muted hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacts"
            className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-white hover:text-white/85 sm:px-5"
          >
            Связаться
          </a>
        </div>
      </Container>
    </header>
  );
}
