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
  justify-content: center;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing(5)};
  gap: ${props => props.theme.spacing(2)};
  flex-basis: calc((100% - 4 * 0px) / 5);
  background: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.white};
`;
