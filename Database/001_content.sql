-- Insert demo user
INSERT INTO users (username, email, password_hash)
VALUES ('demo', 'demo@chaticus.com', '$2b$10$7DfrUzY3zRPPZKiyuMzAcOM0Cg6MBPfKf7ZnOq3mgn5nE8/dzPgFa'); -- password = demo123

-- Insert demo messages for that user
INSERT INTO messages (user_id, content) VALUES
(1, 'Welcome to Chaticus!'),
(1, 'This is a demo message.'),
(1, 'Have a great day 👋');
