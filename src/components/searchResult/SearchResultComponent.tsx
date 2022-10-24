import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Typography } from '@mui/material';

import { useLocation, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

import { appRepository } from 'repositories/app-repository';
import Loader from 'components/loader/Loader';
import { CatType } from 'types/cat-type';
import { Paginations } from 'enums/pagination-enums';

import ResultCard from './resultCard/ResultCard';
import styles from './SearchResult.module.scss';

const SearchResultComponent = () => {
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
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
        setLoadMore(false);
      } else {
        const query = `?limit=${Paginations.MIN_PAGINATION_PAGE_SIZE}&skip=${
          Paginations.MIN_PAGINATION_PAGE * Paginations.MIN_PAGINATION_PAGE_SIZE
        }&tags=${catTag}`;

        const catDetails = await appRepository.getCats(query);
        setCatResult(catDetails);
        setLoadMore(catDetails.length > 0);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async (newPage: number) => {
    const query = `?limit=${Paginations.MIN_PAGINATION_PAGE_SIZE}&skip=${
      newPage * Paginations.MIN_PAGINATION_PAGE_SIZE
    }&tags=${catTag}`;

    console.log(query);

    const catDetails = await appRepository.getCats(query);
    setCatResult([...catResult, ...catDetails]);
    setLoadMore(catDetails.length > 0);
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
        <InfiniteScroll
          loadMore={handleLoadMore}
          loader={
            <div key={0}>
              <Loader />
            </div>
          }
          initialLoad={false}
          useWindow={false}
          hasMore={loadMore}
          pageStart={0}
          className={styles.searchResultComponentScroll}
        >
          {catResult.length > 0 ? (
            catResult.map((cat, ind) => (
              <ResultCard key={ind} cat={cat} setTag={setCatTag} />
            ))
          ) : (
            <NoResult />
          )}
        </InfiniteScroll>
      </Box>
    </Box>
  );
};

export default SearchResultComponent;
