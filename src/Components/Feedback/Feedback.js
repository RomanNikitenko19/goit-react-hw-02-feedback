import React, {Component}  from 'react';
import './Feedback.css';

class Feedback extends Component {


     render() {

          return (

               <section className="feedback-section">
                    <h1 className="title">Please leave feedback</h1>
                    <div className="div">
                         <button className="btn">good</button>
                         <button className="btn">neutral</button>
                         <button className="btn">bad</button>
                    </div>

                    <h2 className="title">Statistics</h2>
                    <ul className="list">
                         <li className="item"><span className="good_counter"></span></li>
                         <li className="item"><span className="neutral_counter"></span></li>
                         <li className="item"><span className="bad_counter"></span></li>
                         <li className="item"><span className="total_counter"></span></li>
                         <li className="item"><span className="positive-feedback_counter"></span></li>
                    </ul>
               </section>
          );
     }
}

export default Feedback;