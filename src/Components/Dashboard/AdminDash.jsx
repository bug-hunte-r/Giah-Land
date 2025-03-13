import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('https://giah-land-websocket.onrender.com');

function AdminDash() {
  const [chats, setChats] = useState({});
  const [message, setMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    socket.emit('register', 'admin'); // Register as admin
    console.log('Registered as admin');

    socket.on('message', (msg) => {
      const { user, text } = msg;
      const timestamp = new Date().toISOString();
      setChats((prev) => {
        const userChat = prev[user] || [];
        return {
          ...prev,
          [user]: [...userChat, { user, text, timestamp }],
        };
      });
    });

    return () => socket.off('message');
  }, []);

  const sendMessage = () => {
    if (!selectedUser || !message.trim()) return;

    const msg = {
      user: 'admin',
      text: message,
      to: selectedUser,
      timestamp: new Date().toISOString(),
    };

    socket.emit('chatMessage', msg);
    setChats((prev) => ({
      ...prev,
      [selectedUser]: [...(prev[selectedUser] || []), msg],
    }));
    setMessage('');
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '30%', borderRight: '1px solid #ccc', overflowY: 'auto' }}>
        <h1 style={{ padding: '10px' }}>Admin Panel</h1>
        <h2 style={{ padding: '10px' }}>Chats</h2>
        {Object.keys(chats).length === 0 ? (
          <p>No chats yet, homie.</p>
        ) : (
          Object.keys(chats).map((userId) => (
            <button
              key={userId}
              onClick={() => setSelectedUser(userId)}
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                textAlign: 'left',
                background: selectedUser === userId ? '#e0e0e0' : 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {userId}
              <span style={{ fontSize: '12px', color: '#666' }}>
                {chats[userId].length > 0 && ` - ${chats[userId].slice(-1)[0].text.substring(0, 20)}...`}
              </span>
            </button>
          ))
        )}
      </div>
      <div style={{ width: '70%', padding: '20px' }}>
        {selectedUser ? (
          <>
            <h3>Chat with {selectedUser}</h3>
            <div
              style={{
                height: '70vh',
                overflowY: 'auto',
                border: '1px solid #ddd',
                padding: '10px',
                marginBottom: '10px',
              }}
            >
              {chats[selectedUser]?.map((msg, i) => (
                <p
                  key={i}
                  style={{
                    textAlign: msg.user === 'admin' ? 'right' : 'left',
                    background: msg.user === 'admin' ? '#dcf8c6' : '#f1f0f0',
                    padding: '8px',
                    margin: '5px 0',
                    borderRadius: '5px',
                    maxWidth: '60%',
                    display: 'inline-block',
                  }}
                >
                  <strong>{msg.user}:</strong> {msg.text}
                  <br />
                  <span style={{ fontSize: '10px', color: '#999' }}>
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </span>
                </p>
              ))}
            </div>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Reply..."
              style={{ width: '80%', padding: '5px' }}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} style={{ padding: '5px 10px' }}>
              Send
            </button>
          </>
        ) : (
          <p>Select a chat, fam.</p>
        )}
      </div>
    </div>
  );
}

export default AdminDash;