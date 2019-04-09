import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './CuratedLooks.css';
import './BuyButton.js';


class CuratedLooks extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Curated Looks</h1>
                </div>
                <div className='row'>
                    <div className='col-md-1' />
                    <div className='col-md-5' className='card' id='pinCard'>
                        <img src="https://i.pinimg.com/originals/58/04/f6/5804f689d3dccde403d330e291586c2f.png" class="card-img-top" />
                    </div>
                    <div className='col-md-5' className='card' id='pinCard'>
                        <img src="https://i.pinimg.com/originals/c0/6d/7a/c06d7af98ba7c6d2fa8d97dddd45aa44.png" class="card-img-top" />
                    </div>
                    <div className='col-md-1' />
                </div>
                <div className='row'>
                    <div className='col-md-1' />
                    <div className='col-md-5' className='card' id='pinCard'>
                        <img src="https://i.pinimg.com/originals/58/04/f6/5804f689d3dccde403d330e291586c2f.png" class="card-img-top" />
                    </div>
                    <div className='col-md-5' className='card' id='pinCard'>
                        <img src="https://i.pinimg.com/originals/c0/6d/7a/c06d7af98ba7c6d2fa8d97dddd45aa44.png" class="card-img-top" />
                    </div>
                    <div className='col-md-1' />
                </div>
                <div className='row'>
                    <div className='col-md-1' />
                    <div className='col-md-5' className='card' id='pinCard'>
                        <img src="https://i.pinimg.com/originals/58/04/f6/5804f689d3dccde403d330e291586c2f.png" class="card-img-top" />
                    </div>
                    <div className='col-md-5' className='card' id='pinCard'>
                        <img src="https://i.pinimg.com/originals/c0/6d/7a/c06d7af98ba7c6d2fa8d97dddd45aa44.png" class="card-img-top" />
                    </div>
                    <div className='col-md-1' />
                </div>
            </div>
        );
    }
};

export default CuratedLooks;