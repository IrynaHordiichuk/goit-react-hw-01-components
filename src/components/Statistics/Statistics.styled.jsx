import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.white};

`;

export const Title = styled.h2`
  font-size: ${props => props.theme.spacing(6)};
  color: ${props => props.theme.colors.gray};
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 0;  

`;

export const StatList = styled.ul`
    display: flex;
`;

export const StatItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const Label = styled.span`
    color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
    color: ${props => props.theme.colors.white};
`

