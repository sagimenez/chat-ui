import React, {useState, useEffect, useRef} from 'react';
import socketIOClient from 'socket.io-client';
require('dotenv').config();
var socketHost = process.env.SOCKET_HOST || 'localhost';
var socketPort = process.env.SOCKET_PORT || '3030';
//const endpoint = 'http://' + socketHost + ':' + socketPort;
const endpoint = 'http://localhost:3030';

export function ReceiveMessage(){
    const [chats, setChats] = useState([]);
    const [message, setMessage] = useState('');
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
            <h1>Message</h1>
            {chats.map(chat => (
                <div>{chat}</div>
            ))}
        </div>

    )
}