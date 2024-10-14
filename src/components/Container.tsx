type Props = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};

export function Container({ children, as: Tag = 'div', className = '' }: Props) {
  return (
    <Tag
      className={`container md:w-[8.5in] mx-auto md:grid md:grid-cols-8 md:gap-8 p-8 md:pb-0 md:px-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
