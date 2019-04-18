
import React from "react";
import './MarketingSite.css';
import './Quizzes.css';

const Quizzes = () => {
    let content = { marginTop: "140px" }
    let padding = { paddingBottm: "30px" }
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-2" />
                <div className="col-md-4" id="quiz-text" style={content}>
                    <h2>Have Fun With Quizzes</h2>
                    <p>Take quick quizzes to hone in on your dream style and adjust your preferences to see fashion that speaks to you.</p>
                </div>
                <div className="col-md-4">
                    <img id="quiz-image" src="images/marketing-site-quiz.jpg" alt= 'quiz' />
                </div>
                <div className="col-md-2" style={padding} />
            </div>
        </div>
    )
}

export default Quizzes;
