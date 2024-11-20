document.getElementById('send').addEventListener('click', async () => {
    const input = document.getElementById('input').value;
    if (input.trim() === '') return;

    const messageContainer = document.createElement('div');
    messageContainer.textContent = 'You: ' + input;
    document.getElementById('messages').appendChild(messageContainer);

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-1234qrstuvwxabcd1234qrstuvwxabcd1234qrst'
            },
            body: JSON.stringify({
                prompt: input,
                max_tokens: 150
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const replyContainer = document.createElement('div');
        replyContainer.textContent = 'AI: ' + data.choices[0].text;
        document.getElementById('messages').appendChild(replyContainer);
    } catch (error) {
        console.error('Error:', error);
        const errorContainer = document.createElement('div');
        errorContainer.textContent = `Error: ${error.message}`;
        document.getElementById('messages').appendChild(errorContainer);
    }

    document.getElementById('input').value = '';
});
