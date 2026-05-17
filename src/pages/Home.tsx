import { useEffect } from 'react';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences';
import MyStack from '../components/MyStack';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';
import Repositories from '../components/Repositories';
import FreelanceProjects from '../components/FreelanceProjects';
import SeoProof from '../components/SeoProof';
import { HomeContainer } from '../styles/homeStyles';

const seoScreenshots = [
  {
    id: 'seo-1',
    title: 'Crescimento Orgânico',
    description: 'Aumento de 320% no tráfego orgânico em 6 meses',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'seo-2',
    title: 'Posição no Google',
    description: 'Página 1 para 40+ palavras-chave estratégicas',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'seo-3',
    title: 'Core Web Vitals',
    description: 'Score 95+ em Performance, SEO e Acessibilidade no Lighthouse',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'seo-4',
    title: 'Impressões de Busca',
    description: 'Mais de 50.000 impressões mensais no Google Search Console',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'seo-5',
    title: 'Taxa de Cliques',
    description: 'CTR médio de 8.4% acima da média do setor',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'seo-6',
    title: 'Backlinks & Autoridade',
    description: 'Domain Authority elevado com estratégia de link building',
    image: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

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
        <SeoProof screenshots={seoScreenshots} />
        <Repositories projects={staticProjects} />
        <FreelanceProjects projects={freelanceProjects} />
        <MyStack />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>
  );
}
