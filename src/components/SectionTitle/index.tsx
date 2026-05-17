import { ReactNode } from 'react';
import { Container } from './styles';

interface SectionTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
  period?: string;
}

function SectionTitle({ title, description, period }: SectionTitleProps) {
  return (
    <Container data-aos="fade-right">
      <h1>{title}</h1>
      <div className="subtitle-row">
        {description && <h2>{description}</h2>}
        {period && <span className="period">{period}</span>}
      </div>
    </Container>
  );
}

export default SectionTitle;
