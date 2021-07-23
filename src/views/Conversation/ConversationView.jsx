import React from 'react';
import { 
        Container, 
        Link,
        TextField
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

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
    receiveMessage();
    msg = '';
    document.getElementById('chatInput').value = '';
}

function receiveMessage(){
    const div = document.createElement('div');
    const chatWindow = document.getElementById('chatWindow');
    div.innerText = msg;
    chatWindow.appendChild(div);

}

class ConversationView extends React.Component {
    render(){
        return (
            <div>
                <Container>
                    <div id="chatWindow"></div>
                    <form id="chatForm" onSubmit={(e) => {submitMsg(e);}} autoComplete="off">
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