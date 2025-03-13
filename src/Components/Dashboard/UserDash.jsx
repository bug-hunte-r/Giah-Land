import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('https://giah-land-websocket.onrender.com');

function UserDashboard() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const username = 'user1'; // Change this per user (e.g., from auth later)

  useEffect(() => {
    socket.emit('register', username);
    console.log('Registered as:', username);

    socket.on('message', (msg) => {
      console.log('Received message:', msg);
      setChat((prev) => [...prev, msg]);
    });

    return () => socket.off('message');
  }, []);

  const sendMessage = () => {
    const msg = { user: username, text: message };
    socket.emit('chatMessage', msg);
    setChat((prev) => [...prev, msg]);
    setMessage('');
  };

  return (
    <div>
      <h1>Your Dashboard</h1>
      <div>
        {chat.map((msg, i) => (
          <p key={i}>{msg.user}: {msg.text}</p>
        ))}
      </div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type to admin..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default UserDashboard;