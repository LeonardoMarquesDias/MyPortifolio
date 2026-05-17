import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RepositoryContainer } from './styles';

interface ProjetoProps {
  slug: string;
  title: string;
  type: string;
  img: string;
  github: string;
}

export default function RepositoryItem({ slug, title, type, img, github }: ProjetoProps) {
  return (
    <RepositoryContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <p>- {type}</p>
        </div>
      </section>
      <div className="actions">
        <button type="button">
          <Link to={`/project/${slug}`}>
            See more <FaExternalLinkAlt color="#eba417" />
          </Link>
        </button>
        <button type="button">
          <a href={github} target="_blank" rel="noreferrer">
            GitHub <FaGithub color="#eba417" />
          </a>
        </button>
      </div>
    </RepositoryContainer>
  );
}
