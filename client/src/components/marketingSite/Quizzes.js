import React, { Component } from "react";
import axios from 'axios';
import './MarketingSite.css';

const Quizzes = () => {
    let content = { marginTop: "80px" }
    let padding = { paddingBottom: "30px" }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-2"/>
                <div className="col-md-4" style={content}>
                    <h2>Have Fun With Quizzes</h2>
                    <p>Take quick quizzes to hone in on your dream style and adjust your preferences to see fashion that speaks to you.</p>
                </div>
                <div className="col-md-4">
                    <img id="quiz-image" src="images/marketing-site-quiz.jpg"/>
                </div>
                <div className="col-md-2" style={padding}/>
            </div>
        </div>
    )
}

export default Quizzes;