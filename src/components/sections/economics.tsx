import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const savings = [
  "учтён только эффект от сохранённого поголовья;",
  "не учтены экономия ветпрепаратов и сокращение карантинов;",
  "не учтены привес и снижение трудозатрат на обходы.",
];

export function Economics() {
  return (
    <section
      id="economics"
      className="bg-surface px-5 py-16 sm:px-8 sm:py-20 md:py-24"
    >
      <Container>
        <Eyebrow>Экономика</Eyebrow>
        <h2 className="mt-5 max-w-2xl text-[clamp(1.875rem,3.8vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-balance">
          Эффект считается на снижении смертности поголовья
        </h2>

        <Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-[22px] bg-background p-8 sm:p-11">
              <div className="text-sm text-muted-2">Комплекс 37 000 голов</div>
              <div className="mt-3.5 flex flex-wrap items-baseline gap-3">
                <span className="text-[clamp(3rem,6.4vw,4.75rem)] leading-[0.92] font-semibold tracking-[-0.045em] text-accent">
                  25,7
                </span>
                <span className="text-lg font-semibold">млн ₽ / год</span>
              </div>
              <div className="mt-4 text-base leading-relaxed text-muted">
                Экономия при снижении смертности на 4 процентных пункта —
                около 1 480 сохранённых голов в год.
              </div>
            </div>

            <div className="rounded-[22px] bg-positive-surface p-8 sm:p-11">
              <div className="text-sm font-medium text-positive-text">
                Оценка консервативная
              </div>
              <ul className="mt-4 grid gap-3 pl-5 text-base leading-relaxed text-muted">
                {savings.map((item) => (
                  <li key={item} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <p className="mt-7 max-w-2xl text-sm leading-relaxed text-muted-2">
          Точную модель для конкретного объекта готовим по запросу — с учётом
          площади секций, структуры стада и текущей статистики выбытия.
        </p>
      </Container>
    </section>
  );
}
