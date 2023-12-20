const form = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
	e.preventDefault();

	if (nameInput.value === "" || email.value === "") {
		msg.classList.add("error");
		msg.innerHTML = "Please enter all fields";

		setTimeout(() => {
			msg.remove();
		}, 3000);
	} else {
		const li = document.createElement("li");
		li.appendChild(document.createTextNode(`${nameInput.value} : ${email.value}`));

		userList.appendChild(li);

		nameInput.value = "";
		email.value = "";
	}
}
