import { useState } from 'react'
import {  Container, } from './App.styled'
import { Statistic } from '../FeedBackStatistic/FeedBackStatistic'
import { FeedbackOptions } from '../Feedback/FeedbackRank'
import { Section } from 'Section/Section'
import { Notification } from 'components/Notification/Notification'

export const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleClick = options => {
    // console.log(options);
    if (options === 'good') {
      setGood(good => good + 1);
    }
    if (options === 'neutral') {
      setNeutral(neutral => neutral + 1);
    }
    if (options === 'bad') {
      setBad(bad => bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return  good + bad + neutral
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total !== 0 ? Math.round((good * 100) / total) : 0;
  }
  
  const total = countTotalFeedback()
  const positivePercentage = countPositiveFeedbackPercentage()
    
    return (  
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleClick}
          />
        </Section>
        
        <Section title="Statistics">
          {total <= 0 ? (<Notification></Notification>) : (
            <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
          ) }
        </Section>
      </Container>       
    )

  
};
