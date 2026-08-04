"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-4 rounded-[22px] bg-surface p-7 sm:p-9"
    >
      <label className="grid gap-2">
        <span className="text-sm text-muted">Имя и компания</span>
        <input
          type="text"
          name="name"
          className="rounded-xl border border-border bg-background px-4 py-3.5 text-foreground"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm text-muted">E-mail или телефон</span>
        <input
          type="text"
          name="contact"
          className="rounded-xl border border-border bg-background px-4 py-3.5 text-foreground"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm text-muted">Об объекте</span>
        <textarea
          name="details"
          rows={4}
          className="resize-y rounded-xl border border-border bg-background px-4 py-3.5 text-foreground"
        />
      </label>
      <button
        type="submit"
        className="cursor-pointer rounded-full bg-foreground px-6 py-3.5 font-medium text-background hover:text-background/85"
      >
        {sent ? "Заявка отправлена" : "Отправить заявку"}
      </button>
      <div className="text-xs text-muted-2">
        Форма-заглушка: подключить обработчик перед публикацией.
      </div>
    </form>
  );
}
