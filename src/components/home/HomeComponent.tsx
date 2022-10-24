import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useNavigate } from 'react-router-dom';

import { appRepository } from '../../repositories/app-repository';

import styles from './Home.module.scss';
import Checkbox from '@mui/material/Checkbox';

const HomeComponent = () => {
  const [catTags, setCatTags] = useState<string[]>([]);
  const [value, setValue] = useState<string[]>([]);

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
    if (value !== null) {
      navigate('search-results', { state: { tag: value, lucky: false } });
    }
  };

  const handleFeelingLuckyButton = () => {
    if (value !== null) {
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
        multiple
        disableCloseOnSelect
        limitTags={2}
        options={catTags}
        getOptionLabel={(option) => option}
        onChange={(e, newValues) => setValue(newValues)}
        classes={{
          input: styles.inputRoot,
        }}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox checked={selected} />
            {option}
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} autoFocus placeholder="Search tags..." />
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
