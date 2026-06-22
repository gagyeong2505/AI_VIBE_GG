import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import WorkCard from './WorkCard';

const WORKS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: '상품 탐색부터 결제까지 원스톱으로 처리하는 쇼핑몰 플랫폼. 반응형 그리드 레이아웃과 장바구니 기능을 구현했습니다.',
    tags: ['React', 'MUI', 'Redux', 'Stripe'],
    category: 'Web App',
    accentColor: '#1A7A4A',
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: '실시간 데이터를 시각화하는 관리자 대시보드. 차트 라이브러리와 커스텀 훅을 활용해 성능을 최적화했습니다.',
    tags: ['React', 'TypeScript', 'Recharts', 'Supabase'],
    category: 'Dashboard',
    accentColor: '#00C46E',
  },
  {
    id: 3,
    title: 'Travel Planner',
    description: '여행 일정을 시각적으로 계획하고 공유하는 앱. 드래그 앤 드롭 인터페이스와 지도 API를 통합했습니다.',
    tags: ['Next.js', 'TypeScript', 'Google Maps', 'Prisma'],
    category: 'Mobile App',
    accentColor: '#0F5233',
  },
  {
    id: 4,
    title: 'Design System',
    description: '팀 전체가 공유하는 UI 컴포넌트 라이브러리. 접근성 기준을 준수하며 스토리북으로 문서화했습니다.',
    tags: ['React', 'Storybook', 'SCSS', 'Figma'],
    category: 'Library',
    accentColor: '#1A7A4A',
  },
  {
    id: 5,
    title: 'Real-time Chat',
    description: '웹소켓 기반의 실시간 채팅 애플리케이션. 읽음 표시, 이모지, 파일 첨부 기능을 포함합니다.',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    category: 'Web App',
    accentColor: '#00C46E',
  },
  {
    id: 6,
    title: 'Weather Forecast',
    description: '현재 위치 기반 날씨 정보와 주간 예보를 제공하는 앱. OpenWeather API와 geolocation을 활용했습니다.',
    tags: ['React', 'OpenWeather API', 'PWA', 'CSS'],
    category: 'Web App',
    accentColor: '#0F5233',
  },
];

/**
 * WorkSection 컴포넌트 — 섹션2: 작업물 목차
 *
 * Props: 없음 (정적 데이터)
 *
 * Example usage:
 * <WorkSection />
 */
function WorkSection() {
  return (
    <Box
      component='section'
      sx={{
        py: { xs: 8, md: 14 },
        bgcolor: '#F5F5F5',
      }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant='caption'
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              mb: 1,
            }}
          >
            Works
          </Typography>
          <Typography
            variant='h1'
            sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, mb: 1.5 }}
          >
            작업물 목차
          </Typography>
          <Typography variant='body1' sx={{ color: 'text.secondary' }}>
            지금까지 진행한 주요 프로젝트들을 소개합니다.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {WORKS.map((work) => (
            <Grid key={work.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <WorkCard
                title={work.title}
                description={work.description}
                tags={work.tags}
                category={work.category}
                accentColor={work.accentColor}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WorkSection;
