import Link from 'next/link';
import { Container } from './styles';

interface ProjectItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

export default function ProjectItem({ title, type, imgUrl, slug }: ProjectItemProps ) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/globalProjects/${slug}`}>
        <a>
          <div className="overlay">
            <section>
              <h1>{title}</h1>
              <h2>{type}</h2>
            </section>
          </div>
        </a>    
      </Link>
    </Container>
  )
};