const responses = {
    "hello": "Hello! How can I assist you with CDPs today?",
    "what is segment": "Segment is a CDP that collects, cleans, and controls customer data.",
    "what is mparticle": "mParticle is a CDP that connects customer data to marketing and analytics tools.",
    "what is lytics": "Lytics is a CDP that helps businesses personalize customer experiences.",
    "what is zeotap": "Zeotap is an enterprise CDP that enables brands to better understand and activate customer data.",
    "how to integrate segment": "To integrate Segment, use their API and follow the setup guide in their documentation.",
    "how to integrate mparticle": "mParticle integration involves setting up SDKs and event tracking for data collection.",
    "how to integrate lytics": "Lytics provides an API and event tracking features for seamless integration.",
    "how to integrate zeotap": "Zeotap integration requires configuring data sources and using their API.",
    "default": "I'm not sure about that. Please refer to the official CDP documentation."
};

function sendMessage() {
    let userInput = document.getElementById("user-input").value.toLowerCase();
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    chatBox.innerHTML += `<p><b>You:</b> ${userInput}</p>`;

    let botResponse = responses[userInput] || responses["default"];
    setTimeout(() => {
        chatBox.innerHTML += `<p><b>Bot:</b> ${botResponse}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    document.getElementById("user-input").value = "";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
