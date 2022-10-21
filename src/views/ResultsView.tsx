import React from 'react';
import Container from '@mui/material/Container';
import SearchResultComponent from 'components/searchResult/SearchResultComponent';

const ResultsView = () => {
  return (
    <Container component="main" maxWidth={false}>
      <SearchResultComponent />
    </Container>
  );
};

export default ResultsView;
