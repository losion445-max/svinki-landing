const variants = {
  solid: "bg-foreground text-background hover:text-background/85",
  accent: "bg-accent text-white hover:bg-accent-hover hover:text-white",
  outline: "border border-border text-foreground hover:border-foreground",
};

export function PillLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-colors ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
