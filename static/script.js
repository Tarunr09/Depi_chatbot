/*const form = document.getElementById('chat-form');
const userInput = document.getElementById('user_input');
const chatBox = document.querySelector('.chat-box');
const submitButton = document.querySelector('.send-button');
const loadingElement = document.getElementById("loading");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userMessage = userInput.value;
  submitButton.disabled = true;
  // Show loading indicator
  showLoading();
  const message = document.createElement('div');
  message.classList.add('message');
  message.innerHTML = `
    <img src="static/user_avatar.jpg" alt="User Avatar" class="user-image">
    <p>${userMessage}</p>
  `;
  chatBox.appendChild(message);
  // Do something that takes some time, such as fetching data from a server.
  setTimeout(() => {
    fetch('/chatbot', {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => response.json())
    .then(data => {
      const message = document.createElement('div');
      message.classList.add('message');
      message.innerHTML = `
        <img src="static/chatbot.jpg" alt="Chatbot Avatar" class="chatbot-image">
        <p>${data.response}</p>
      `;
      chatBox.appendChild(message);
      // Hide loading indicator
      hideLoading();
      // Re-enable the submit button
      submitButton.disabled = false;
      // Scroll down to the last message
      chatBox.scrollTop = chatBox.scrollHeight;
      userInput.value = '';
    });
  }, 1000);
});

function showLoading() {
  if (loadingElement) {
    loadingElement.textContent = "...";
  }
}

function hideLoading() {
  loadingElement.textContent = "";
}*/

const form = document.getElementById('chat-form');
const userInput = document.getElementById('user_input');
const chatBox = document.querySelector('.chat-box');
const submitButton = document.querySelector('.send-button');
const loadingElement = document.getElementById("loading");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userMessage = userInput.value;
  submitButton.disabled = true;
  // Show loading indicator
  showLoading();
  const message = document.createElement('div');
  message.classList.add('message');
  message.innerHTML = `
    <img src="static/cropped.jpg" alt="User Avatar" class="user-image">
    <p>${userMessage}</p>
  `;
  chatBox.appendChild(message);
  // Do something that takes some time, such as fetching data from a server.
  setTimeout(() => {
    fetch('/chatbot', {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => response.json())
    .then(data => {
      const message = document.createElement('div');
      message.classList.add('message');
      message.innerHTML = `
        <img src="static/chatbot.jpg" alt="Chatbot Avatar" class="chatbot-image">
        <p>${data.response}</p>
      `;
      chatBox.appendChild(message);
      // Hide loading indicator
      hideLoading();
      // Re-enable the submit button
      submitButton.disabled = false;
      // Scroll down to the last message
      message.scrollIntoView({ behavior: 'smooth' });
      userInput.value = '';
    });
  }, 1000);
});

function showLoading() {
  if (loadingElement) {
    loadingElement.textContent = "...";
  }
}

function hideLoading() {
  loadingElement.textContent = "";
}