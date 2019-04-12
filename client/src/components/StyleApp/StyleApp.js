import React from 'react';
import axios from 'axios';
import Quizzes from './Quizzes';
import NavId from './NavId';
import CuratedLooks from './CuratedLooks';
import UploadIdeas from './UploadIdeas';

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
                                        <CuratedLooks />
                                </div>
                                <div className='col-md-6'>
                                        <UploadIdeas />
                                </div>
                        </div>
                </div>

        )
}

export default StyleApp;
