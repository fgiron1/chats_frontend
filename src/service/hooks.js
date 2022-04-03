import axios from "axios";
import { useQuery, useInfiniteQuery } from "react-query";


//TODO: useInfiniteQuery no es. Tengo que buscar otro mecanismo

export function useMembers(roomID) {
    //No need to specify getNextPageParam, because the backend simply returns an updated list
    //of the members of the chat room, without the need to change the roomID parameter.
    return useInfiniteQuery(["getMembersByRoomId", roomID], () => getMembersByRoomId(roomID), {
        enabled: !!roomID
    });
}

export function useMessages(roomID, memberID) {
    return useInfiniteQuery(["getLatest50Messages", roomID, memberID], () => getLatest50Messages(roomID, memberID), {
        enabled: !!roomID
    });
}

const getLatest50Messages = async (roomID) => {
    const { data } = await axios.get(
        `http://localhost:8080/msg/${roomID}`
    );
    return data;
}

const getMembersByRoomId = async (roomID) => {
    const { data } = await axios.get(
        `http://localhost:8080/room/${roomID}`
    );
    return data;
}