import { useParams } from 'react-router-dom';
import BannerProject from '../components/BannerProject';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FaGithub } from 'react-icons/fa';
import { ProjectContainer } from '../styles/projectStyles';
import { Description } from '../styles/slugStyles';

const staticProjectsData: Record<string, {
  slug: string;
  title: string;
  type: string;
  description: string;
  description1: string;
  github: string;
  imgUrl: string;
  thumbnail: string;
}> = {
  portfolio: {
    slug: 'portfolio',
    title: 'Portfolio',
    type: 'Website',
    description: 'Personal portfolio built with Next.js, React and Styled Components. Showcasing projects and skills with a modern dark theme design.',
    description1: 'Technologies used include Next.js for SSR, Styled Components for styling, and AOS for scroll animations.',
    github: 'https://github.com/LeonardoMarquesDias/MyPortifolio',
    imgUrl: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260',
    thumbnail: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  dashboard: {
    slug: 'dashboard',
    title: 'Dashboard',
    type: 'Web App',
    description: 'A modern dashboard application built with React and TypeScript. Features real-time data visualization and responsive design.',
    description1: 'Built with React, TypeScript, and Chart.js for interactive data visualization.',
    github: 'https://github.com/LeonardoMarquesDias',
    imgUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260',
    thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  ecommerce: {
    slug: 'ecommerce',
    title: 'E-Commerce',
    type: 'Web App',
    description: 'Full-stack e-commerce platform with Next.js and Stripe integration. Complete shopping cart and checkout flow.',
    description1: 'Features include product catalog, cart management, and secure payment processing with Stripe.',
    github: 'https://github.com/LeonardoMarquesDias',
    imgUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260',
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  blog: {
    slug: 'blog',
    title: 'Blog Platform',
    type: 'Website',
    description: 'A blog platform built with Next.js featuring markdown support and a clean reading experience.',
    description1: 'Uses Next.js static generation for fast page loads and SEO optimization.',
    github: 'https://github.com/LeonardoMarquesDias',
    imgUrl: 'https://images.pexels.com/photos/261599/pexels-photo-261599.jpeg?auto=compress&cs=tinysrgb&w=1260',
    thumbnail: 'https://images.pexels.com/photos/261599/pexels-photo-261599.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? staticProjectsData[slug] : undefined;

  if (!project) {
    return (
      <ProjectContainer>
        <Header />
        <main className="container">
          <Description>
            <h1>Project not found</h1>
          </Description>
        </main>
        <Footer />
      </ProjectContainer>
    );
  }

  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <ProjectContainer>
      <Header />
      <BannerProject imgUrl={project.imgUrl} />
      <main className="container">
        <Description>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <br />
          <p>{project.description1}</p>
          <button onClick={() => handleRedirect(project.github)}>
            <FaGithub color="#eba417" />
            SEE IN REPOSITORY
          </button>
        </Description>
      </main>
      <Footer />
    </ProjectContainer>
  );
}
