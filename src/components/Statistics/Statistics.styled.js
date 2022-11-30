import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.theme.spacing(2)};
  background: ${props => props.theme.colors.white};
  margin: 50px auto 0;
  width: 700px;

`;

export const Title = styled.h2`
  font-size: ${props => props.theme.spacing(6)};
  color: ${props => props.theme.colors.gray};
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 0; 
  padding: ${props => props.theme.spacing(8)};

`;

export const StatList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  padding: 30px;
  /* background: ${props => props.theme.colors.accent}; */
  background: ${ function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}}
`;

export const Label = styled.span`
    color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  font-size: 20px;
  color: ${props => props.theme.colors.white};
`

