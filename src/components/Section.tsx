type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export function Section({ title, children }: Props) {
  return (
    <section className={`grid grid-cols-8 gap-8 pt-6 relative`}>
      <h2 className={`text-2xl font-bold pt-1 col-span-2`}>{title}</h2>
      <div className="col-span-6">{children}</div>
    </section>
  );
}
