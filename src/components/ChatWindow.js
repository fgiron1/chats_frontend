import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

function ChatWindow(props){

    const[integrantesList, setIntegrantesList] = useState([]);

    return(

        <div className="columns is-flex is-centered">
            <div className="box column is-vcentered is-three-quarters mt-5">
                <ChatMessages integrantes = {integrantesList}></ChatMessages>
                <ChatInput></ChatInput>
            </div>
        </div>

    );
}

export default ChatWindow;