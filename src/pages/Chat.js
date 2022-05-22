import { useQueryClient } from "react-query";
import ChatMessages from "../components/ChatMessages";
import MemberList from "../components/MemberList";
import ChatInput from "../components/ChatInput";
import React from "react";

function Chat(){
    
    const queryClient = useQueryClient();

    return (
        <div className="columns">
            <div className="columns column is-offset-2 is-8">
                <div className="column is-centered">
                    <ChatMessages></ChatMessages>
                    <ChatInput></ChatInput>
                </div>
                <div className="column is-centered is-one-quarter">
                    <MemberList></MemberList>
                </div>
            </div>
         </div>
    );
}

export default Chat;