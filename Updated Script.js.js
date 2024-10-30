
// Dashboard Counters
let virusCount = 0;
let deletedCount = 0;
let botsCount = 0;

function updateDashboardCounters() {
    document.getElementById('virus-count').textContent = virusCount;
    document.getElementById('deleted-count').textContent = deletedCount;
    document.getElementById('bots-count').textContent = botsCount;
}

// Simulate virus, threat, and bot detection
function detectThreat() {
    virusCount++;
    deletedCount++;
    botsCount++;
    updateDashboardCounters();
    logAttack("Virus", "192.168.0.1");
}
setInterval(detectThreat, 10000); // Detect threat every 10 seconds

// Attack Log
function logAttack(type, ip) {
    const logBody = document.getElementById("attack-log-body");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${new Date().toLocaleTimeString()}</td><td>${type}</td><td>${ip}</td>`;
    logBody.appendChild(row);
}

// Basic Chatbot Functionality
const chatMessages = document.getElementById('chat-messages');
document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('chat-input').value;
    chatMessages.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    getChatbotResponse(userInput);
    document.getElementById('chat-input').value = '';
});

function getChatbotResponse(message) {
    let response;
    if (message.toLowerCase().includes("hello")) {
        response = "Hello! How can I assist you with your security needs?";
    } else {
        response = "I’m sorry, I didn’t understand that. Could you rephrase?";
    }
    chatMessages.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Mock confirmation message for form submission
    document.getElementById('contact-confirm').textContent = `Thank you for contacting us, ${name}. We’ll get back to you at ${email}.`;
});
