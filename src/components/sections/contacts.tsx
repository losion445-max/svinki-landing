import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ContactForm } from "@/components/sections/contact-form";

const rows = [
  { label: "E-mail", value: <a href="mailto:info@agromonitor.ru">info@agromonitor.ru</a> },
  { label: "Телефон", value: <span className="text-muted">уточнить</span> },
  {
    label: "Публикация",
    value: <span className="text-muted">Родимов О.А., ДГТУ — обзорная статья</span>,
  },
];

export function Contacts() {
  return (
    <section id="contacts" className="bg-background px-5 py-16 sm:px-8 sm:py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <div>
            <Eyebrow>Контакты</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.625rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-balance">
              Обсудить пилот на вашем комплексе
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-pretty text-muted">
              Расскажите о площадке — площадь секции, поголовье, текущий
              контроль. Ответим с оценкой применимости и порядком цифр.
            </p>
            <div className="mt-8 grid gap-3.5 text-base">
              {rows.map((row) => (
                <div key={row.label} className="flex gap-3.5">
                  <span className="min-w-21 text-sm text-muted-2">
                    {row.label}
                  </span>
                  {row.value}
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
