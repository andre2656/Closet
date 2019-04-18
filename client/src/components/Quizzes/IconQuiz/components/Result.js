import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Monroe from './resultOptions/Monroe';
import Joplin from './resultOptions/Joplin';
import Sedgwick from './resultOptions/Sedgwick';
import Hepburn from './resultOptions/Hepburn';

function Result(props) {

	const getComponent = () => {
		switch (props.quizResult) {

			case "Monroe": return <Monroe />;
			case "Hepburn": return <Hepburn />;
			case "Joplin": return <Joplin />;
			case "Sedgwick": return <Sedgwick />;
			default: return <h1>You might be too ecclectic, so it was difficult to match you to an icon.</h1>;
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