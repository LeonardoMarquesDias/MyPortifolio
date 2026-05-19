import { FaGithub, FaArrowRight, FaLinkedin, FaCircle } from 'react-icons/fa';
import {
  Container, LeftCol, Name, Title, Tagline, CTARow, CTAButton, CTALink,
  RightCol, CodeBlock, CodeAccent, CodeLine, CodeValue, CodeTab,
  AvailableBadge, LineNumber, CodeCursor, LineNumbers, CodeBody
} from './styles';

function HomeHero() {
  const lines = [
    { num: 1,  content: <><span className="keyword">const</span> <span className="var"> profile</span> <span className="op"> =</span> {'{'}</> },
    { num: 2,  content: <><span className="key">  location:</span> <CodeValue> "United Kingdom"</CodeValue>,</> },
    { num: 3,  content: <><span className="key">  role:</span> <CodeValue> "Junior SEO Executive"</CodeValue>,</> },
    { num: 4,  content: <><span className="key">  studying:</span> <CodeValue> "GEO (Generative Engine Optimization)"</CodeValue>,</> },
    { num: 5,  content: <><span className="key">  available:</span> <span className="available"> "open to opportunities"</span>,</> },
    { num: 6,  content: <>{'}'};</> },
    { num: 7,  content: <>&nbsp;</> },
    { num: 8,  content: <><span className="keyword">const</span> <span className="var"> expertise</span> <span className="op"> =</span> {'{'}</> },
    { num: 9,  content: <><span className="key">  seo:</span> <CodeValue> "On-Page, Technical, Off-Page"</CodeValue>,</> },
    { num: 10, content: <><span className="key">  seoTools:</span> <CodeValue> "SEMrush, Ahrefs, Screaming Frog, GA4, GSC"</CodeValue>,</> },
    { num: 11, content: <><span className="key">  search:</span> <CodeValue> "Google, Bing, AI Search"</CodeValue>,</> },
    { num: 12, content: <><span className="key">  languages:</span> <CodeValue> "HTML, CSS, JavaScript"</CodeValue>,</> },
    { num: 13, content: <><span className="key">  frameworks:</span> <CodeValue> "React, Next.js"</CodeValue>,</> },
    { num: 14, content: <><span className="key">  cms:</span> <CodeValue> "WordPress, Sanity, Prismic"</CodeValue>,</> },
    { num: 15, content: <><span className="key">  versionControl:</span> <CodeValue> "Git, GitHub, GitFlow"</CodeValue>,</> },
    { num: 16, content: <>{'}'};</> },
  ];

  return (
    <Container>
      <LeftCol>
        <AvailableBadge>
          <FaCircle size={8} className="pulse-dot" />
          Available for work
        </AvailableBadge>

        <Name>Leonardo<br />Dias</Name>
        <Title>Junior SEO Executive</Title>
        <Tagline>
          SEO strategist and Technical executive — I combine technical audits, structured data, and production-ready code to help businesses rank higher and convert better.
        </Tagline>
        <CTARow>
          <CTAButton href="#portfolio">
            View Portfolio <FaArrowRight />
          </CTAButton>
          <CTALink href="https://www.linkedin.com/in/leonardodiasseo/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </CTALink>
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
          <CodeBody>
            <LineNumbers>
              {lines.map(l => <LineNumber key={l.num}>{l.num}</LineNumber>)}
            </LineNumbers>
            <div className="lines">
              {lines.map((l, i) => (
                <CodeLine key={l.num}>
                  {l.content}
                  {i === lines.length - 1 && <CodeCursor />}
                </CodeLine>
              ))}
            </div>
          </CodeBody>
        </CodeBlock>
      </RightCol>
    </Container>
  );
}

export default HomeHero;
