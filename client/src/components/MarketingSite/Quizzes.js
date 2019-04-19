
import React from "react";
import './MarketingSite.css';
import './Quizzes.css';

const Quizzes = () => {
    let content = { marginTop: "170px" }
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5" id="quiz-text" style={content}>
                    <h2>Have Fun With Quizzes</h2>
                    <p>Take quick quizzes to hone in on your dream style and adjust your preferences to see fashion that speaks to you.</p>
                </div>
                <div className="col-md-5">
                    <img id="quiz-image" src="images/marketing-site-quiz.jpg" alt= 'quiz' />
                </div>
                <div className="col-md-1"/>
            </div>
        </div>
    )
}

export default Quizzes;
