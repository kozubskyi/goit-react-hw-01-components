import React from 'react';
import './App.css';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
