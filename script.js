const OPENAI_API_KEY = "sk-proj-w6uvJF-FgSXe8hloq4y8OfDFoNGMNYioag-zmzs0xC5IgV-ckCrd3wbDqOZyCTw38jongCnXzT3BlbkFJjObA0fFhc_BroozEcjX9IqJuHu6X9fO5VLeKg5JBcUCSRaYyvaf09PZjO_hw-mdw5Cqu-8zQA"; // Replace with your API key

async function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    let chatBox = document.getElementById("chat-box");

    // Show user message
    chatBox.innerHTML += `<div class="user-message"><b>You:</b> ${userInput}</div>`;

    document.getElementById("user-input").value = "";

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userInput }]
        })
    });

    const data = await response.json();
    let botReply = data.choices[0].message.content;

    // Show bot message
    chatBox.innerHTML += `<div class="bot-message"><b>Bot:</b> ${botReply}</div>`;

    chatBox.scrollTop = chatBox.scrollHeight;
}
