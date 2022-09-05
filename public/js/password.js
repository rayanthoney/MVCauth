// Password show/hide Icon 
const showPassword = document.querySelector("#show-password")
const passwordField = document.querySelector("#password")

// Event listener for the show/hide password w/Icon
showPassword.addEventListener("click", function() {
    this.classList.toggle("fa-eye")
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password"
    passwordField.setAttribute("type", type)
})
