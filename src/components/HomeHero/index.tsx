import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import { Sidebar } from '../Sidebar';

function HomeHero() {
  return (
    <Container data-aos="fade-up">

      <Sidebar />
      <div>
        <TextContainer>
          <h1>Leonardo Dias</h1>
          <h2>SEO Executive & Front-End Developer</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Profile</span> {'\u007B'}
            <div>
              Name: <span className="blue">Leonardo Laureano,</span>
            </div>
            <div>
              Location: <span className="blue">Swindon, UK,</span>
            </div>
            <div>
              Focus: <span className="blue">SEO / GEO / Front-End</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Expertise</span> {'\u007B'}
            <div>
              SEO: <span className="blue">On-Page, Off-Page, Technical,</span>
            </div>
            <div>
              Tools: <span className="blue">SEMrush, GA4, GSC,</span>
            </div>
            <div>
              Dev: <span className="blue">React, Next.js, WordPress,</span>
            </div>
            <div>
              Platforms: <span className="blue">Google, Bing, AI Search</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
