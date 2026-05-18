import SectionTitle from '../SectionTitle';
import FreelanceItem from './FreelanceItem';
import { Container } from './styles';

interface IFreelanceProject {
  slug: string;
  title: string;
  description: string;
  screenshot: string;
  url: string;
  siteUrl?: string;
}

interface FreelanceProjectsProps {
  projects: IFreelanceProject[];
}

export default function FreelanceProjects({ projects }: FreelanceProjectsProps) {
  return (
    <Container>
      <SectionTitle title="Freelance" description="Websites & Landing Pages" period="2023 – 2025" />
      <section>
        {projects.slice(0, 4).map(project => (
          <FreelanceItem
            key={project.slug}
            title={project.title}
            description={project.description}
            screenshot={project.screenshot}
            url={project.url}
            siteUrl={project.siteUrl}
          />
        ))}
      </section>
    </Container>
  );
}
