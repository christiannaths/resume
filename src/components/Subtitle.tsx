type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Subtitle({ children, className = '' }: Props) {
  return <span className={`text-gray-500 ${className}`}>{children}</span>;
}
