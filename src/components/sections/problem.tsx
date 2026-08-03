import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  {
    value: "37 000",
    label: "голов в типовом комплексе — референсный расчёт",
  },
  {
    value: "часы",
    label: "окно, в котором лихорадка опережает видимые признаки",
  },
  {
    value: "1 : 1000+",
    label: "соотношение персонала и поголовья при визуальном контроле",
  },
];

const rows = [
  {
    approach: "Стационарные тепловизоры",
    coverage: "точечное",
    limitation: "нужны десятки камер на секцию — стоимость сенсоров кратно выше",
  },
  {
    approach: "Рельсовые системы",
    coverage: "линейное",
    limitation: "капитальный монтаж, жёсткая траектория, перестройка помещения",
  },
  {
    approach: "БПЛА в помещении",
    coverage: "площадное",
    limitation: "шум и стресс животных, короткий полёт, риск падения",
  },
  {
    approach: "Тросовая платформа «АгроМонитор»",
    coverage: "площадное, вся секция",
    limitation: "один сенсорный модуль, приводы на периметре, пол и проходы свободны",
    highlight: true,
  },
];

export function Problem() {
  return (
    <section id="problem" className="bg-surface px-5 py-16 sm:px-8 sm:py-20 md:py-24">
      <Container>
        <Eyebrow>Проблема отрасли</Eyebrow>
        <h2 className="mt-5 max-w-3xl text-[clamp(1.875rem,3.8vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-balance">
          Потери от поздней диагностики закладываются в себестоимость как
          норма
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-muted">
          Промышленное животноводство — это плотное содержание десятков тысяч
          голов в закрытых помещениях. Инфекция распространяется быстрее, чем
          её успевают заметить обходом.
        </p>

        <Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.value} className="rounded-[18px] bg-background p-8">
                <div className="text-[clamp(1.875rem,3.4vw,2.5rem)] font-semibold tracking-[-0.03em]">
                  {stat.value}
                </div>
                <div className="mt-2.5 text-sm leading-relaxed text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={70}>
          <h3 className="mt-20 text-2xl font-semibold tracking-tight">
            Почему существующие решения не закрывают задачу
          </h3>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
            Тепловизор — дорогой сенсор. Вопрос не в том, чтобы его
            поставить, а в том, как одним сенсором покрыть всю площадь
            секции.
          </p>

          <div className="mt-7 overflow-x-auto rounded-[18px] bg-background">
            <table className="w-full min-w-[720px] border-collapse text-[15.5px]">
              <thead>
                <tr className="text-left">
                  {["Подход", "Покрытие площади", "Ограничение"].map((h) => (
                    <th
                      key={h}
                      className="border-b border-border px-6 py-5 font-mono text-[11.5px] font-medium tracking-[0.12em] text-muted-2 uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.approach}
                    className={row.highlight ? "bg-positive-surface" : ""}
                  >
                    <td
                      className={`px-6 py-5 ${row.highlight ? "font-semibold text-positive-text" : "border-b border-[#F1F1F4] font-medium"}`}
                    >
                      {row.approach}
                    </td>
                    <td
                      className={`px-6 py-5 ${row.highlight ? "text-foreground" : "border-b border-[#F1F1F4] text-muted"}`}
                    >
                      {row.coverage}
                    </td>
                    <td
                      className={`px-6 py-5 ${row.highlight ? "text-muted" : "border-b border-[#F1F1F4] text-muted"}`}
                    >
                      {row.limitation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
