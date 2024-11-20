import * as tf from '@tensorflow/tfjs';
import { pipeline } from '@huggingface/transformers';

document.getElementById('send').addEventListener('click', async () => {
    const input = document.getElementById('input').value;
    if (input.trim() === '') return;

    const messageContainer = document.createElement('div');
    messageContainer.textContent = 'You: ' + input;
    document.getElementById('messages').appendChild(messageContainer);

    const model = await pipeline('text-generation', 'distilgpt2');

    const result = await model(input, { max_length: 50 });
    const output = result[0].generated_text;

    const replyContainer = document.createElement('div');
    replyContainer.textContent = 'AI: ' + output;
    document.getElementById('messages').appendChild(replyContainer);

    document.getElementById('input').value = '';
});
