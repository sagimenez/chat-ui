import React from 'react';//, {useState, useEffect, useRef} from 'react';
// import socketIOClient from 'socket.io-client';
import './styles.scss';
require('dotenv').config();
// var socketHost = process.env.SOCKET_HOST || 'localhost';
// var socketPort = process.env.SOCKET_PORT || '3030';
//const endpoint = 'http://' + socketHost + ':' + socketPort;
// const endpoint = 'http://192.168.0.8:3030';
// const endpoint = 'http://localhost:3030'

/*
export function ReceiveMessage(){
    const [chats, setChats] = useState([]);
    const socketClientRef = useRef();

    useEffect(() => {
        const client = socketIOClient(endpoint);

        client.on('connect', () => {
            console.log('Connected');
        })
    
        client.on('disconnect', () => {
            console.log('Disconnected');
        })
    
        client.on('chat', message => {
            setChats(prevChats => [...prevChats, message]);
        });
    
        socketClientRef.current = client;
        return () => {
            client.removeAllListeners()
          }

    }, []);
    
    return (
        <div>
            <h1 className="conversation-bubble">Message</h1>
            {chats.map(chat => (
                <div key={chat} className="conversation-bubble">{chat}</div>
            ))}
        </div>
    )
}
*/

export function ReceiveMessage() {
    // var newId = Math.random().toString(36).substr(2,9);
    const messages = [
        {
            msgId: "000000000",
            msg: '000000000',
            sender: 1,
            quoteId: null
        },
        {
            msgId: "000000001",
            msg: '000000001',
            sender: 2,
            quoteId: null
        },
        {
            msgId: "000000002",
            msg: '000000002',
            sender: 1,
            quoteId: null
        },
        {
            msgId: "000000003",
            msg: '000000003',
            sender: 2,
            quoteId: null
        },
        {
            msgId: "000000004",
            msg: '000000004',
            sender: 1,
            quoteId: null
        },
        {
            msgId: "000000005",
            msg: '000000005',
            sender: 2,
            quoteId: null
        },
        {
            msgId: "000000006",
            msg: '000000006',
            sender: 1,
            quoteId: null
        },
        {
            msgId: "000000007",
            msg: '000000007',
            sender: 2,
            quoteId: null
        },
        {
            msgId: "000000008",
            msg: '000000008',
            sender: 1,
            quoteId: null
        },
        {
            msgId: "000000009",
            msg: '000000009',
            sender: 2,
            quoteId: null
        },
        {
            msgId: "000000010",
            msg: '000000010',
            sender: 1,
            quoteId: null
        }

    ]

    return (
        <div className="conversation-msg-container">
            <h1 className="conversation-bubble">Message</h1>
            {messages.map(message => (
                <div key={message.msgId} className="conversation-bubble-receive">
                    <div className="conversation-msg-receive">{message.msg}</div>
                </div>
            ))}
        </div>
    )
}
