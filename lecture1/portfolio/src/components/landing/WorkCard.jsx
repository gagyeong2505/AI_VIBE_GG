import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

/**
 * WorkCard 컴포넌트 — 작업물 카드
 *
 * Props:
 * @param {string} title - 프로젝트 제목 [Required]
 * @param {string} description - 프로젝트 설명 [Required]
 * @param {string[]} tags - 기술 스택 태그 목록 [Required]
 * @param {string} category - 프로젝트 카테고리 레이블 [Required]
 * @param {string} accentColor - 카드 상단 컬러 바 색상 [Optional, 기본값: '#1A7A4A']
 *
 * Example usage:
 * <WorkCard title="E-Commerce" description="..." tags={['React']} category="Web App" />
 */
function WorkCard({ title, description, tags, category, accentColor = '#1A7A4A' }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
    >
      {/* 컬러 바 */}
      <Box sx={{ height: 4, bgcolor: accentColor, flexShrink: 0 }} />

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, height: '100%' }}>
          <Typography
            variant='caption'
            sx={{
              color: 'text.disabled',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {category}
          </Typography>

          <Typography
            variant='h3'
            sx={{ color: 'text.primary', fontSize: '1.1rem' }}
          >
            {title}
          </Typography>

          <Typography
            variant='body2'
            sx={{
              color: 'text.secondary',
              lineHeight: 1.7,
              flexGrow: 1,
            }}
          >
            {description}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto', pt: 1 }}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size='small'
                sx={{
                  bgcolor: 'transparent',
                  border: '1px solid',
                  borderColor: 'divider',
                  color: 'text.secondary',
                  fontSize: '0.7rem',
                  height: 22,
                }}
              />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default WorkCard;
