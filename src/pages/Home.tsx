import { useEffect } from 'react';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import StatsBar from '../components/StatsBar';
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
    title: 'Organic Growth',
    description: '320% increase in organic traffic over 6 months',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'seo-2',
    title: 'Google Rankings',
    description: 'Page 1 ranking for 40+ strategic keywords',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'seo-3',
    title: 'Core Web Vitals',
    description: '95+ score in Performance, SEO and Accessibility on Lighthouse',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'seo-4',
    title: 'Search Impressions',
    description: 'Over 50,000 monthly impressions on Google Search Console',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'seo-5',
    title: 'Click-Through Rate',
    description: 'Average CTR of 8.4%, above industry benchmark',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'seo-6',
    title: 'Backlinks & Authority',
    description: 'Domain Authority growth through strategic link building',
    image: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const freelanceProjects = [
  {
    slug: 'freelance-1',
    title: 'Corporate Landing Page',
    description: 'Institutional landing page for a service-sector company',
    screenshot: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://github.com'
  },
  {
    slug: 'freelance-2',
    title: 'Booking System',
    description: 'Online scheduling platform with full admin dashboard',
    screenshot: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://github.com'
  },
  {
    slug: 'freelance-3',
    title: 'E-Commerce Store',
    description: 'Online store with product catalog and shopping cart',
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
        <StatsBar />
        <Experiences />
        <SeoProof screenshots={seoScreenshots} />
        <FreelanceProjects projects={freelanceProjects} />
        <Repositories projects={staticProjects} />
        <MyStack />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>
  );
}
