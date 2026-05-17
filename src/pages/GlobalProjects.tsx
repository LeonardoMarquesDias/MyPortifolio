import Header from '../components/Header';
import ProjectItem from '../components/ProjectItem';
import { GlobalProjectsContainer } from '../styles/globalProjectsStyles';

const staticProjects = [
  {
    slug: 'portfolio',
    title: 'Portfolio',
    type: 'Website',
    thumbnail: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    slug: 'dashboard',
    title: 'Dashboard',
    type: 'Web App',
    thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce',
    type: 'Web App',
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    slug: 'blog',
    title: 'Blog Platform',
    type: 'Website',
    thumbnail: 'https://images.pexels.com/photos/261599/pexels-photo-261599.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function GlobalProjects() {
  return (
    <GlobalProjectsContainer>
      <Header />
      <main className="container">
        {staticProjects.map(project => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </GlobalProjectsContainer>
  );
}
