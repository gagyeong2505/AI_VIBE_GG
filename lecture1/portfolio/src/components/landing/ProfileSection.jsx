import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const SKILLS = ['React', 'TypeScript', 'MUI', 'Next.js', 'Figma', 'Git'];

/**
 * ProfileSection 컴포넌트 — 섹션1: 가상 프로필
 *
 * Props: 없음 (정적 데이터)
 *
 * Example usage:
 * <ProfileSection />
 */
function ProfileSection() {
  return (
    <Box
      component='section'
      sx={{
        py: { xs: 8, md: 14 },
        bgcolor: '#FFFFFF',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems='center'>
          {/* 왼쪽: 아바타 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: 3,
              }}
            >
              <Avatar
                sx={{
                  width: { xs: 120, md: 160 },
                  height: { xs: 120, md: 160 },
                  bgcolor: 'primary.main',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  color: '#FFFFFF',
                }}
              >
                K
              </Avatar>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant='caption'
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'block',
                    mb: 0.5,
                  }}
                >
                  Frontend Developer
                </Typography>
                <Typography
                  variant='h1'
                  sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}
                >
                  김수아
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* 오른쪽: 소개 & 스킬 */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography
                  variant='h2'
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    color: 'text.primary',
                  }}
                >
                  사용자 중심의 경험을 설계합니다.
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                >
                  React와 MUI를 주로 사용하는 프론트엔드 개발자입니다.
                  직관적인 인터페이스와 깔끔한 코드 구조를 중요하게 생각하며,
                  디자인과 개발의 경계에서 최선의 사용자 경험을 만들어냅니다.
                </Typography>
              </Box>

              <Divider sx={{ borderColor: 'divider' }} />

              <Box>
                <Typography
                  variant='caption'
                  sx={{
                    color: 'text.disabled',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'block',
                    mb: 1.5,
                  }}
                >
                  Tech Stack
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {SKILLS.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size='small'
                      sx={{
                        bgcolor: '#F5F5F5',
                        color: 'text.primary',
                        fontWeight: 500,
                        fontSize: '0.8rem',
                        '&:hover': {
                          bgcolor: 'primary.light',
                          color: '#FFFFFF',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProfileSection;
