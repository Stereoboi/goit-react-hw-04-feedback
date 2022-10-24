import {  StatisticWrapper, ListItem } from './FeedBackStatistic.styled.js'
import PropTypes from 'prop-types';

export const Statistic =({good, bad, neutral, total, positivePercentage }) => {
  return (
    <StatisticWrapper>
          <ul>
            <ListItem>Good: {good}</ListItem>
            <ListItem>Neutral: {neutral}</ListItem>
            <ListItem>Bad: {bad}</ListItem>
            <ListItem>Total: { total }</ListItem>
            <ListItem>Positive feedback: {positivePercentage }%</ListItem>
          </ul>
    </StatisticWrapper> 
  )
}

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}
