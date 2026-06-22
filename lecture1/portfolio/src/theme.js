import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A7A4A',
      light: '#00C46E',
      dark: '#0F5233',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#555555',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#555555',
      disabled: '#999999',
    },
    divider: '#E0E0E0',
  },
  typography: {
    fontFamily: '"Noto Sans KR", "Apple SD Gothic Neo", "Roboto", sans-serif',
    h1: { fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3 },
    h2: { fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.3 },
    h3: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4 },
    h4: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.4 },
    body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 },
    caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.5 },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          fontWeight: 600,
          fontSize: '0.875rem',
          textTransform: 'none',
          height: '44px',
          padding: '0 24px',
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
