import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import { Sidebar } from '../Sidebar';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      
      <Sidebar />
      <div>
        <TextContainer>
          <h1>Hello...</h1>
          <h2>Welcome</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Name: <span className="blue">Leonardo,</span>
            </div>
            <div>
              Surname: <span className="blue">Dias,</span>
            </div>
            <div>
              Location: <span className="blue">United Kingdom</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Job</span> {'\u007B'}
            <div>
              Developer: <span className="blue">Front-End,</span>
            </div>
            <div>
              Technology: <span className="blue">ReactJS,</span>
            </div>
            <div>
              Learning: <span className="blue">NextJS,</span>
            </div>
            <div>
              Design: <span className="blue">UI</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
