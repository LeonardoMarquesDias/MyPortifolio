import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import FreelanceItem from './FreelanceItem';
import { Container, CarouselWrapper, CarouselTrack, CarouselNav, Modal, ModalBackdrop } from './styles';

interface IFreelanceProject {
  slug: string;
  title: string;
  description: string;
  screenshot: string;
  modalImage?: string;
  url: string;
  siteUrl?: string;
}

interface FreelanceProjectsProps {
  projects: IFreelanceProject[];
}

export default function FreelanceProjects({ projects }: FreelanceProjectsProps) {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function measure() {
      if (wrapperRef.current) {
        setCardWidth(wrapperRef.current.offsetWidth);
      }
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const gap = 32;
  const canPrev = index > 0;
  const canNext = index < projects.length - 1;
  const translateX = index * (cardWidth + gap);

  const activeProject = projects.find(p => p.slug === openSlug) ?? null;

  return (
    <Container>
      <SectionTitle title="Freelance" description="Websites & Landing Pages" period="2023 – 2025" />
      <section>
        <CarouselWrapper ref={wrapperRef}>
          <CarouselTrack style={{ transform: `translateX(-${translateX}px)` }}>
            {projects.map(project => (
              <div key={project.slug} style={{ flex: '0 0 100%', width: cardWidth || '100%' }}>
                <FreelanceItem
                  title={project.title}
                  description={project.description}
                  screenshot={project.screenshot}
                  url={project.url}
                  siteUrl={project.siteUrl}
                  onOpen={() => setOpenSlug(project.slug)}
                />
              </div>
            ))}
          </CarouselTrack>
        </CarouselWrapper>

        <CarouselNav>
          <button onClick={() => setIndex(i => i - 1)} disabled={!canPrev} aria-label="Previous">
            <FaChevronLeft size={14} />
          </button>

          <div className="dots">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`dot${i === index ? ' active' : ''}`}
                onClick={() => setIndex(i)}
                role="button"
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button onClick={() => setIndex(i => i + 1)} disabled={!canNext} aria-label="Next">
            <FaChevronRight size={14} />
          </button>
        </CarouselNav>
      </section>

      {activeProject && (
        <ModalBackdrop onClick={() => setOpenSlug(null)}>
          <Modal onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setOpenSlug(null)}>
              <FaTimes size={18} />
            </button>
            <div className="modal-header">
              <h3>{activeProject.title}</h3>
              <div className="modal-actions">
                <a href={activeProject.url} target="_blank" rel="noreferrer" className="btn-github">
                  GitHub <FaGithub size={13} />
                </a>
                {activeProject.siteUrl && (
                  <a href={activeProject.siteUrl} target="_blank" rel="noreferrer" className="btn-site">
                    Visit site <FaExternalLinkAlt size={11} />
                  </a>
                )}
              </div>
            </div>
            <div className="modal-img-wrap">
              <img src={activeProject.modalImage ?? activeProject.screenshot} alt={activeProject.title} />
            </div>
          </Modal>
        </ModalBackdrop>
      )}
    </Container>
  );
}
