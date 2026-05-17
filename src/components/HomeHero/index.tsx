import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { Container, LeftCol, Name, Title, Tagline, CTARow, CTAButton, CTALink, RightCol, CodeGrid, CodeItem, CodeAccent, CodeLine, CodeValue } from './styles';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <LeftCol>
        <Name>Leonardo<br />Dias</Name>
        <Title>SEO Executive &amp; Front-End Developer</Title>
        <Tagline>
          I help businesses grow through strategic SEO and performant web experiences — from technical audits to production-ready code.
        </Tagline>
        <CTARow>
          <CTAButton href="#projects">
            View Projects <FaArrowRight />
          </CTAButton>
          <CTALink href="https://github.com/LeonardoMarquesDias" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </CTALink>
        </CTARow>
      </LeftCol>

      <RightCol data-aos="zoom-in">
        <CodeGrid>
          <CodeItem>
            <CodeAccent />
            <div>
              <CodeLine><span className="keyword">const</span> <span className="var">profile</span> <span className="op">=</span> {'{'}</CodeLine>
              <CodeLine indent><span className="key">name:</span> <CodeValue>"Leonardo Laureano"</CodeValue>,</CodeLine>
              <CodeLine indent><span className="key">location:</span> <CodeValue>"Swindon, UK"</CodeValue>,</CodeLine>
              <CodeLine indent><span className="key">focus:</span> <CodeValue>"SEO / GEO / Front-End"</CodeValue>,</CodeLine>
              <CodeLine>{'}'}</CodeLine>
            </div>
          </CodeItem>
          <CodeItem>
            <CodeAccent />
            <div>
              <CodeLine><span className="keyword">const</span> <span className="var">expertise</span> <span className="op">=</span> {'{'}</CodeLine>
              <CodeLine indent><span className="key">seo:</span> <CodeValue>"On-Page, Technical, Off-Page"</CodeValue>,</CodeLine>
              <CodeLine indent><span className="key">tools:</span> <CodeValue>"SEMrush, GA4, GSC"</CodeValue>,</CodeLine>
              <CodeLine indent><span className="key">dev:</span> <CodeValue>"React, Next.js, WordPress"</CodeValue>,</CodeLine>
              <CodeLine indent><span className="key">search:</span> <CodeValue>"Google, Bing, AI Search"</CodeValue>,</CodeLine>
              <CodeLine>{'}'}</CodeLine>
            </div>
          </CodeItem>
        </CodeGrid>
      </RightCol>
    </Container>
  );
}

export default HomeHero;
