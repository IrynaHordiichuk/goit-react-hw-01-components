import styled from 'styled-components';

export const ListForFriend = styled.ul`
margin: 0 auto;
  width: ${props => props.theme.spacing(150)};
  margin-top: 100px;
  display: grid;
  row-gap: ${props => props.theme.spacing(2)};
  
`;