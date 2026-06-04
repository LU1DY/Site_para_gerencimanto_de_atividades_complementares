const btnIconEye = document.querySelector(".input-action");
const openEye = document.getElementById("open-eye");
const closeEye = document.getElementById("eye-close");

const inputSenha = document.getElementById("senha");

// Altera o ícone de olho, mostrando se a senha está visível
function toggleEye() {
	if (closeEye.classList.contains("display-none")) {
		closeEye.classList.remove("display-none");
		openEye.classList.add("display-none");
	} else {
		closeEye.classList.add("display-none");
		openEye.classList.remove("display-none");
	}
}

// Altera o atributo type do input, permitindo que vejamos a senha inserida no campo de input de senha
function toggleVisibilitypassword() {
	const typePassword =
		inputSenha.getAttribute("type") === "password" ? "text" : "password";
	inputSenha.setAttribute("type", typePassword);
}

btnIconEye.addEventListener("click", toggleEye);
btnIconEye.addEventListener("click", toggleVisibilitypassword);
