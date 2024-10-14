import { Container } from './Container';

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export function Section({ title, children }: Props) {
  return (
    <Container as="section" className={`pt-6 relative`}>
      <h2 className={`text-2xl font-bold pt-1 md:col-span-2`}>{title}</h2>
      <div className="md:col-span-6">{children}</div>
    </Container>
  );
}
