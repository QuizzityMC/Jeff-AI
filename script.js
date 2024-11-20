const responses = {
    "hello": "Hi there! How can I assist you today?",
    "how are you": "I'm just a bunch of code, but thanks for asking!",
    "what's your name": "I am your friendly AI chatbot!",
    "what can you do": "I can chat with you, provide information, and much more!"
    // Add thousands of other possible prompts and responses here
};

document.getElementById('send').addEventListener('click', () => {
    const input = document.getElementById('input').value.toLowerCase().trim();
    if (input === '') return;

    const messageContainer = document.createElement('div');
    messageContainer.textContent = 'You: ' + input;
    document.getElementById('messages').appendChild(messageContainer);

    const response = responses[input] || "I'm here to chat! Ask me anything!";
    
    const replyContainer = document.createElement('div');
    replyContainer.textContent = 'AI: ' + response;
    document.getElementById('messages').appendChild(replyContainer);

    document.getElementById('input').value = '';
});
