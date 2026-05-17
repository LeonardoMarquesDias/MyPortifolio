import { FaExternalLinkAlt } from 'react-icons/fa';
import { FreelanceContainer } from './styles';

interface FreelanceItemProps {
  title: string;
  description: string;
  screenshot: string;
  url: string;
}

export default function FreelanceItem({ title, description, screenshot, url }: FreelanceItemProps) {
  function handleRedirect(link: string) {
    window.open(link);
  }

  return (
    <FreelanceContainer imgUrl={screenshot} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <p>- {description}</p>
        </div>
      </section>
      <button type="button">
        <a onClick={() => handleRedirect(url)}>
          Ver projeto <FaExternalLinkAlt color="#eba417" />
        </a>
      </button>
    </FreelanceContainer>
  );
}
