import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const OPTIONS = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

function RadioSection() {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <Box sx={{ mb: { xs: 6, md: 10 } }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}
      >
        Radio
      </Typography>

      <FormControl>
        <FormLabel>프레임워크를 선택하세요</FormLabel>
        <RadioGroup value={selected} onChange={handleChange} sx={{ mt: 1 }}>
          {OPTIONS.map(({ value, label }) => (
            <FormControlLabel
              key={value}
              value={value}
              label={label}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Box
        sx={{
          mt: 3,
          px: 2,
          py: 1.5,
          bgcolor: 'action.hover',
          borderRadius: 1,
          display: 'inline-block',
          minWidth: 200,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          선택된 옵션:{' '}
          <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
            {selected || '없음'}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default RadioSection;
