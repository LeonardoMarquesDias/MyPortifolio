import SectionTitle from '../SectionTitle';
import FreelanceItem from './FreelanceItem';
import { Container } from './styles';

interface IFreelanceProject {
  slug: string;
  title: string;
  description: string;
  screenshot: string;
  url: string;
}

interface FreelanceProjectsProps {
  projects: IFreelanceProject[];
}

export default function FreelanceProjects({ projects }: FreelanceProjectsProps) {
  return (
    <Container>
      <SectionTitle title="Web Freelance Projetos" />
      <section>
        {projects.map(project => (
          <FreelanceItem
            key={project.slug}
            title={project.title}
            description={project.description}
            screenshot={project.screenshot}
            url={project.url}
          />
        ))}
      </section>
    </Container>
  );
}
