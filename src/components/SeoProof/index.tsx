import { useState } from 'react';
import SectionTitle from '../SectionTitle';
import { Container, Grid, ScreenshotCard, Lightbox } from './styles';

interface ISeoScreenshot {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface SeoProofProps {
  screenshots: ISeoScreenshot[];
}

export default function SeoProof({ screenshots }: SeoProofProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Container>
      <SectionTitle title="SEO" description="Proven Results" />
      <Grid>
        {screenshots.map(item => (
          <ScreenshotCard
            key={item.id}
            data-aos="fade-up"
            onClick={() => setSelected(item.image)}
          >
            <div className="img-wrapper">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </ScreenshotCard>
        ))}
      </Grid>

      {selected && (
        <Lightbox onClick={() => setSelected(null)}>
          <img src={selected} alt="SEO screenshot ampliado" onClick={e => e.stopPropagation()} />
          <button onClick={() => setSelected(null)} aria-label="Fechar">×</button>
        </Lightbox>
      )}
    </Container>
  );
}
