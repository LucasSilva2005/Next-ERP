const toggleBtn = document.getElementById("toggleBtn");
const mainContainer = document.getElementById("mainContainer");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

let isLogin = false;

toggleBtn.addEventListener("click", () => {
  isLogin = !isLogin;
  mainContainer.classList.toggle("active");

  if (isLogin) {
    toggleBtn.innerText = "Cadastrar";
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  } else {
    toggleBtn.innerText = "Login";
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  }
});
