import React from "react";
import { Link } from 'react-router-dom';

const Intro = () => {
    let padding = { paddingBottom: "30px" }

    return (
        <div className="container mx-auto">
            <div className="row">
                <div className="col-md-2" />
                <div className="col-md-8">
                    <h1>The Closet</h1>

                    <p>Ever feel like you're keeping up with the Joneses? The Closet makes it easy to curate a style that's 100% you — effortlessly! Use our fun quizzes to discover your true style, get inspired by new trends, make easy in-app purchases on items you like, and get closer to owning your dream closet.</p>

                    <Link className="get-started-now" to="/sign-up"><button type="button" className="btn btn-dark">Get Started Now</button></Link>
                    <div className="col-md-2" style={padding} />
                </div>
            </div>
        </div>

    )
}

export default Intro;