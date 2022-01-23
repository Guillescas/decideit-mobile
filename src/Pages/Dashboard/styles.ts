import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: ${({ theme }) => theme.colors.background};

  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;
