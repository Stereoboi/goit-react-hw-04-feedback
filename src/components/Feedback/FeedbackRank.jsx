import { Button, Container, } from './FeedbackRank.styled'
import PropTypes from 'prop-types';
export const FeedbackOptions = ({options , onLeaveFeedback}) => {
  return (
    <Container>
      {options.map(option => (
        <Button
          key={option}
          onClick={onLeaveFeedback(option)}
          type='button'
        >
          {option}
        </Button>
      ))}    
    </Container>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}