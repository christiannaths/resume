type Props = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};

export function Container({ children, as: Tag = 'div', className = '' }: Props) {
  return (
    <Tag
      className={`container md:w-[8.5in] print:w-[8.5in] mx-auto md:grid md:grid-cols-8 md:gap-8  md:pb-0 md:px-8 print:grid print:grid-cols-8 print:gap-8 print:pb-0 print:px-8 p-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
