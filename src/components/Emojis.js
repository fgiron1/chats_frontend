import React, { useState } from 'react'

function Emojis(){

    const [pickedEmoji, setPickedEmoji] = useState(null);

    return(

        <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-content">

            </div>
            <button className="modal-close is-small" aria-label="close"></button>
        </div>

    );

}