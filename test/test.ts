import { T } from "../dist/src/SimpleToastMessages.js";

const body = document.body;

const fireInfoContainer = document.createElement("div");
const fireButton = document.createElement("button");
const message = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr:`;

fireButton.classList.add("btn", "btn-primary");
fireButton.innerText = "Fire";
fireButton.addEventListener("click", () => {
	const msg = T.getInstance();
	msg.success(message + crypto.randomUUID(), 1000);
	msg.error(
		message +
			crypto.randomUUID() +
			crypto.randomUUID() +
			crypto.randomUUID() +
			crypto.randomUUID() +
			crypto.randomUUID() +
			crypto.randomUUID() +
			crypto.randomUUID() +
			crypto.randomUUID()
	);
	msg.info(message + crypto.randomUUID(), 2000);
	msg.warning(message + crypto.randomUUID(), 5000);
});

fireInfoContainer.appendChild(fireButton);
body.appendChild(fireInfoContainer);
