import React from 'react';
import axios from 'axios'
import MessageNav from './MessageNav'
class passwordAuth extends React.Component {
    state = {
        correct: false,
        password: '',
    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    ClickedPassword = () => {
                axios.get('api/stylist/password').then((password) => {
                    if (password.data.password === this.state.password){
                        return <MessageNav/>
                    }else{
                        console.log('Try again thats the wrong password...')
                    }
                })
    }


    render() {
        return (
            <div>
                <input type='password' id='stylistPassword' onChange={this.handlePassword} placeholder='password'></input>
                <button onClick={this.ClickedPassword}>Submit</button>
                <ClickedPassword/>
            </div>
        )
    }
}
export default passwordAuth;