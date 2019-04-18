import React from 'react';
import PropTypes from 'prop-types';
 
 
function AnswerOptions(props) {
	return (
		<div className="answerOption">
			<input
				type="radio"
				className="radioCustomButton"
				name="radioGroup"
				checked={props.answerType === props.answer}
				id={props.answerType}
				value={props.answerType}
				disabled={props.answer}
				onChange={props.onAnswerSelected}
			/>
 
			<label className="quizLabel" htmlFor={props.answerType}>
				{props.answerContent}
			</label>
 
		</div>
	);
}
 
AnswerOptions.propTypes = {
	answerType: PropTypes.string.isRequired,
	answerContent: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
	OnAnswerSelected: PropTypes.string.isRequired,
 
};
 
export default AnswerOptions;
