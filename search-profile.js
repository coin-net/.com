  const storedImage = localStorage.getItem("capturedFace");

    if (storedImage) {
      document.getElementById("resultImg").src = storedImage;
    } else {
      document.getElementById("resultImg").alt = "loading profile";
    }


  const usernameDisplay = document.getElementById('usernameDisplay');
  const emailDisplay = document.getElementById('emailDisplay');
  const passwordDisplay = document.getElementById('passwordDisplay');

  window.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('userUsername') || 'Not found';
    const email = localStorage.getItem('userEmail') || 'Not found';
    const password = localStorage.getItem('userPassword') || 'Not found';

    usernameDisplay.textContent = username;
    emailDisplay.textContent = email;
    passwordDisplay.textContent = password;
  });