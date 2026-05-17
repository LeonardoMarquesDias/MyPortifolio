import { FaExternalLinkAlt } from 'react-icons/fa';
import { FreelanceCard } from './styles';

interface FreelanceItemProps {
  title: string;
  description: string;
  screenshot: string;
  url: string;
}

export default function FreelanceItem({ title, description, screenshot, url }: FreelanceItemProps) {
  return (
    <FreelanceCard href={url} target="_blank" rel="noreferrer" data-aos="fade-up">
      <img className="screenshot" src={screenshot} alt={title} />
      <div className="overlay" />
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="link">
          View project <FaExternalLinkAlt size={11} />
        </span>
      </div>
    </FreelanceCard>
  );
}
