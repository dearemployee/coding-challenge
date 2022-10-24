import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Typography } from '@mui/material';

import { useLocation, useNavigate } from 'react-router-dom';

import { appRepository } from 'repositories/app-repository';
import Loader from 'components/loader/Loader';
import { CatType } from 'types/cat-type';
import ResultCard from './resultCard/ResultCard';
import styles from './SearchResult.module.scss';

const SearchResultComponent = () => {
  const [loading, setLoading] = useState(false);
  const [catResult, setCatResult] = useState<CatType[]>([]);
  const [catTag, setCatTag] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const getSearchResult = async () => {
    setLoading(true);

    try {
      if (location.state.lucky) {
        const query = `${catTag}`;
        const catDetails = await appRepository.getRandomCat(query);
        setCatResult([catDetails]);
      } else {
        const query = `?limit=5&skip=1&tags=${catTag}`;
        const catDetails = await appRepository.getCats(query);
        setCatResult(catDetails);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (location.state) {
      setCatTag(location.state.tag);
      getSearchResult();
    }
  }, [catTag]);

  const NoResult = () => (
    <Box className={styles.noResultComponent}>
      <Typography variant="h4">No result</Typography>
    </Box>
  );

  if (loading) {
    return <Loader />;
  }

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
        {catResult.length > 0 ? (
          catResult.map((cat) => (
            <ResultCard key={cat._id} cat={cat} setTag={setCatTag} />
          ))
        ) : (
          <NoResult />
        )}
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
