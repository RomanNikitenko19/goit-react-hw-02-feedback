import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
     return (
          <>
               <ul className="list">
                    <li className="item"><span className='good_counter'>Good: {good}</span></li>
                    <li className="item"><span className='neutral_counter'>Neutral: {neutral}</span></li>
                    <li className="item"><span className='bad_counter'>Bad: {bad}</span></li>
                    <li className="item"><span className='total_counter'>Total counter: {total()}</span></li>
                    <li className="item"><span className='positive-feedback_counter'>Positive feedback: {positivePercentage()}%</span></li>
               </ul>
          </>
     );
};

export default Statistics;

Statistics.propTypes = {
     good: PropTypes.number.isRequired,
     neutral: PropTypes.number.isRequired,
     bad: PropTypes.number.isRequired,
     total: PropTypes.func.isRequired,
     positivePercentage: PropTypes.func.isRequired,
};