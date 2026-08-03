import Image from "next/image";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 sm:px-8">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-5 text-xs text-muted-2">
          <span className="flex items-center gap-2.5">
            <Image
              src="/logo-mark.png"
              alt=""
              width={20}
              height={21}
              className="h-5 w-auto"
            />
            © 2026 АгроМонитор
          </span>
          <span>
            Цифры и технические детали — из обзорной статьи автора;
            уточняются перед публикацией.
          </span>
        </div>
      </Container>
    </footer>
  );
}
