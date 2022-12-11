import PropTypes from 'prop-types';
import {
  BaseTable,
  THead,
  Tr,
  Th,
  TBody,
  Td,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <BaseTable>
      <THead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </THead>

      <TBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Td>{type.toUpperCase()}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </TBody>
    </BaseTable>
  );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string
        })
    ),
};