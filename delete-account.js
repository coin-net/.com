function logsing() {
  // Remove session storage data
  sessionStorage.removeItem('loggedIn');
  sessionStorage.removeItem('loggedInUser');

  // Remove local storage data
  localStorage.removeItem('signup-success');
  localStorage.removeItem('userUsername');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userPassword');

  // Redirect to delete account confirmation or landing page
  window.location.href = 'delete-account.html'; // Adjust path if needed
}


window.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('userUsername') || "Not Found";
    document.getElementById("usernameDisplay").textContent = username;
  });
