const chatbotHeader = document.getElementById("chatbot-header");
const chatbotBody = document.getElementById("chatbot-body");
const chatInput = document.getElementById("chat-input");
const sendMessageBtn = document.getElementById("send-message");
const chatMessages = document.getElementById("chat-messages");
const toggleChatBtn = document.getElementById("toggle-chat");

// Toggle chatbot visibility
let isChatOpen = true;
toggleChatBtn.addEventListener("click", () => {
  if (isChatOpen) {
    chatbotBody.style.display = "none";
    toggleChatBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
  } else {
    chatbotBody.style.display = "flex";
    toggleChatBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  }
  isChatOpen = !isChatOpen;
});

function sendMessage() {
  const message = chatInput.value.trim();
  if (message === "") return;

  // Add user message to chat
  addMessage(message, "user");
  chatInput.value = "";

  // Process the message and get a response
  const response = processMessage(message);

  // Simulate typing delay
  setTimeout(() => {
    addMessage(response, "bot");
    // Scroll to bottom of chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);
}

// Add message to chat
function addMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(
    sender === "user" ? "user-message" : "bot-message"
  );
  messageElement.innerHTML = `<p>${message}</p>`;
  chatMessages.appendChild(messageElement);

  // Scroll to bottom of chat
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Process message and return response
function processMessage(message) {
  message = message.toLowerCase();

  // Check for keywords and return appropriate responses
  if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hey")
  ) {
    return "Hello! I'm your Career Advisor. How can I help you today?";
  } else if (
    message.includes("salary") ||
    message.includes("pay") ||
    message.includes("money")
  ) {
    return "Salaries vary widely by profession, location, and experience. Software engineers typically earn $75,000-$160,000, while healthcare professionals like physicians can earn $150,000-$300,000. What specific career are you interested in?";
  } else if (
    message.includes("computer science") ||
    message.includes("programming") ||
    message.includes("software")
  ) {
    return "Computer Science is a great field with many opportunities! Software Engineers, Data Scientists, and Cybersecurity Analysts are in high demand with strong salaries and job satisfaction. Would you like to know more about a specific role?";
  } else if (
    message.includes("business") ||
    message.includes("marketing") ||
    message.includes("finance")
  ) {
    return "Business careers offer diverse paths! Marketing Managers, Financial Analysts, and Management Consultants are popular choices. These roles typically require strong analytical and communication skills. What aspect of business interests you most?";
  } else if (
    message.includes("healthcare") ||
    message.includes("medical") ||
    message.includes("doctor")
  ) {
    return "Healthcare offers rewarding careers helping others! Physicians, Nurses, and Physical Therapists are always in demand. These careers typically require specialized education but offer good job security. Would you like details about a specific healthcare role?";
  } else if (message.includes("engineering") || message.includes("engineer")) {
    return "Engineering is a diverse field with many specializations! Civil, Mechanical, Electrical, and Aerospace Engineers all apply scientific principles to solve real-world problems. These careers typically require strong math and science skills. Which engineering field interests you?";
  } else if (
    message.includes("art") ||
    message.includes("design") ||
    message.includes("creative")
  ) {
    return "Creative fields like Graphic Design, UX Design, and Animation allow you to express yourself while solving problems! These careers combine artistic talent with technical skills. The job market can be competitive, but there's growing demand for digital designers. What creative area interests you most?";
  } else if (
    message.includes("education") ||
    message.includes("teaching") ||
    message.includes("teacher")
  ) {
    return "Education careers are incredibly impactful! Teachers, School Counselors, and Education Administrators shape future generations. These roles typically require patience, communication skills, and a passion for helping others learn. What age group or educational role interests you?";
  } else if (
    message.includes("skills") ||
    message.includes("learn") ||
    message.includes("prepare")
  ) {
    return "Developing both technical and soft skills is important for any career! Technical skills vary by field, but soft skills like communication, problem-solving, and adaptability are universally valuable. Consider internships, projects, and certifications to build your resume. What specific career are you preparing for?";
  } else if (message.includes("thank")) {
    return "You're welcome! Feel free to ask if you have any other questions about careers or education paths.";
  } else {
    return "That's an interesting question about careers! To give you the best advice, could you tell me more about your interests, skills, or the specific field you're considering?";
  }
}

// Event listeners
sendMessageBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

setTimeout(() => {
  addMessage(
    "Hi there! I'm your Career Advisor. Ask me anything about careers, majors, or job prospects!",
    "bot"
  );
}, 500);
