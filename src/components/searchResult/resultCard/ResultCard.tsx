import React, { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

import { CatType } from 'types/cat-type';
import CustomPill from 'components/customPill/CustomPill';

import styles from './ResultCard.module.scss';

type ResultCardProps = {
  cat: CatType;
  setTag: Dispatch<SetStateAction<string>>;
};

const ResultCard = ({ cat, setTag }: ResultCardProps) => {
  const imgUrl = process.env.REACT_APP_IMAGE_URL;

  const handlePillClick = async (event: React.MouseEvent<HTMLInputElement>) => {
    setTag(event.currentTarget.innerText);
  };

  return (
    <Box className={styles.resultCardContainer}>
      <Box className={styles.resultCardImageContainer}>
        <img
          className={styles.resultCardImage}
          src={`${imgUrl}/${cat._id}`}
          alt="cat image"
        />
      </Box>

      <Box className={styles.resultCardDetails}>
        <Stack className={styles.resultCardDetailStack}>
          <PersonOutlineOutlinedIcon />
          <Typography>{cat.owner}</Typography>
        </Stack>

        <Stack className={styles.resultCardDetailStack}>
          <CalendarTodayOutlinedIcon />
          <Typography>{cat.createdAt}</Typography>
        </Stack>

        <Stack className={styles.resultCardPills}>
          {cat.tags.map((tag, ind) => (
            <CustomPill key={ind} label={tag} onClick={handlePillClick} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ResultCard;
