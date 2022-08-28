import { M } from "../dist/src/SimplyStatusMessages.js";

const body = document.body;

const fireInfoContainer = document.createElement("div");
const fireButton = document.createElement("button");
const message = "Lorem Ipsum is simply dummy text ";

fireButton.classList.add("btn", "btn-primary");
fireButton.innerText = "Fire";
fireButton.addEventListener("click", () => {
	const msg = M.getInstance();
	msg.success(message);
	msg.error(message);
	msg.info(message);
	msg.warning(message);
})

fireInfoContainer.appendChild(fireButton);
body.appendChild(fireInfoContainer);
