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
          <a href="#top" className="flex items-center text-foreground">
            <Image
              src="/logo-lockup.png"
              alt="АгроМонитор"
              width={140}
              height={28}
              priority
              className="h-7 w-auto sm:h-8"
            />
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
