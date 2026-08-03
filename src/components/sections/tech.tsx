import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const components = [
  {
    n: "01",
    title: "Тепловизор",
    text: "карта температур поверхности тела, поиск отклонений от нормы стада",
  },
  {
    n: "02",
    title: "RGB-камера",
    text: "визуальная привязка аномалии к конкретной особи и её позиции",
  },
  {
    n: "03",
    title: "Вычислительный модуль",
    text: "обработка на борту, без выгрузки видеопотока во внешний контур",
  },
  {
    n: "04",
    title: "Лазерный целеуказатель",
    text: "подсветка животного, чтобы персонал нашёл его в плотной группе",
  },
];

const steps = [
  {
    label: "ШАГ 1",
    title: "Обход зоны",
    text: "Платформа проходит секцию по заданному маршруту и снимает тепловую карту.",
  },
  {
    label: "ШАГ 2",
    title: "Обнаружение аномалии",
    text: "Температура особи сравнивается с фоном стада, отклонение фиксируется.",
  },
  {
    label: "ШАГ 3",
    title: "Подсветка и оповещение",
    text: "Лазер указывает на животное, персонал получает уведомление с координатами.",
    highlight: true,
  },
];

function DiagramPlaceholder({
  ratio,
  caption,
  note,
}: {
  ratio: string;
  caption: string;
  note: string;
}) {
  return (
    <figure className="m-0">
      <div
        className={`flex items-center justify-center rounded-[18px] bg-surface bg-[repeating-linear-gradient(135deg,rgba(26,26,28,0.05)_0_1px,transparent_1px_10px)] p-5 text-center ${ratio}`}
      >
        <span className="font-mono text-xs tracking-wide text-muted-2">
          {caption}
        </span>
      </div>
      <figcaption className="mt-2.5 text-[13px] text-muted-2">{note}</figcaption>
    </figure>
  );
}

export function Tech() {
  return (
    <section id="tech" className="bg-background px-5 py-16 sm:px-8 sm:py-20 md:py-24">
      <Container>
        <Eyebrow>Технология</Eyebrow>
        <h2 className="mt-5 max-w-2xl text-[clamp(1.875rem,3.8vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-balance">
          Четыре лебёдки, четыре троса, один сенсорный модуль
        </h2>

        <div className="mt-12 grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <Reveal>
            <div className="grid gap-7">
              <p className="text-lg leading-relaxed text-pretty text-muted">
                Модуль подвешен на четырёх тросах, закреплённых по углам
                помещения. Согласованная работа лебёдок задаёт положение
                модуля в объёме над зоной содержания — без рельсов, без опор
                внутри секции и без нагрузки на кровлю.
              </p>
              <div className="divide-y divide-border overflow-hidden rounded-[18px] bg-surface">
                {components.map((c) => (
                  <div key={c.n} className="flex gap-4 px-6 py-5">
                    <span className="min-w-6 font-mono text-xs text-accent">
                      {c.n}
                    </span>
                    <div>
                      <div className="font-semibold">{c.title}</div>
                      <div className="mt-1 text-sm leading-relaxed text-muted">
                        {c.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <div className="grid gap-6">
              <DiagramPlaceholder
                ratio="aspect-[4/3]"
                caption="кинематическая схема тросового подвеса (4 лебёдки)"
                note="Схема готовится отдельно — заменить файлом из статьи"
              />
              <DiagramPlaceholder
                ratio="aspect-video"
                caption="общий вид платформы в помещении / фото прототипа"
                note="Фото или видео прототипа при наличии"
              />
            </div>
          </Reveal>
        </div>

        <h3 className="mt-20 text-2xl font-semibold tracking-tight">
          Цикл мониторинга
        </h3>
        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 70}>
              <div
                className={`rounded-[18px] p-8 ${step.highlight ? "bg-positive-surface" : "bg-surface"}`}
              >
                <div
                  className={`font-mono text-[11.5px] tracking-[0.12em] ${step.highlight ? "text-positive" : "text-accent"}`}
                >
                  {step.label}
                </div>
                <div className="mt-3.5 text-lg font-semibold tracking-tight">
                  {step.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
