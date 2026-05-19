import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FreelanceCard } from './styles';

interface FreelanceItemProps {
  title: string;
  description: string;
  screenshot: string;
  url: string;
  siteUrl?: string;
  onOpen: () => void;
}

export default function FreelanceItem({ title, description, screenshot, url, siteUrl, onOpen }: FreelanceItemProps) {
  return (
    <FreelanceCard data-aos="fade-up" onClick={onOpen}>
      <img className="screenshot" src={screenshot} alt={title} />
      <div className="overlay" />
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="actions">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn-github"
            onClick={e => e.stopPropagation()}
          >
            GitHub <FaGithub size={13} />
          </a>
          {siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-site"
              onClick={e => e.stopPropagation()}
            >
              Visit site <FaExternalLinkAlt size={11} />
            </a>
          )}
        </div>
      </div>
    </FreelanceCard>
  );
}
