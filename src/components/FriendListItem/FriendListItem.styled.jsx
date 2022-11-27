
import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};
  background: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.small};
  padding-top: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(10)};
  
`;

export const FriendStatus = styled.span`
  background-color: ${({isOnline, theme}) => {return isOnline ? theme.colors.green : theme.colors.red}};
  width: 40px;
  height: 40px;
  border-radius: 50%;

`;

export const FriendAvatar = styled.img`

  width: 150px;
  border: 1px solid #aaa;
  padding: 10px;
  border-radius: 50%;
  margin-left: 30px;

`;

export const FriendName = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin-left: 30px;
`