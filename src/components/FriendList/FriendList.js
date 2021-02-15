import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.css';

import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }).isRequired).isRequired,
};

export default FriendList;
