// import Feedback from './Feedback/Feedback';
import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >

//       <Feedback />
//     </div>
//   );
// };

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (statusFeedback) => {
    this.setState((prevState) => ({
      [statusFeedback]: prevState[statusFeedback] + 1
    }));
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  
  countPositiveFeedbackPercentage() {
    const positiveFeedbackPercentage = Math.round(this.state.good * 100 / this.countTotalFeedback());
    return this.state.good ? positiveFeedbackPercentage : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const optionsForFeedback = Object.keys(this.state);

    return (
      <div className="feedback">
        <h2 className="feedback_title">Please leave your feedback for us</h2>

        <FeedbackOptions
          options={optionsForFeedback}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        
        <h2 className="feedback_title">Statistics</h2>
        
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    )
  }
};

export default App;