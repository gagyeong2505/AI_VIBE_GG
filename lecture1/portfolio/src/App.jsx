import { useState } from 'react';
import Box from '@mui/material/Box';
import LoadingScreen from './components/landing/LoadingScreen';
import ProfileSection from './components/landing/ProfileSection';
import WorkSection from './components/landing/WorkSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#FFFFFF' }}>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      <Box
        sx={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease 0.1s',
        }}
      >
        <ProfileSection />
        <WorkSection />
      </Box>
    </Box>
  );
}

export default App;
