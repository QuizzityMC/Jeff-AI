let model;

document.getElementById('send').addEventListener('click', async () => {
    const input = document.getElementById('input').value;
    if (input.trim() === '') return;

    const messageContainer = document.createElement('div');
    messageContainer.textContent = 'You: ' + input;
    document.getElementById('messages').appendChild(messageContainer);

    if (!model) {
        model = await qna.load();  // Load the QnA model
    }

    const answers = await model.findAnswers(input, document.body.innerText);
    let response = "I'm here to listen!";
    if (answers && answers.length > 0) {
        response = answers[0].text;
    }

    const replyContainer = document.createElement('div');
    replyContainer.textContent = 'AI: ' + response;
    document.getElementById('messages').appendChild(replyContainer);

    document.getElementById('input').value = '';
});
