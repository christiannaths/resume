type Props = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};

export function Container({ children, as: Tag = 'div', className = '' }: Props) {
  return (
    <Tag className={`container w-[8.5in] mx-auto grid grid-cols-8 gap-8 ${className}`}>
      {children}
    </Tag>
  );
}
