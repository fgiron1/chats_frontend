import { useState } from "react";
import Message from "./Message";

function ChatMessages(props){

    const [msgList, setMsgList] = useState([<Message/>]);

    return (
        <div className="content is-flex is-flex-direction-column is-flex-wrap-wrap">
            <Message></Message>
        </div>
    );

}



export default ChatMessages;