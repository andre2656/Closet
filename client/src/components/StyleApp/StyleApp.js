import React from 'react';
import axios from 'axios';
import Quizzes from './Quizzes';
import NavId from './NavId';
import CuratedLooks from './CuratedLooks';
import Pinterest from '../Pinterest/Pinterest'
import UploadIdeas from './UploadIdeas';
import './StyleApp.css';

let StyleApp = () => {
        return (
                <div>
                        <NavId />
                        <div className='row'>
                                <div className='col-md-3' />
                                <div className='col-md-6'>
                                        <Quizzes />
                                </div>
                                <div className='col-md-3' />
                        </div>
                        <div className="row">
                                <div className='col-md-6'>
                                        <Pinterest />
                                </div>
                                <div className='col-md-6'>
                                        <UploadIdeas />
                                </div>
                        </div>
                </div>

        )
}

export default StyleApp;
