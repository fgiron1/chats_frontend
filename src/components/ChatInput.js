import 'bulma/css/bulma.min.css';
import { useState } from 'react';

function ChatInput(){

    const [inputMsg, setInputMsg] = useState(null);



    return (

        <div className='column is-four-fifths is-flex is-flex-direction-row'>
            <form onSubmit={handleSubmit}>
                <textarea className='textarea has-fixed-size' rows = "3" placeholder="Escribir..."/>
                <input className='button is-flex' type="submit" value="Enviar"/>
            </form>
        </div>
    );


    async function handleSubmit(event){

        //Llamar a endpoint con el mensaje

        //Se pone la caja vacía de nuevo
        setInputMsg("");

        //Le pasa a ChatMessages un nuevo mensaje

    }

}

export default ChatInput;