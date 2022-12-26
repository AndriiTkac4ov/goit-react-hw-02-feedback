// import Feedback from './Feedback/Feedback';
import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

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
      <>
        <Section
          title="Please leave your feedback for us"
        >
          <FeedbackOptions
            options={optionsForFeedback}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section
          title="Statistics"
        >
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    )
  }
};

export default App;