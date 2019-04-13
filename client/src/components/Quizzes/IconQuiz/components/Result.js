import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Result(props) {
	return (

		<div>
			<div>
				You prefer  <strong> {props.quizResult}</strong>!
			</div>
			<br />
			<div>
				<Link className="return" to="/app"><button type="button" className="btn btn-dark">Return</button></Link>
			</div>
		</div>

	);
}

Result.propTypes = {
	quizResult: PropTypes.string.isRequired,
};

export default Result;	