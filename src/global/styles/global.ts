import styled from 'styled-components/native';

export const GlobalStyles = styled.View`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.background};
`;
