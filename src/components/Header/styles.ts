import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 0 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const MenuButton = styled(BorderlessButton).attrs({
  activeOpacity: 0.8,
})``;

export const EmptyDiv = styled.View`
  width: 32px;
`;
