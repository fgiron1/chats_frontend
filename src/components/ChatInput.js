
function ChatInput() {

    

    return (

        <div className='column is-four-fifths is-flex is-flex-direction-row'>
            <form>
                <textarea className='textarea has-fixed-size' rows="3" placeholder="Escribir..." />
                <input className='button is-flex' type="submit" value="Enviar" />
            </form>
        </div>
    );

}

export default ChatInput;