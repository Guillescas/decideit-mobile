import React, { ReactElement } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import * as Styles from './styles';

export const Header = (): ReactElement => {
  const theme = useTheme();

  return (
    <Styles.Container>
      <Styles.MenuButton onPress={() => console.log('oi')}>
        <Ionicons name="menu-outline" size={32} color={theme.colors.text} />
      </Styles.MenuButton>

      <Styles.Title>decide.it</Styles.Title>

      <Styles.EmptyDiv />
    </Styles.Container>
  );
};
