import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';

import { useNavigate } from 'react-router-dom';

import GeneralIcons from '../../icon/GeneralIcons';
import { appRepository } from '../../repositories/app-repository';

import styles from './Home.module.scss';

const HomeComponent = () => {
  const [catTags, setCatTags] = useState<string[]>([]);
  const [value, setValue] = useState<string | null>('');

  const navigate = useNavigate();

  const getTagOptions = async () => {
    try {
      const tags = await appRepository.getCatTags();
      setCatTags(tags);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchButton = () => {
    if (value) {
      navigate('search-results', { state: { tag: value, lucky: false } });
    }
  };

  const handleFeelingLuckyButton = () => {
    if (value) {
      navigate('search-results', { state: { tag: value, lucky: true } });
    }
  };

  useEffect(() => {
    getTagOptions();
  }, []);

  return (
    <Box className={styles.homeComponentContainer}>
      <Typography variant="h1" className={styles.headerText}>
        Cataas
      </Typography>

      <Autocomplete
        role="search"
        freeSolo
        options={catTags}
        onChange={(e, newValue) => setValue(newValue)}
        classes={{
          input: styles.inputRoot,
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            autoFocus
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <GeneralIcons.SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
        className={styles.homeComponentSearchField}
      />
      <Box className={styles.homeComponentButtonsContainer}>
        <Button
          variant="outlined"
          type="submit"
          className={styles.homeComponentButton}
          onClick={handleSearchButton}
        >
          Search
        </Button>
        <Button
          variant="outlined"
          className={styles.homeComponentButton}
          onClick={handleFeelingLuckyButton}
        >
          {`I'm feeling lucky`}
        </Button>
      </Box>
    </Box>
  );
};

export default HomeComponent;
