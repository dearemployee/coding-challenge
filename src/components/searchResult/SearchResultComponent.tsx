import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { useLocation, useNavigate } from 'react-router-dom';

import ResultCard from './resultCard/ResultCard';
import styles from './SearchResult.module.scss';

const SearchResultComponent = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <Box className={styles.searchResultComponentContainer}>
      <Box className={styles.searchResultComponentHeader}>
        <Button
          className={styles.searchResultComponentButton}
          startIcon={<KeyboardBackspaceIcon />}
          onClick={handleBackButton}
        >
          Back
        </Button>
      </Box>

      <Box className={styles.searchResultComponentDetails}>
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </Box>

      <Box className={styles.searchResultComponentFooter}>
        <TablePagination
          count={10}
          page={0}
          component="div"
          onPageChange={() => {}}
          rowsPerPage={10}
          rowsPerPageOptions={[]}
        />
      </Box>
    </Box>
  );
};

export default SearchResultComponent;
