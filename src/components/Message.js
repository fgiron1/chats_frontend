import { useState } from "react";

function Message(){

    const [message, setMessage] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non dui eros. Vestibulum vitae arcu nunc. Donec non auctor orci. Integer non purus fermentum erat dapibus tincidunt quis ac nisl. ");
    
    return(

        <span className="tag is-link is-light is-medium">
            {message}
        </span>

    );

}


export default Message;