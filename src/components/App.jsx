
import { Section, Container, Profile, Statistics, FriendList, TransactionHistory } from 'components';


import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import user from 'data/user.json';


export const App = () => {
  console.log(data);
  console.log(friends);
  return (

    <Section>
      <Container>
      {/* <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading> */}
       <Profile {...user} />
       <Statistics title={"Upload stats"} stats={data} />
       <FriendList friends={friends}/>
       <TransactionHistory transactions={transactions}/>
      </Container>
    </Section>
  );
};
