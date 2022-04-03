import { useState } from "react";
import MessageView from "./MessageView";
import {useMessages} from "../service/hooks"

function ChatMessages(props) {

    //MOCK DATA. El parámetro real que representa la lista
    //de 
    
    const [messageList, setMsgList] = useState([{
        id: 1,
        content: "Hello world"
    }]);

    const {
        messages,
        error,
        fetchNextMessage,
        hasNextMessage,
        isFetchingMessage,
        isFetchingNextMessage,
        statusMessage
    } = useMessages(props.roomID, props.memberID);

    //Custom hook because the functionality of fetching room members and a room's messages
    //will probably get reused in the future.

    return (
        <div className="content is-flex is-flex-direction-column is-flex-wrap-wrap">
            {messageList.map(({ message }) => (
                <MessageView key={message.id} id={message.id} content={message.content} />
            ))}
        </div>
    );


}



export default ChatMessages;