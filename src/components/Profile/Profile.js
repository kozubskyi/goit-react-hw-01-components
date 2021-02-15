import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

import defaultImage from '../default-image-620x600.jpg';

const Profile = props => (
  <div className="profile">
    <div className="description">
      <img src={props.avatar} alt={props.name} className="avatar" width="120" />
      <p className="name">{props.name}</p>
      <p className="tag">@{props.tag}</p>
      <p className="location">{props.location}</p>
    </div>

    <ul className="stats">
      <li className="followers-item">
        <span className="label">Followers</span>
        <span className="quantity">{props.followers}</span>
      </li>
      <li className="views-item">
        <span className="label">Views</span>
        <span className="quantity">{props.views}</span>
      </li>
      <li className="likes-item">
        <span className="label">Likes</span>
        <span className="quantity">{props.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
