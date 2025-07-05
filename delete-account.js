function logsing() {
    const btn = document.getElementById('logoutBtn');

    // Show a simple loading message
    btn.disabled = true;
    btn.innerHTML = 'Deleting...';

    setTimeout(() => {
      // Clear session storage
      sessionStorage.removeItem('loggedIn');
      sessionStorage.removeItem('loggedInUser');

      // Clear local storage
      localStorage.removeItem('signup-success');
      localStorage.removeItem('userUsername');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userPassword');
      localStorage.removeItem('userAvatar');
      localStorage.removeItem('savedPatternCode');

      // Redirect
      window.location.href = 'delete-account.html';
    }, 2000); // 2 seconds delay
  }
  

window.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('userUsername') || "Not Found";
    document.getElementById("usernameDisplay").textContent = username;
  });