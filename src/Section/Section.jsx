import { SectionWrapper } from "./Section.styled"
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <h2>{title}</h2>
      {children}
    </SectionWrapper>
  )
} 

Section.propTypes = {
  title: PropTypes.string.isRequired,
  
}