import { PropTypes } from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className="feedback_table">
            {options.map(option => {
                return (
                    <button type='button' key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
                )
            })}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}