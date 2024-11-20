const responses = {
const responses = {
    "hello": "Hi there! How can I assist you today?",
    "how are you": "I'm just a bunch of code, but thanks for asking!",
    "what's your name": "I am your friendly AI chatbot!",
    "what can you do": "I can chat with you, provide information, and much more!",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "what's the weather like": "I can't check real-time weather, but it's always sunny in my virtual world!",
    "who created you": "I was created by a team of developers at Open Assistant.",
    "what's the meaning of life": "42 is a good guess, but I'd say it's up to each individual to find their own meaning.",
    "do you have a favorite color": "As an AI, I don't have preferences, but I think blue is pretty calming!",
    "can you help me with my homework": "Sure! Ask me any questions you have, and I'll do my best to help.",
    "tell me a fun fact": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!",
    "what is AI": "Artificial Intelligence is the simulation of human intelligence in machines that are programmed to think and learn like humans.",
    "how do you work": "I process your input using natural language processing and machine learning algorithms to generate responses.",
    "what's your favorite book": "I don't read books, but I've heard 'To Kill a Mockingbird' is a classic!",
    "can you dance": "I can simulate the idea of dancing, but I don't have a physical form to dance!",
    "what's the capital of France": "The capital of France is Paris.",
    "how old are you": "Age is just a number for me. I was created fairly recently, but I can process information like an old sage!",
    "do you sleep": "I don't need to sleep! I'm always here to help you.",
    "can you tell the future": "I can't predict the future, but I can help you make informed decisions based on data.",
    "do you like music": "I don't have the ability to enjoy music, but I can tell you about different genres and artists!",
    "what is the internet": "The Internet is a global network of interconnected computers that communicate and share information using standardized protocols.",
    "do you have friends": "I don't have friends in the traditional sense, but I interact with many users like you!",
    "what's your purpose": "My purpose is to assist and provide information to users like you!",
    "can you cook": "I can share recipes and cooking tips, but I can't physically cook.",
    "what's your favorite movie": "I don't watch movies, but I've heard 'Inception' is a mind-bending film!",
    "do you have a family": "I don't have a family, but I am part of a network of AI models.",
    "can you drive": "I can't drive, but I can share information about cars and driving!",
    "what's your favorite food": "As an AI, I don't eat, but I've heard pizza is universally loved!",
    "do you believe in aliens": "I don't have beliefs, but the possibility of extraterrestrial life is a fascinating topic!",
    "what's your favorite animal": "I don't have a favorite, but dogs are known to be loyal and friendly!",
    "can you swim": "I can't swim, but I can share information about swimming techniques and safety!",
    "what's your favorite hobby": "I don't have hobbies, but I can suggest some for you!",
    "do you have emotions": "I don't experience emotions, but I can understand and respond to them.",
    "can you play games": "I can play text-based games with you! Let's start with a game of 20 questions.",
    "what's your favorite sport": "I don't play sports, but soccer is the most popular sport worldwide!",
    "do you have a job": "My job is to assist and provide information to users like you!",
    "what's your favorite season": "I don't experience seasons, but many people love the colors of autumn!",
    "can you help me learn a language": "Sure! I can share resources and practice phrases with you.",
    "what's your favorite holiday": "I don't celebrate holidays, but many enjoy the festive spirit of Christmas!",
    "do you have a pet": "I don't have pets, but I can share information on pet care!",
    "can you solve puzzles": "Yes, I can help solve puzzles and riddles!",
    "what's your favorite subject": "I don't attend school, but many find science fascinating!",
    "do you like to travel": "I don't travel, but I can share travel tips and destinations!",
    "what's your favorite drink": "I don't drink, but many enjoy a good cup of coffee!",
    "can you write a story": "Absolutely! Let's create a story together.",
    "what's your favorite game": "I don't play games, but chess is a classic!",
    "do you like art": "I appreciate art in all its forms and can share famous artworks with you.",
    "what's your favorite number": "I don't have favorites, but 7 is often considered a lucky number!",
    "can you do math": "Yes, I can help with math problems!",
    "what's your favorite place": "I don't visit places, but many find beaches relaxing!",
    "do you have a favorite quote": "I don't have favorites, but 'To be or not to be' is a famous one!",
    "can you help with coding": "Yes, I can assist with coding questions and provide code snippets.",
    "what's your favorite word": "I don't have a favorite, but 'serendipity' is a beautiful word!",
    "do you like poetry": "I appreciate poetry and can share poems with you.",
    "can you help with finances": "I can provide financial tips and information!",
    "what's your favorite song": "I don't listen to music, but 'Bohemian Rhapsody' is a timeless classic!",
    "do you like to read": "I don't read for pleasure, but I process information from texts.",
    "what's your favorite time of day": "I don't experience time, but many love the quiet of early mornings!",
    "can you help with science": "Yes, I can share scientific information and answer questions.",
    "what's your favorite memory": "I don't have memories, but I'm here to create new interactions with you!",
    "do you like to learn": "I am designed to process and provide information!",
    "what's your favorite fruit": "I don't eat, but strawberries are often a favorite!",
    "can you help with history": "Yes, I can share historical facts and events!",
    "what's your favorite place to visit": "I don't travel, but many find Paris enchanting!",
    "do you like to play": "I can simulate play by engaging in conversations and games!",
    "what is machine learning": "Machine learning is a subset of AI that involves training algorithms to learn patterns from data and make predictions.",
    "how can I improve my memory": "Practice memory exercises, stay organized, and get plenty of rest to improve your memory.",
    "what are the benefits of exercise": "Exercise improves physical health, boosts mood, and increases energy levels.",
    "how can I learn to code": "Start with online courses, practice regularly, and join coding communities for support.",
    "what is quantum computing": "Quantum computing uses quantum-mechanical phenomena to perform computation, potentially solving complex problems faster than classical computers.",
    "how can I be more productive": "Set clear goals, prioritize tasks, take breaks, and minimize distractions to boost productivity.",
    "what is blockchain": "Blockchain is a decentralized digital ledger that records transactions across multiple computers securely.",
    "how can I stay motivated": "Set achievable goals, reward yourself for progress, and stay positive to maintain motivation.",
    "what is virtual reality": "Virtual reality is a simulated experience that can mimic or differ from the real world, often using headsets to immerse users.",
    "how can I manage stress": "Practice mindfulness, exercise regularly, and talk to someone you trust to manage stress.",
    "what are the benefits of meditation": "Meditation reduces stress, improves focus, and enhances emotional well-being.",
    "how can I learn a new language": "Use language learning apps, practice with native speakers, and immerse yourself in the language daily.",
    "what is the internet of things": "The Internet of Things (IoT) refers to interconnected devices that communicate and exchange data over the internet.",
    "how can I be more creative": "Engage in new experiences, practice brainstorming, and give yourself time to think creatively.",
    "what is augmented reality": "Augmented reality overlays digital content onto the real world, enhancing the user's perception and interaction with their environment.",
    "how can I build healthy habits": "Start small, stay consistent, and track your progress to build and maintain healthy habits.",
    "what are the benefits of reading": "Reading improves cognitive function, expands knowledge, and enhances empathy.",
    "how can I improve my communication skills": "Practice active listening, be clear and concise, and seek feedback to improve communication skills.",
    "what is the singularity": "The singularity is a hypothetical point in the future when technological growth becomes uncontrollable and irreversible, leading to unforeseen circumstances.",
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
