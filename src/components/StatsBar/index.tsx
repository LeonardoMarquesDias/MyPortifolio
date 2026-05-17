import { Container, StatItem } from './styles';

const stats = [
  { value: '50%', label: 'Page Speed Improvement' },
  { value: '30–50%', label: 'Organic Visibility Growth' },
  { value: 'Pg 3 → 1', label: 'Local Search Rankings' },
  { value: '6%', label: 'CTR Above Benchmark' },
  { value: '40+', label: 'Keywords on Page 1' },
  { value: '95+', label: 'Lighthouse Score' },
];

export default function StatsBar() {
  return (
    <Container data-aos="fade-up">
      {stats.map((stat) => (
        <StatItem key={stat.label}>
          <span className="value">{stat.value}</span>
          <span className="label">{stat.label}</span>
        </StatItem>
      ))}
    </Container>
  );
}
