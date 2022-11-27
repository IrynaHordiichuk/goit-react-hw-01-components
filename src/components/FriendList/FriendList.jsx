import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';
import { ListForFriend } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListForFriend>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        ></FriendListItem>
      ))}
    </ListForFriend>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
