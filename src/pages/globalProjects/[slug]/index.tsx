import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { useRouter } from 'next/router';

import BannerProject from "../../../components/BannerProject";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { FaGithub } from 'react-icons/fa';
import LoadingScreen from '../../../components/LoadingScreen';
import { ProjectContainer } from '../../../styles/projectStyles';
import { Description } from '../../../styles/slugStyles';

const staticProjectsData: Record<string, IProject> = {
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

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  description1: string;
  github: string;
  imgUrl: string;
  thumbnail: string;
}

interface ProjectsProps {
  project: IProject;
}

export default function Project({ project }: ProjectsProps) {
  function handleRedirect(url: string) {
    window.open(url);
  }

  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />
  }

  return (
    <ProjectContainer>
      <Head>
        <title>{project.title} | Portfolio</title>
        <meta name="ReactJS Developer Portfolio" content={project.description} />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
      </Head>
      <Header />
      <BannerProject
        imgUrl={project.imgUrl}
      />

      <main className="container">
        <Description>
          <h1> {project.title}</h1>
          <p> {project.description} </p>
          <br/>
          <p> {project.description1} </p>
          <button onClick={() => handleRedirect(`${project.github}`)}>
            <FaGithub color="#eba417" />
              SEE IN REPOSITORY
          </button>
        </Description>
      </main>

      <Footer />
    </ProjectContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(staticProjectsData).map(slug => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;
  const project = staticProjectsData[String(slug)];

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project
    },
    revalidate: 86400
  };
};