import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingTop="10rem"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
