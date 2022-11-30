import styled from 'styled-components';

export const BaseTable = styled.table`
  width: 100%;
  margin-top: 100px;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const THead = styled.thead`
  /* color: ${({ theme }) => theme.colors.dark}; */
  /* text-transform: uppercase; */
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

export const Th = styled.th`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.light};
`;

export const TBody = styled.tbody`
  background-color: ${({theme}) => theme.colors.lightGray}
`;

export const Td = styled.td`
  padding: 10px;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  border-left: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.dark};
`;
