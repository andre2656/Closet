import React from 'react';

 class ChatTitle extends React.Component{
    state = {
        user: '',
        name: '',
    }
    
    render(){
        return(
            <div className= 'chatHead'>
                <h3 id= 'ChatWelcome'> Welcome to the Chat {this.state.name}</h3>
            </div>
        )
    }
}  
export default ChatTitle;