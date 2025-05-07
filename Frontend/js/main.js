const API_BASE = '/api';
let token = localStorage.getItem('token') || null;

// Register
async function register(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    try {
        const res = await fetch(`${API_BASE}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        if (res.ok) {
            alert('Registered successfully! Now login.');
        } else {
            const error = await res.json();
            alert(`Registration failed: ${error.error || 'Unknown error'}`);
        }
    } catch (err) {
        console.error('Registration error:', err);
        alert('Registration failed: Network or server error');
    }
}

// Login
async function login(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const res = await fetch(`${API_BASE}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (res.ok) {
            const data = await res.json();
            token = data.token;
            localStorage.setItem('token', token);
            document.getElementById('auth').style.display = 'none';
            document.getElementById('chatArea').style.display = 'block';
            load();
        } else {
            const error = await res.json();
            alert(`Login failed: ${error.error || 'Invalid credentials'}`);
        }
    } catch (err) {
        console.error('Login error:', err);
        alert('Login failed: Network or server error');
    }
}

// Send message
async function send() {
    const msg = document.getElementById('msg').value;
    if (!msg.trim()) return;

    try {
        const res = await fetch(`${API_BASE}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ content: msg })
        });

        if (res.ok) {
            document.getElementById('msg').value = '';
            resizeTextArea();
            load();
        } else {
            const error = await res.json();
            alert(`Message failed: ${error.error || 'Unknown error'}`);
        }
    } catch (err) {
        console.error('Send error:', err);
        alert('Message sending failed.');
    }
}

// Load messages
async function load() {
    try {
        const res = await fetch(`${API_BASE}/messages`);
        if (!res.ok) {
            console.error('Failed to fetch messages:', res.status);
            return;
        }

        const data = await res.json();
        const list = document.getElementById('chat');
        if (!list) return;

        list.innerHTML = '';

        data.forEach(msg => {
            const li = document.createElement('li');
            
            // Fallback for missing or invalid date
            let localTime = '[unknown time]';
            if (msg.created_at && typeof msg.created_at === 'string') {
                try {
                    const parsedDate = new Date(msg.created_at);
                    if (!isNaN(parsedDate.getTime())) {
                        localTime = parsedDate.toLocaleString();
                    }
                } catch (dateErr) {
                    console.warn('Invalid date format:', msg.created_at);
                }
            }

            const formattedContent = (msg.content || '').replace(/\n/g, '<br>');
            const username = msg.username || 'Unknown';

            li.innerHTML = `[${localTime}] <strong>${username}</strong>:<br>${formattedContent}`;
            list.appendChild(li);
        });

        list.scrollTop = list.scrollHeight;
    } catch (err) {
        console.error('Loading messages failed:', err);
    }
}

// Resize textarea
function resizeTextArea() {
    const textarea = document.getElementById('msg');
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
}

// Event bindings
document.getElementById('loginForm').addEventListener('submit', login);
document.getElementById('registerForm').addEventListener('submit', register);
document.getElementById('msg').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        if (e.shiftKey) return;
        e.preventDefault();
        send();
    }
});
document.getElementById('msg').addEventListener('input', resizeTextArea);
