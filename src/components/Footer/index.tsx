import {
  AiOutlineGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { FiArrowUp, FiMail } from 'react-icons/fi';
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
      <div className="container-content">
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
        <a className="email-link" href="mailto:leonardolaureanomarquesdias@gmail.com">
          <FiMail />
          leonardolaureanomarquesdias@gmail.com
        </a>
      </div>
    </Container>
  );
}

export default Footer;