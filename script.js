let model;

document.getElementById('send').addEventListener('click', async () => {
    const input = document.getElementById('input').value;
    if (input.trim() === '') return;

    const messageContainer = document.createElement('div');
    messageContainer.textContent = 'You: ' + input;
    document.getElementById('messages').appendChild(messageContainer);

    if (!model) {
        model = await toxicity.load(0.9);  // Load the toxicity model
    }

    const predictions = await model.classify([input]);
    let response = "I'm here to listen!";
    if (predictions.some(prediction => prediction.results[0].match)) {
        response = "Let's keep the conversation positive!";
    }

    const replyContainer = document.createElement('div');
    replyContainer.textContent = 'AI: ' + response;
    document.getElementById('messages').appendChild(replyContainer);

    document.getElementById('input').value = '';
});
