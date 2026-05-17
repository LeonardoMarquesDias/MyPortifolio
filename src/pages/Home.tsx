import { useEffect } from 'react';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences';
import MyStack from '../components/MyStack';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';
import Repositories from '../components/Repositories';
import { HomeContainer } from '../styles/homeStyles';

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
        <MyStack />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>
  );
}
