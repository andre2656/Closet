import React from "react";
import { Link } from 'react-router-dom';
import './Quizzess.css';

const Quizzes = () => {

    return (
        <div>
            <div>
                <h1>Quizzes</h1>
            </div>
            <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1" ></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2" ></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/Fashion-Style-7.jpg" className="d-block w-100" alt="" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Fashion Style</h5>
                                <Link className="quiz=start" to="/fsq"><button type="button" className="btn btn-dark">Start Quiz</button></Link>
                                <p>Learn more about what your ideal fashion style would be?</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/audrey.jpg" className="d-block w-100" alt="" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Fashion Icon</h5>
                                <Link className="quiz=start" to="/iconq"><button type="button" className="btn btn-dark">Start Quiz</button></Link>
                                <p>Which fashion icon do you most emmulate?</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/SkinTone.jpg" className="d-block w-100" alt="" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Coloring</h5>
                                <Link className="quiz=start" to="/stq"><button type="button" className="btn btn-dark">Start Quiz</button></Link>
                                <p>What is your skin's undertone?</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </div >

    )
}

export default Quizzes;