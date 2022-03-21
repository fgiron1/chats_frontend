import { useState } from "react";
import Message from "./Message";
import axios from "axios";
import { useQuery, useInfiniteQuery } from "react-query";

function ChatMessages(props) {

    const {
        members,
        errorMember,
        fetchNextMember,
        hasNextMember,
        isFetchingMember,
        isFetchingNextMember,
        statusMember
    } = useMembers(props.roomID, props.memberID);

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

    function useMembers(roomID) {
        //No need to specify getNextPageParam, because the backend simply returns an updated list
        //of the members of the chat room, without the need to change the roomID parameter.
        return useInfiniteQuery(["getMembersByRoomId", roomID], () => getMembersByRoomId(roomID), {
            enabled: !!roomID
        });
    }

    function useMessages(roomID, memberID) {
        return useQuery(["getMessagesByMemberAndRoomID", roomID, memberID], () => getMessagesByMemberAndRoomID(roomID, memberID), {
            enabled: !!roomID
        });
    }

    const getMembersByRoomId = async (roomID) => {
        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${roomID}`
        );
        return data;
    }

    const getMessagesByMemberAndRoomID = async (roomID, memberID) => {
        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${roomID}-${memberID}`
        );
        return data;
    }

    const [msgList, setMsgList] = useState([<Message />]);

    return (
        <div className="content is-flex is-flex-direction-column is-flex-wrap-wrap">
            {messageList.map(({ message }) => (
                <Message key={message.id} id={message.id} />
            ))}
        </div>
    );


}



export default ChatMessages;