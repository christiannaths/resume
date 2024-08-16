export function List({
  className,
  items,
}: {
  className?: React.ReactNode;
  items: React.ReactNode[];
}) {
  return (
    <ul className={`pb-2 ${className}`}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
