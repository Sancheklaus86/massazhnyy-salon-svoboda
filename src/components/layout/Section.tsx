import { cn } from '@/lib/cn';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  fullWidth?: boolean;
}

export function Section({ children, className, containerClassName, id, fullWidth = false }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 md:py-32 relative', className)}>
      {fullWidth ? children : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
