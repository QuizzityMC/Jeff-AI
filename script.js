document.getElementById('send').addEventListener('click', async () => {
    const input = document.getElementById('input').value;
    if (input.trim() === '') return;

    const messageContainer = document.createElement('div');
    messageContainer.textContent = 'You: ' + input;
    document.getElementById('messages').appendChild(messageContainer);

    try {
        const response = await fetch('https://api.cohere.ai/v1/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer VsFl8dFdI8j5oK72jGoCRjN3Gs7lCkBZ2xiR5MDK'
            },
            body: JSON.stringify({
                message: input,
                model: 'command-r-plus-08-2024',
                max_tokens: 100,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const replyContainer = document.createElement('div');
        replyContainer.textContent = 'AI: ' + data.message;
        document.getElementById('messages').appendChild(replyContainer);
    } catch (error) {
        console.error('Error:', error);
        const errorContainer = document.createElement('div');
        errorContainer.textContent = `Error: ${error.message}`;
        document.getElementById('messages').appendChild(errorContainer);
    }

    document.getElementById('input').value = '';
});
