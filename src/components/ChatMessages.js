import { useState } from "react";
import MessageView from "./MessageView";
import {useMessages} from "../service/hooks"

function ChatMessages(props) {

    //MOCK DATA. El parámetro real que representa la lista
    //de mensajes es messages
    
    const [messageList, setMsgList] = useState([{
        id: 1,
        roomID: 23,
        authorID: 351,
        posting_timestamp: Date.now(),
        content: "I am the first message"
    },
    {
        id: 2,
        roomID: 23,
        authorID: 351,
        posting_timestamp: Date.now(),
        content: "This is the second message"
    },
    {
        id: 2,
        roomID: 23,
        authorID: 351,
        posting_timestamp: Date.now(),
        content: "This is the loooooooooo ooooooooooooooo so asd sf sag skj saksihfsh a safj.. AS SDJHS HKkjsd akjfn ajk ooooooooooooo oooooooo ooooooooo oooooooo ooooong message"
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

    return (
        <div className="content">
            {messageList.map(( message ) => (
                <MessageView key={message.id}
                roomID = {message.roomID}
                authorID = {message.authorID}
                posting_timestamp = {message.posting_timestamp}
                id={message.id}
                content={message.content} />
            ))}
        </div>
    );


}

export default ChatMessages;