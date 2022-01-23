import React, { ReactElement } from 'react';
import { Header } from '../../components/Header';

import * as Styles from './styles';

const Dashboard = (): ReactElement => {
  return (
    <Styles.Container>
      <Header />
    </Styles.Container>
  );
};

export default Dashboard;
