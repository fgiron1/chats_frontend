import ChatWindow from "../components/MemberList";
import { useQueryClient } from "react-query";
import { useState } from "react" 

function Chat(){
    
    const queryClient = useQueryClient();
    const [props, setProps] = useState([]);

    return (
            <ChatWindow props = {props}></ChatWindow>
    );
}

export default Chat;