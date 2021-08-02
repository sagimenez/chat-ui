import React from 'react';
import { 
        Container, 
        Link,
        TextField
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { emitMessage} from '../../services/socketIO/socketIO';
import { ReceiveMessage } from './ReceiveMessage';

var msg = '';

let submitMsg = (e) => {
    e.preventDefault();
    sendMessage();
}

let submitMessage = (e) => {
    sendMessage();
}

let onChangeHandler = (e) => {
    msg = e.target.value;
}

function sendMessage(){
    emitMessage(msg);
    msg = '';
    document.getElementById('chatInput').value = '';
}




class ConversationView extends React.Component {
    render(){
        return (
            <div>
                <Container>
                    <form id="chatForm" onSubmit={(e) => {submitMsg(e);}} autoComplete="off">
                        <ReceiveMessage />
                        <TextField id="chatInput" onChange={(e) =>{onChangeHandler(e)}} />
                        <Link onClick={(e) => {submitMessage(e)}}>
                            <SendIcon />
                        </Link>
                    </form>
                </Container>
            </div>
        )
    }
}



export default ConversationView