import React from "react";

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
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.shopify.com/s/files/1/0868/1504/files/bf_grande.png?v=1533662108" className="d-block w-100" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Fashion Style</h5>
                            <p>Learn more about what your ideal fashion style would be?</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://patternobserver.com/wp-content/uploads/2014/05/IMG-12-palette-picking.png" className="d-block w-100" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Coloring</h5>
                            <p>What is your ideal color palette.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://wordpress-mnei139eijehv5w.netdna-ssl.com/wp-content/uploads/2017/03/the-mod-the-modist-modest-icons-march-issue-modest-fashion.png" className="d-block w-100" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Fashion Icon</h5>
                            <p>Which fashion icon do you most emmulate?</p>
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
        
        </div>

    )
}

export default Quizzes;