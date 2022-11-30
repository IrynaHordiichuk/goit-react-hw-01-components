import styled from 'styled-components';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.regular};
  background: ${props => props.theme.colors.white};
`;

export const ProfileDescribtion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(4)};
`;

export const ProfileImage = styled.img`
  border:  1px solid rgb(34, 34, 34);
  object-fit: cover;
  border-radius: 50%;
`;

export const ProfileText = styled.p`
  font-weight: 500;
  color: ${props => props.theme.colors.gray};
  letter-spacing: ${props => props.theme.spacing(0.2)};
  margin-bottom: 0;
`;

export const ProfileName = styled.p`
  font-weight: 700;
  font-size: large;
  color: ${props => props.theme.colors.dark};
  letter-spacing: ${props => props.theme.spacing(0.2)};
  margin-bottom: 0;
`;


export const StatsList = styled.ul`
  background-color: ${props => props.theme.colors.white};
  border-radius: 0 0 ${props => props.theme.spacing(3)};
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};
  display: grid;
  row-gap: ${props => props.theme.spacing(2)};
`;

export const StatsItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  padding: 10px 30px 10px 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  background-color: ${props => props.theme.colors.white};
  
`;

export const StatsSpanText = styled.span`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.colors.gray};
  font-weight: 200;
  font-size: ${props => props.theme.spacing(6)};
`;

export const StatsSpanNumber = styled.span`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.colors.dark};
  font-weight: 500;
  font-size: ${props => props.theme.spacing(6)};
`;