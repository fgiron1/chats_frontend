import { Component } from "react";

//This will remain written with class syntax, as it's just a data class.

class MessageView extends Component {

    constructor(props){
        super(props);
        this.id = props.id
        this.roomID = props.roomID
        this.authorID = props.authorID
        this.posting_timestamp = props.posting_timestamp
        this.content = props.content
    }
    
    render(){
        return(

            <span className="tag is-link is-light is-medium">
                {this.content}
                {this.id}
            </span>
        )
    }

}

export default MessageView;