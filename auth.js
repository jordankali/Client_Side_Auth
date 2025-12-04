// Hardcoded credentials 
const VALID_USERNAME = "h4k-it_user";
const VALID_PASSWORD = "9IFWEKezF5G1gGRQ";

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("username", username);
      window.location.href = "welcome.html";
    } else {
      document.getElementById("errorMsg").classList.remove("hidden");
    }
  });
}

// Welcome page
const usernameDisplay = document.getElementById("usernameDisplay");
if (usernameDisplay) {
  const authenticated = localStorage.getItem("authenticated");
  const username = localStorage.getItem("username");

  if (!authenticated || !username) {
    window.location.href = "index.html";
  } else {
    usernameDisplay.textContent = username;
  }
}

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });
}

