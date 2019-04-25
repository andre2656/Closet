import React from 'react';
import Quizzes from './Quizzes';
import NavId from './NavId';
import Pinterest from './Pinterest/Pinterest'
import UploadIdeas from './UploadIdeas';
import LiveChat from './LiveChat';
import NonLiveChat from './NonLiveChat'
import Axios from 'axios';
import loginController from '../../controllers/LoginController'


class StyleApp extends React.Component {
        state = {
                premium: false,
                email: ''
        }

        componentDidMount() {
                loginController.addUserChangedListener(this.setUser);
                loginController.recheckLogin();
        }

        componentWillUnmount() {
                loginController.removeUserChangedListener(this.setUser);
        }

        setUser = (user) => {
                this.setState({ email: user.user.email },
                        () => {
                                this.checkPremium();
                        });
        }
        checkPremium = () => {
                Axios.get('/api/pay/premium/', {
                        params: {
                                email: this.state.email
                        }
                }).then((response) => {
                        let emptyArray = []
                        if (response.data === emptyArray) {
                                this.setState({ premium: false },
                                        () => {
                                                console.log(this.state.premium)
                                               
                                        });
                        } else {
                                this.setState({ premium: true },
                                        () => {
                                                console.log(this.state.premium)
                                               
                                        });
                        }

                }).catch(function (error) {
                        console.log(error);
                });
        }

        getChat = () => {
                switch (this.state.premium) {

                        case true: return <LiveChat />;
                        default: return <NonLiveChat />;
                };
        };

        render() {

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
                                <br />
                                <div className='row'>
                                        <div className='col-md-6'>
                                                <Pinterest />
                                        </div>
                                        <div className='col-md-6'>
                                                <UploadIdeas />
                                                <br />
                                                {this.state.premium ? <LiveChat/> : <NonLiveChat/>}
                                        </div>
                                </div>
                        </div>

                )
        }
}

export default StyleApp;
