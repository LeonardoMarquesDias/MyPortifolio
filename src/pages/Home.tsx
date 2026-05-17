import { useEffect } from 'react';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences';
import MyStack from '../components/MyStack';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';
import Repositories from '../components/Repositories';
import FreelanceProjects from '../components/FreelanceProjects';
import { HomeContainer } from '../styles/homeStyles';

const freelanceProjects = [
  {
    slug: 'freelance-1',
    title: 'Projeto Freelance 1',
    description: 'Landing page institucional para empresa do setor de serviços',
    screenshot: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://github.com'
  },
  {
    slug: 'freelance-2',
    title: 'Projeto Freelance 2',
    description: 'Sistema de agendamento online com painel administrativo',
    screenshot: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://github.com'
  },
  {
    slug: 'freelance-3',
    title: 'Projeto Freelance 3',
    description: 'Loja virtual com catálogo de produtos e carrinho de compras',
    screenshot: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://github.com'
  }
];

const staticProjects = [
  {
    slug: 'portfolio',
    title: 'Portfolio',
    type: 'Website',
    description: 'Personal portfolio built with Next.js, React and Styled Components',
    github: 'https://github.com/LeonardoMarquesDias/MyPortifolio',
    thumbnail: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    slug: 'dashboard',
    title: 'Dashboard',
    type: 'Web App',
    description: 'A modern dashboard application with React and TypeScript',
    github: 'https://github.com/LeonardoMarquesDias',
    thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce',
    type: 'Web App',
    description: 'Full-stack e-commerce platform with Next.js and Stripe integration',
    github: 'https://github.com/LeonardoMarquesDias',
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences />
        <Repositories projects={staticProjects} />
        <FreelanceProjects projects={freelanceProjects} />
        <MyStack />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>
  );
}
