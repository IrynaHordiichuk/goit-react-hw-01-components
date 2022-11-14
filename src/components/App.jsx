
import { Heading, Section, Container, Profile, FriendList, Statistics, TransactionHistory } from 'components';

import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import user from 'data/user.json';

export const App = () => {
  return (

    <Section>
      <Container>
      {/* <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading> */}
       <Profile {...user} />
       <Statistics title={"kgkgkhgkg"} stats={data} />
      </Container>
    </Section>
  );
};
