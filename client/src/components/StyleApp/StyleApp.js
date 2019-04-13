import React from 'react';
import Quizzes from './Quizzes';
import NavId from './NavId';
import Pinterest from './Pinterest/Pinterest'
import UploadIdeas from './UploadIdeas';

let StyleApp = () => {



        return (
                <div>
                        <NavId />
                        <div className='row'>
                                <div className='col-md-3' />
                                <div className='col-md-6'>
                                        <Quizzes/>
                                </div>
                                <div className='col-md-3' />
                        </div>
                        <br/>
                        <div className="row">
                                <div className='col-md-6'>
                                        <Pinterest/>
                                </div>
                                <div className='col-md-6'>
                                        <UploadIdeas/>
                                </div>
                        </div>
                </div>

        )
}

export default StyleApp;
