import { useQueryClient } from "react-query";
import ChatMessages from "../components/ChatMessages";
import MemberList from "../components/MemberList";
import ChatInput from "../components/ChatInput";

function Chat(){
    
    const queryClient = useQueryClient();

    return (
        <div>
            <ChatInput></ChatInput>
            <ChatMessages></ChatMessages>
            <MemberList></MemberList>
         </div>
    );
}

export default Chat;