import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Classic from './resultOptions/Classic';
import Trendy from './resultOptions/Trendy';
import Sporty from './resultOptions/Sporty';
import Urban from './resultOptions/Urban';
import Bohemian from './resultOptions/Bohemian';
import Dramatic from './resultOptions/Dramatic';
import Romantic from './resultOptions/Romantic';
// import results from './api/results';

function Result(props) {

	const getComponent = () => {
		switch (props.quizResult) {

			case "Classic": return <Classic />;
			case "Trendy": return <Trendy />;
			case "Dramatic": return <Dramatic />;
			case "Romantic": return <Romantic />;
			case "Sporty": return <Sporty />;
			case "Bohemian": return <Bohemian />;
			case "Urban": return <Urban />;
			default: return <h1>No style match</h1>;
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