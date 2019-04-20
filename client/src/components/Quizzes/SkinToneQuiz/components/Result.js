import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Warm from './resultOptions/Warm';
import Cool from './resultOptions/Cool';
import Neutral from './resultOptions/Neutral';

function Result(props) {

	const getComponent = () => {
		switch (props.quizResult) {

			case "Cool": return <Cool />;
			case "Warm": return <Warm />;
			case "Neutral": return <Neutral />;
			default: return <Neutral />;
		};
	};


	return (

		<div>

			{getComponent()}

			<br />
			<div>
				<Link className="return" to="/app"><button type="button" className="btn btn-dark">Return</button></Link>
			</div>
		</div>

	)

};

Result.propTypes = {
	quizResult: PropTypes.string.isRequired,
};

export default Result;	