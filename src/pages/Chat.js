import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import {
    useQuery,
    useQueryClient,
    QueryClient,
} from "react-query";
import { useState } from "react" 

function Chat(){
    
    const queryClient = useQueryClient();
    const [props, setProps] = useState([]);
    return (
            <ChatWindow props = {props}></ChatWindow>
    );
}

export default Chat;