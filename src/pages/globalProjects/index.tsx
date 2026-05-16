import { GetStaticProps } from 'next';
import Head from 'next/head';

import Header from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';
import { GlobalProjectsContainer } from '../../styles/globalProjectsStyles';

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

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  thumbnail: string;
}

interface ProjectsProps {
  projects: IProjeto[];
}

export default function GlobalProjects({ projects }: ProjectsProps) {
  return (
    <GlobalProjectsContainer>
      <Head>
        <title>Projects | Portfolio</title>
        <meta
          name="ReactJS Developer Portfolio"
          content="Browse all projects"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
      </Head>
      <Header />
      <main className="container">
        {projects.map(project => (
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: staticProjects
    },
    revalidate: 86400
  };
}