import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const items = [
  {
    eyebrow: "01 — ПРОБЛЕМА",
    title: "Диагностика приходит поздно",
    text: "Один оператор обслуживает тысячи голов. Клинические признаки заметны, когда болезнь уже распространилась по секции.",
  },
  {
    eyebrow: "02 — РЕШЕНИЕ",
    title: "Подвижный тепловизор над стадом",
    text: "Тросовая платформа накрывает всю площадь секции одним сенсорным модулем и не занимает пол и потолочные конструкции.",
  },
  {
    eyebrow: "03 — РЕЗУЛЬТАТ",
    title: "Раннее вмешательство",
    text: "Больное животное подсвечивается лазером, персонал получает оповещение и изолирует его до вспышки заболевания.",
    highlight: true,
  },
];

export function ProblemSolutionResult() {
  return (
    <section className="bg-background px-5 py-16 sm:px-8 sm:py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-16">
          {items.map((item, i) => (
            <Reveal key={item.eyebrow} delay={i * 70}>
              <div
                className={
                  item.highlight
                    ? "-m-8 rounded-[22px] bg-positive-surface p-8"
                    : ""
                }
              >
                <Eyebrow color={item.highlight ? "positive" : "muted"}>
                  {item.eyebrow}
                </Eyebrow>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[16.5px] leading-relaxed text-pretty text-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
