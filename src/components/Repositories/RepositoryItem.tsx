import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RepositoryCard } from './styles';

interface ProjetoProps {
  slug: string;
  title: string;
  type: string;
  img: string;
  github: string;
}

export default function RepositoryItem({ slug, title, type, img, github }: ProjetoProps) {
  return (
    <RepositoryCard data-aos="fade-up">
      <img className="thumbnail" src={img} alt={title} />
      <div className="overlay" />
      <div className="info">
        <h3>{title}</h3>
        <p>{type}</p>
        <div className="actions">
          <Link to={`/project/${slug}`}>
            See more <FaExternalLinkAlt size={11} />
          </Link>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub <FaGithub size={13} />
          </a>
        </div>
      </div>
    </RepositoryCard>
  );
}
