import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaWordpress, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiNextdotjs, SiTypescript, SiGoogleanalytics, SiSemrush, SiGooglesearchconsole, SiSanity, SiPrismic } from 'react-icons/si';
import { MdOutlineSearch, MdOutlineTravelExplore } from 'react-icons/md';
import SectionTitle from '../SectionTitle';
import StackItem from './StackItem';
import { Container, GroupLabel, StackGroup } from './styles';

function MyStack() {
  return (
    <Container>
      <SectionTitle title="My Stack" description="Tools & Technologies" />

      <GroupLabel>SEO & Analytics</GroupLabel>
      <StackGroup data-aos="fade-up">
        <StackItem title="SEMrush" icon={<SiSemrush />} />
        <StackItem title="Ahrefs" icon={<MdOutlineTravelExplore />} />
        <StackItem title="Screaming Frog" icon={<MdOutlineSearch />} />
        <StackItem title="GA4" icon={<SiGoogleanalytics />} />
        <StackItem title="Search Console" icon={<SiGooglesearchconsole />} />
      </StackGroup>

      <GroupLabel>Front-End</GroupLabel>
      <StackGroup data-aos="fade-up">
        <StackItem title="HTML5" icon={<AiFillHtml5 />} />
        <StackItem title="CSS3" icon={<FaCss3Alt />} />
        <StackItem title="JavaScript" icon={<IoLogoJavascript />} />
        <StackItem title="TypeScript" icon={<SiTypescript />} />
        <StackItem title="React" icon={<FaReact />} />
        <StackItem title="Next.js" icon={<SiNextdotjs />} />
      </StackGroup>

      <GroupLabel>CMS & Tools</GroupLabel>
      <StackGroup data-aos="fade-up">
        <StackItem title="Sanity" icon={<SiSanity />} />
        <StackItem title="Prismic" icon={<SiPrismic />} />
        <StackItem title="Git" icon={<FaGitAlt />} />
        <StackItem title="WordPress" icon={<FaWordpress />} />
      </StackGroup>
    </Container>
  );
}

export default MyStack;
