import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { useNavigate } from 'react-router-dom';

const backgroundAnimation = keyframes`
  0% { color: rgb(255, 0, 0); color: white; }
  50% { color: white; color: rgb(255, 0, 0); }
  100% { color: rgb(255, 0, 0); color: white; }
`;

const HeaderPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          width: '95%',
          height:'100px',
          margin: 'auto',
          padding: '10px 20px',
          display: 'flex',
          // position:'sticky',
          // top:'0',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          // animation: `${backgroundAnimation} 10s infinite alternate ease-in-out`,
          borderRadius: '10px',
          gap: { xs: 2, sm: 0 }, 
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'flex-start' },
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <Diversity2Icon sx={{ padding: '5px',color:'red' }} />
          <Typography sx={{ fontSize: { xs: '16px', sm: '20px',md:'25px' }, textAlign: 'center',}}>
            SPN Service Provider Network
          </Typography>

        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', sm: 'flex-end' },
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <Button
            sx={{
              // animation: `${backgroundAnimation} 10s infinite alternate ease-in-out`,
              // fontFamily: 'sans-serif',
              fontSize: { xs: '16px', sm: '20px',md:'15px' },
              minWidth: '80px',
            }}
            onClick={() => navigate('/')}>
            Home
          </Button>
          <Button
            sx={{
              // animation: `${backgroundAnimation} 10s infinite alternate ease-in-out`,
              // fontFamily: 'sans-serif',
              fontSize: { xs: '16px', sm: '20px',md:'15px' },
              minWidth: '80px',
            }}
            onClick={() => navigate('/login')}
          >
            Log in
          </Button>
          <Button
            sx={{
              // animation: `${backgroundAnimation} 10s infinite alternate ease-in-out`,
              // fontFamily: 'sans-serif',
              fontSize: { xs: '16px', sm: '20px' },
              minWidth: '80px',
            }}
            onClick={() => navigate('/HomePage')}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderPage;
