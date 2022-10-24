import Box from '@mui/material/Box';
import React from 'react';
import { getRandomColor } from 'utils/get-random-color';

import styles from './CustomPill.module.scss';

type CustomPillProps = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const CustomPill = ({ label, onClick }: CustomPillProps) => {
  return (
    <Box
      className={styles.CustomPillButton}
      sx={{ backgroundColor: getRandomColor() }}
      onClick={onClick}
    >
      {label}
    </Box>
  );
};

export default CustomPill;
