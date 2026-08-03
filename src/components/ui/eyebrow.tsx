const colors = {
  accent: "text-accent",
  muted: "text-muted-2",
  positive: "text-positive",
};

export function Eyebrow({
  children,
  color = "accent",
}: {
  children: React.ReactNode;
  color?: keyof typeof colors;
}) {
  return (
    <div
      className={`font-mono text-xs tracking-[0.14em] uppercase ${colors[color]}`}
    >
      {children}
    </div>
  );
}
