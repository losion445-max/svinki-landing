import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PillLink } from "@/components/ui/pill-link";

const stats = [
  {
    value: "25,7",
    color: "text-accent",
    label: "млн ₽ в год — экономия на комплексе 37 000 голов",
  },
  {
    value: "−4",
    color: "text-foreground",
    label: "процентных пункта смертности поголовья",
  },
  {
    value: "24/7",
    color: "text-positive",
    label: "непрерывный обход всей площади секции",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="bg-gradient-to-b from-background to-surface px-5 py-16 text-center sm:px-8 sm:py-24 md:py-28"
    >
      <Container>
        <div className="mx-auto max-w-[940px]">
          <Image
            src="/logo-mark.png"
            alt="АгроМонитор"
            width={76}
            height={80}
            priority
            className="mx-auto mb-7 h-14 w-auto sm:h-[76px]"
          />
          <Eyebrow>Роботизированный тепловизионный мониторинг</Eyebrow>
          <h1 className="mt-5 text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.04] font-semibold tracking-[-0.035em] text-balance">
            Болезнь видно по температуре — раньше, чем её увидит человек
          </h1>
          <p className="mx-auto mt-6 max-w-[660px] text-[clamp(1.125rem,2.1vw,1.3125rem)] leading-[1.55] text-pretty text-muted">
            Тросовая платформа с тепловизором перемещается над зоной
            содержания животных, выявляет температурные аномалии в реальном
            времени и указывает персоналу на конкретную особь.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <PillLink href="#contacts" variant="accent">
              Связаться
            </PillLink>
            <PillLink href="#tech" variant="outline">
              Как это работает
            </PillLink>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-3 sm:gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className={`text-[clamp(2.875rem,5.6vw,4rem)] leading-none font-semibold tracking-[-0.04em] ${stat.color}`}
              >
                {stat.value}
              </div>
              <div className="mt-3 text-sm leading-relaxed text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
