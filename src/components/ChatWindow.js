import 'bulma/css/bulma.min.css';

function ChatWindow(props){

    return (
        <div className="columns is-centered">
            <div className='column box is-three-quarters'>
                <div>
                    <textarea className='textarea is-success' placeholder="Escribir..."/>
                    <input className='button is-pulled-right' type="submit"/>
                </div>
            </div>
        </div>
    );

}

export default ChatWindow;