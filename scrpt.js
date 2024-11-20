document.getElementById('send').addEventListener('click', async () => {
    const input = document.getElementById('input').value;
    if (input.trim() === '') return;

    const messageContainer = document.createElement('div');
    messageContainer.textContent = 'You: ' + input;
    document.getElementById('messages').appendChild(messageContainer);

    try {
        const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            body: JSON.stringify({
                inputs: input
            })
        });
        const data = await response.json();

        const replyContainer = document.createElement('div');
        replyContainer.textContent = 'AI: ' + data[0].generated_text;
        document.getElementById('messages').appendChild(replyContainer);
    } catch (error) {
        console.error('Error:', error);
        const errorContainer = document.createElement('div');
        errorContainer.textContent = 'Error: Could not retrieve response';
        document.getElementById('messages').appendChild(errorContainer);
    }

    document.getElementById('input').value = '';
});
