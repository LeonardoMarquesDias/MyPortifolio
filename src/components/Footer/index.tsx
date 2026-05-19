import {
  AiOutlineGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { FiArrowUp, FiMail } from 'react-icons/fi';
import StackCarousel from '../StackCarousel';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <StackCarousel />
      <div className="container-content">
        <a className="email-link" href="mailto:leonardolaureanomarquesdias@gmail.com">
          <FiMail />
          leonardolaureanomarquesdias@gmail.com
        </a>
        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/LeonardoMarquesDias')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://www.linkedin.com/in/leolmdias/')}
          />
          <button type="button" onClick={handleScrollTop} className="scroll-top">
            <FiArrowUp />
          </button>
        </section>
      </div>
    </Container>
  );
}

export default Footer;