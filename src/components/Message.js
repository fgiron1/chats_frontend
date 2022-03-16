import { Component } from "react";

class Message extends Component {

    constructor(props){
        super(props);
        this.message = props.message
    }
    
    render(){
        return(

            <span className="tag is-link is-light is-medium">
                {this.message}
            </span>
        )
    }

}

export default Message;