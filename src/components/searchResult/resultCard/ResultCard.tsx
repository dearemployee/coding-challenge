import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

import styles from './ResultCard.module.scss';

const ResultCard = () => {
  return (
    <Box className={styles.resultCardContainer}>
      <Box className={styles.resultCardImageContainer}>
        <img
          className={styles.resultCardImage}
          src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-superJumbo.jpg?quality=75&auto=webp"
          alt="cat image"
        />
      </Box>

      <Box className={styles.resultCardDetails}>
        <Stack className={styles.resultCardDetailStack}>
          <PersonOutlineOutlinedIcon />
          <Typography>John Doe</Typography>
        </Stack>

        <Stack className={styles.resultCardDetailStack}>
          <CalendarTodayOutlinedIcon />
          <Typography>20 sep 2022</Typography>
        </Stack>

        <Stack className={styles.resultCardPills}>
          <Chip label="Friend" onClick={() => null} />
          <Chip label="Friend" onClick={() => null} />
          <Chip label="Friend" onClick={() => null} />
          <Chip label="Friend" onClick={() => null} />
        </Stack>
      </Box>
    </Box>
  );
};

export default ResultCard;
