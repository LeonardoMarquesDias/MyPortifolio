import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { FreelanceCard, Modal, ModalBackdrop } from './styles';

interface FreelanceItemProps {
  title: string;
  description: string;
  screenshot: string;
  url: string;
  siteUrl?: string;
}

export default function FreelanceItem({ title, description, screenshot, url, siteUrl }: FreelanceItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FreelanceCard data-aos="fade-up" onClick={() => setOpen(true)}>
        <img className="screenshot" src={screenshot} alt={title} />
        <div className="overlay" />
        <div className="info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="actions">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn-github"
              onClick={e => e.stopPropagation()}
            >
              GitHub <FaGithub size={13} />
            </a>
            {siteUrl && (
              <a
                href={siteUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-site"
                onClick={e => e.stopPropagation()}
              >
                Visit site <FaExternalLinkAlt size={11} />
              </a>
            )}
          </div>
        </div>
      </FreelanceCard>

      {open && (
        <ModalBackdrop onClick={() => setOpen(false)}>
          <Modal onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setOpen(false)}>
              <FaTimes size={18} />
            </button>
            <div className="modal-header">
              <h3>{title}</h3>
              <div className="modal-actions">
                <a href={url} target="_blank" rel="noreferrer" className="btn-github">
                  GitHub <FaGithub size={13} />
                </a>
                {siteUrl && (
                  <a href={siteUrl} target="_blank" rel="noreferrer" className="btn-site">
                    Visit site <FaExternalLinkAlt size={11} />
                  </a>
                )}
              </div>
            </div>
            <div className="modal-img-wrap">
              <img src={screenshot} alt={title} />
            </div>
          </Modal>
        </ModalBackdrop>
      )}
    </>
  );
}
