import React, {Component} from 'react'; 

class MessageInput extends Component {
    state = {
        message:''
    }

    handleSubmit = (event) => {
        event.preventDefault(); 
        // console.log("message to send", this.state.message); 
        this.props.send(this.state.message); 
        this.setState({
            message: ''
        })
    }

    render(){
    const {message} = this.state; 
        return(
            <form className="row" onSubmit={this.handleSubmit}> 
                <div className="col s8 offset-s2">
                    <label> New Message </label> 
                    <input type='text' 
                    value={message} 
                    onChange={event => this.setState({message: event.target.value})}/> 
                </div> 
            </form> 
        )
    }
}

export default MessageInput;   