import { useState } from "react";
import Message from "./Message";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

function ChatMessages(props) {

    const [membersList, setMemberList] = useMembers(props.);
    const [messageList, setMessageList] = useMessages(null);

    //Custom hook because the functionality of fetching room members and a room's messages
    //will probably get reused in the future.

    function useMembers(roomID) {
        return useQuery(["get", roomID], () => getMembersByRoomId(roomID), {
            enabled: !!roomID
        });
    }

    function useMessages(roomID, memberID) {

    }

    const getMembersByRoomId = async (roomID) => {
        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${roomID}`
        );
        return data;
    }

    const getMessagesByMemberAndRoomID = async (memberID, roomID) => {
        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${roomID}-${memberID}`
        );
        return data;
    }

    const [msgList, setMsgList] = useState([<Message/>]);

    return (
        <div className="content is-flex is-flex-direction-column is-flex-wrap-wrap">
            <Message></Message>
        </div>
    );


}



export default ChatMessages;