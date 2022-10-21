import React from 'react';
import Container from '@mui/material/Container';
import HomeComponent from 'components/home/HomeComponent';

import styles from './View.module.scss';

const HomeView = () => {
  return (
    <Container
      component="main"
      maxWidth={false}
      className={styles.viewContainer}
    >
      <HomeComponent />
    </Container>
  );
};

export default HomeView;
