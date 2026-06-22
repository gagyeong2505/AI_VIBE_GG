import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const VARIANTS = ['contained', 'outlined', 'text'];
const COLORS = ['primary', 'secondary', 'error'];

function ButtonSection() {
  const handleClick = (variant, color) => {
    alert(`variant: ${variant} / color: ${color}`);
  };

  return (
    <Box sx={{ mb: { xs: 6, md: 10 } }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}
      >
        Button
      </Typography>

      <Grid container spacing={3}>
        {VARIANTS.map((variant) => (
          <Grid key={variant} size={{ xs: 12, md: 4 }}>
            <Typography
              variant="overline"
              sx={{ mb: 1.5, display: 'block', color: 'text.secondary' }}
            >
              {variant}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {COLORS.map((color) => (
                <Button
                  key={color}
                  variant={variant}
                  color={color}
                  onClick={() => handleClick(variant, color)}
                  fullWidth
                >
                  {color}
                </Button>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ButtonSection;
