import { T } from "../dist/src/SimpleToastMessages.js";

const body = document.body;

const fireInfoContainer = document.createElement("div");
const fireButton = document.createElement("button");
const message = "Lorem Ipsum is simply dummy text ";

fireButton.classList.add("btn", "btn-primary");
fireButton.innerText = "Fire";
fireButton.addEventListener("click", () => {
	const msg = T.getInstance();
	msg.success(message, 1000);
	msg.error(message);
	msg.info(message, 2000);
	msg.warning(message, 5000);
})

fireInfoContainer.appendChild(fireButton);
body.appendChild(fireInfoContainer);
