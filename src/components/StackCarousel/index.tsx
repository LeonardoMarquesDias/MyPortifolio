import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaWordpress, FaGitAlt, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiNextdotjs, SiTypescript, SiGoogleanalytics, SiSemrush, SiGooglesearchconsole, SiSanity, SiPrismic } from 'react-icons/si';
import { MdOutlineSearch, MdOutlineTravelExplore } from 'react-icons/md';
import { Track, Wrapper } from './styles';

const icons = [
  <SiSemrush key="semrush" />,
  <MdOutlineTravelExplore key="ahrefs" />,
  <MdOutlineSearch key="screamingfrog" />,
  <SiGoogleanalytics key="ga4" />,
  <SiGooglesearchconsole key="gsc" />,
  <AiFillHtml5 key="html5" />,
  <FaCss3Alt key="css3" />,
  <IoLogoJavascript key="js" />,
  <SiTypescript key="ts" />,
  <FaReact key="react" />,
  <SiNextdotjs key="nextjs" />,
  <SiSanity key="sanity" />,
  <SiPrismic key="prismic" />,
  <FaWordpress key="wordpress" />,
  <FaGitAlt key="git" />,
  <FaGithub key="github" />,
];

export default function StackCarousel() {
  const doubled = [...icons, ...icons];

  return (
    <Wrapper>
      <Track>
        {doubled.map((icon, i) => (
          <span key={i}>{icon}</span>
        ))}
      </Track>
    </Wrapper>
  );
}
