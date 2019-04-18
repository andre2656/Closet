import React from 'react'
import loginController from "../../../controllers/LoginController"
import axios from'axios'

class SendMessageFrom extends React.Component {

    state = {
        user: true,
        email: '',
        message: ''
    }
    componentDidMount() {
        console.log("componentDidMount");
        loginController.addUserChangedListener(this.setUser);

        loginController.recheckLogin();
    }

    componentWillUnmount() {
        console.log("WillUnmount");
        loginController.removeUserChangedListener(this.setUser);
    }

    setUser = (user) => {
        console.log('setUser Email- ' + user.user.email);
        this.setState({ email: user.user.email });
    }

    messageChanged = (event) => {
        this.setState({message: event.target.value});
    }
    sendMessage= () => {
        axios.post('/api/chat/send', {
            email: this.state.email,
            message: this.state.message,
            user: this.state.user
        })
            .then((response) => {
                console.log(response);
           

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    getMesages= () => { 
        axios.get('api/chat/recieve', {
            params: {
                email: this.state.email
            }
        }).then((response) => {
            console.log(response)
        }).catch(function (error) {
            console.log(error);
        });
    } 


    render() {
        return (
            <div>
                <input id='chatInput' style={{ marginRight: "5px" }} type="text" onChange={this.messageChanged} />
                 <button onClick={this.sendMessage} type='submit' className="btn btn-dark btn-file">Send</button>
            </div>

        )
    }
}
export default SendMessageFrom;