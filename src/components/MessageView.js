import { Component } from "react";

//This will remain written with class syntax, as it's just a container for 
//state and representation logic

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
            <div className="columns">
                <figure className="image is-48x48 is-rounded">
                    <img src="https://bulma.io/images/placeholders/48x48.png"/>
                </figure>   
                <span className="column is-primary">{this.content}</span>
            </div>
        )
    }

}

export default MessageView;