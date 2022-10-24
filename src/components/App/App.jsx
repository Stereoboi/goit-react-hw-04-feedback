import { Component } from 'react'
import {  Container, } from './App.styled'
import { Statistic } from '../FeedBackStatistic/FeedBackStatistic'
import { FeedbackOptions } from '../Feedback/FeedbackRank'
import { Section } from 'Section/Section'
import { Notification } from 'components/Notification/Notification'
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  stateKeys = Object.keys(this.state);

  handleClick = option => () => {
    this.setState(prevState => ({
       [option]: prevState[option] + 1 
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state
    return  good + bad + neutral
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total !== 0 ? Math.round((good * 100) / total) : 0;
  }
  
  render() {
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    return (  
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={this.stateKeys}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        
        <Section title="Statistics">
          {total <= 0 ? (<Notification></Notification>) : (
            <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
          ) }
        </Section>
      </Container>
               
    )
  };
  
};
