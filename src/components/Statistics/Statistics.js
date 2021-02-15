import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

import getRandomColor from '../random-color';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(el => {
          return (
            <li className="item" key={el.id} style={{ backgroundColor: getRandomColor() }}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
