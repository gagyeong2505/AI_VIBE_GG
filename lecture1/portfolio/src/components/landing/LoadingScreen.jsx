import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * LoadingScreen 컴포넌트
 *
 * Props:
 * @param {function} onFinish - 로딩 완료 후 호출할 콜백 함수 [Required]
 *
 * Example usage:
 * <LoadingScreen onFinish={() => setLoading(false)} />
 */
function LoadingScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const finishTimer = setTimeout(() => onFinish(), 2200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#FFFFFF',
        zIndex: 9999,
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.4s ease',
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          animation: 'fadeIn 0.6s ease forwards',
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateY(12px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              bgcolor: '#FFFFFF',
            }}
          />
        </Box>
        <Typography
          variant='body2'
          sx={{
            color: 'text.disabled',
            letterSpacing: '0.15em',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
          }}
        >
          Portfolio
        </Typography>
      </Box>
    </Box>
  );
}

export default LoadingScreen;
