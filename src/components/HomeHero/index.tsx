import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { Container, LeftCol, Name, Title, Tagline, CTARow, CTAButton, CTALink, RightCol, CodeBlock, CodeAccent, CodeLine, CodeValue, CodeTab } from './styles';

function HomeHero() {
  return (
    <Container>
      <LeftCol>
        <Name>Leonardo<br />Dias</Name>
        <Title>Junior SEO Executive &amp; Front-End Developer</Title>
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

      <RightCol>
        <CodeBlock>
          <CodeAccent>
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <CodeTab>portfolio.js</CodeTab>
          </CodeAccent>
          <div className="body">
            <CodeLine><span className="keyword">const</span> <span className="var">profile</span> <span className="op">=</span> {'{'}</CodeLine>
            <CodeLine indent><span className="key">location:</span> <CodeValue>"United Kingdom"</CodeValue>,</CodeLine>
            <CodeLine indent><span className="key">role:</span> <CodeValue>"Junior SEO Executive"</CodeValue>,</CodeLine>
            <CodeLine indent><span className="key">studying:</span> <CodeValue>"GEO (Generative Engine Optimization)"</CodeValue>,</CodeLine>
            <CodeLine>{'}'};</CodeLine>
            <CodeLine>&nbsp;</CodeLine>
            <CodeLine><span className="keyword">const</span> <span className="var">expertise</span> <span className="op">=</span> {'{'}</CodeLine>
            <CodeLine indent><span className="key">seo:</span> <CodeValue>"On-Page, Technical, Off-Page"</CodeValue>,</CodeLine>
            <CodeLine indent><span className="key">seoTools:</span> <CodeValue>"SEMrush, GA4, GSC"</CodeValue>,</CodeLine>
            <CodeLine indent><span className="key">search:</span> <CodeValue>"Google, Bing, AI Search"</CodeValue>,</CodeLine>
            <CodeLine indent><span className="key">languages:</span> <CodeValue>"HTML, CSS, JavaScript"</CodeValue>,</CodeLine>
            <CodeLine indent><span className="key">frameworks:</span> <CodeValue>"React, Next.js"</CodeValue>,</CodeLine>
            <CodeLine indent><span className="key">cms:</span> <CodeValue>"WordPress, Sanity, Prismic"</CodeValue>,</CodeLine>
            <CodeLine>{'}'};</CodeLine>
          </div>
        </CodeBlock>
      </RightCol>
    </Container>
  );
}

export default HomeHero;
