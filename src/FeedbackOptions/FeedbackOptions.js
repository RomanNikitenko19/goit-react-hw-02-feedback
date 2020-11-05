import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
     return (
          <div className="div">
               {options.map((option, index) =>
               <button
                    key={index}
                    onClick={onLeaveFeedback}
                    className='btn'
                         name={option}>{option}
               </button>
               )}
                    {/* <button onClick={onLeaveFeedback}  className='btn' name='neutral'>neutral</button>
                    <button onClick={onLeaveFeedback}  className='btn' name='bad'>bad</button> */}
          </div>
     );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
     onLeaveFeedback: PropTypes.func.isRequired,
     options: PropTypes.array.isRequired,
};