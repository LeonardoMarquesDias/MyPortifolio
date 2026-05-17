import SectionTitle from '../SectionTitle';
import ExperiencesItem from './ExperiencesItem';
import { Container } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle title="Experience" description="Professional History" />

      <section>
        <ExperiencesItem
          school="Tripdesty & Travellov"
          year="2024 – Present"
          title="SEO & GEO Specialist"
          description="Comprehensive technical SEO audits, in-depth keyword research via SEMrush, local SEO optimisation, and Google Ads management. Achieved 30–50% organic growth and moved local rankings from page 3 to page 1."
          certification=""
          url="https://github.com/LeonardoMarquesDias"
        />
        <ExperiencesItem
          school="Freelance / Personal Projects"
          year="2022 – 2025"
          title="Front-End Developer"
          description="Built projects with HTML5, CSS3, JavaScript, React.js, Next.js, and WordPress. Implemented full SEO foundations: title tags, canonical tags, schema markup, semantic HTML, and Core Web Vitals optimisation."
          certification=""
          url="https://github.com/LeonardoMarquesDias"
        />
        <ExperiencesItem
          school="Juliana Pizza · AE Patrimônio · Privilege Campolim"
          year="2009 – 2018"
          title="Marketing Manager / Estate Agent / CEO"
          description="10+ years as Marketing Manager, 6+ years as Estate Agent, and Founder & CEO of own agency — bringing commercial awareness and strategic thinking to every SEO and digital marketing decision."
          certification=""
          url=""
        />
        <ExperiencesItem
          school="Rocketseat"
          year="2020 – 2022"
          title="Front-End Web Development Bootcamp"
          description="Intensive bootcamp covering React.js, Next.js, TypeScript, Git Flow, and modern front-end fundamentals."
          certification=""
          url="https://www.rocketseat.com.br"
        />
      </section>
    </Container>
  );
}

export default Experiences;
