import { useState } from "react"
import { useEffect } from "react/cjs/react.production.min";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

function ChatWindow(props) {

    //This may have state in the future. As of now, this component is not handling any data
    //Its children do, and they're responsible for fetching their own data.

    return (

        <div className="columns is-flex is-centered">
            <div className="box column is-vcentered is-three-quarters mt-5">
                <ChatMessages props={props}></ChatMessages>
                <ChatInput></ChatInput>
            </div>
        </div>

    );
}

export default ChatWindow;