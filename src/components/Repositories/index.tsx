import SectionTitle from '../SectionTitle';
import RepositoryItem from './RepositoryItem';

import { Container } from './styles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  github: string;
  thumbnail: string;
}

interface RepositoriesProps {
  projects: IProjeto[];
}

function Repositories({ projects }: RepositoriesProps) {
  return (
    <Container>
      <SectionTitle title="Bootcamp Projects" description="Training Projects" />
      <section>
        {projects.slice(0, 4).map(project => (
          <RepositoryItem
            key={project.slug}
            slug={project.slug}
            img={project.thumbnail}
            title={project.title}
            type={project.type}
            github={project.github}
          />
        ))}
      </section>
    </Container>
  );
}

export default Repositories;
