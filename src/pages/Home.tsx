import { useEffect } from 'react';
import gorestaurant from '../assets/gorestaurant.png';
import ignewspayment from '../assets/ignewspayment.png';
import socialfeed from '../assets/SocialFeed.png';
import rocketshoes from '../assets/rocketshoes.png';
import HomeHero from '../components/HomeHero';
import MyStack from '../components/MyStack';
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
    slug: 'solarnex',
    title: 'SolarNex',
    description: 'Solar energy solutions landing page',
    screenshot: '/solarnex.co.uk.png',
    url: 'https://github.com/LeonardoMarquesDias/SolarNex',
    siteUrl: 'https://www.solarnex.co.uk'
  },
  {
    slug: 'zerobarbershop',
    title: 'La Migra Ink Tattoo Shop',
    description: 'Tattoo shop website with gallery, artists and booking',
    screenshot: '/zerobarbershop.png',
    url: 'https://github.com/LeonardoMarquesDias/lamigratattoo'
  }
];

const staticProjects = [
  {
    slug: 'gorestaurant',
    title: 'GoRestaurant',
    type: 'Web App',
    description: 'Restaurant menu management app with ReactJS',
    github: 'https://github.com/LeonardoMarquesDias/GoRestaurant-Web-ReactJS',
    thumbnail: gorestaurant
  },
  {
    slug: 'ignewspayment',
    title: 'igNews',
    type: 'Web App',
    description: 'News subscription platform with Stripe integration',
    github: 'https://github.com/LeonardoMarquesDias/igNews',
    thumbnail: ignewspayment
  },
  {
    slug: 'socialfeed',
    title: 'Social Feed',
    type: 'Web App',
    description: 'Social feed with posts and comments built with React + TypeScript',
    github: 'https://github.com/LeonardoMarquesDias/Ignite-Feed-Reactjs-TS',
    thumbnail: socialfeed
  },
  {
    slug: 'rocketshoes',
    title: 'Rocketshoes',
    type: 'Web App',
    description: 'Shopping cart app with product listing and cart management',
    github: 'https://github.com/LeonardoMarquesDias/Rocketshoes-Cart-ReactJS',
    thumbnail: rocketshoes
  }
];

export default function Home() {
  return (
    <HomeContainer>
      <main className="container">
        <HomeHero />
        <SeoProof screenshots={seoScreenshots} />
        <FreelanceProjects projects={freelanceProjects} />
        <Repositories projects={staticProjects} />
        <MyStack />
      </main>
      <Footer />
    </HomeContainer>
  );
}
