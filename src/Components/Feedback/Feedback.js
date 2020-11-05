import React, { Component } from 'react';
import FeedbackOptions from '../../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import SectionTitle from '../SectionTitle/SectionTitle';
import Notification from '../Notification/Notification';


import './Feedback.css';

class Feedback extends Component {
     state = {
          good: 0,
          neutral: 0,
          bad: 0
     }

     count = ({target}) => {
          const { name } = target;
          this.setState({
               [name]: this.state[name] +1
          })
     }

     countTotalFeedback = () => {
     //      return Object.values(this.state).reduce((acc, value) => acc + value, 0);
          return this.state.good+this.state.neutral+this.state.bad
     }

     countPositiveFeedbackPercentage = () => {
          return this.state.good / Object.values(this.state).reduce((acc, value) => acc + value, 0) * 100
     }

     render() {
// console.log(this.countTotalFeedback);
          return (
            <section className="feedback-section">
              <div className="container">
                <SectionTitle>
                  <h2 className="title">Please leave feedback</h2>
                </SectionTitle>
                <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.count} />
                {/* <div className="div">
                              <button onClick={this.count}  className='btn' name='good'>good</button>
                              <button onClick={this.count}  className='btn' name='neutral'>neutral</button>
                              <button onClick={this.count}  className='btn' name='bad'>bad</button>
                         </div> */}

                {!this.countTotalFeedback() ? (
                  <Notification />
                ) : (
                  <>
                    <SectionTitle>
                      <h2 className="title">Statistics</h2>
                    </SectionTitle>
                    <Statistics
                      good={this.state.good}
                      neutral={this.state.neutral}
                      bad={this.state.bad}
                      total={this.countTotalFeedback}
                      positivePercentage={this.countPositiveFeedbackPercentage}
                    />
                  </>
                )}
                {/* <ul className="list">
                              <li className="item"><span className='good_counter'>Good: {this.state.good}</span></li>
                              <li className="item"><span className='neutral_counter'>Neutral: {this.state.neutral}</span></li>
                              <li className="item"><span className='bad_counter'>Bad: {this.state.bad}</span></li>
                              <li className="item"><span className='total_counter'>Total counter: {this.countTotalFeedback()}</span></li>
                              <li className="item"><span className='positive-feedback_counter'>Positive feedback: {this.countPositiveFeedbackPercentage()}%</span></li>
                         </ul> */}
              </div>
            </section>
          );
     }
}

export default Feedback;