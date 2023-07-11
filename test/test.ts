import { PositionEnum, T } from "../dist/src/SimpleToastMessages.js";

const body = document.body;

const fireInfoContainer = document.createElement("div");
const fireButton = document.createElement("button");
const message = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr:`;

fireButton.classList.add("btn", "btn-primary");
fireButton.innerText = "Fire";
fireButton.addEventListener("click", () => {
	const msg = T.getInstance();
	msg.success(message, {
		timeOut: 1000,
		position: PositionEnum.TOP_LEFT,
	});
	msg.error(message);
	msg.info(message, {
		timeOut: 3000,
		position: PositionEnum.BOTTOM_LEFT,
		opacity: 0.5,
	});
	msg.warning(message, {
		timeOut: 5000,
		position: PositionEnum.BOTTOM_CENTER,
		opacity: 0.8,
	});
	msg.warning(message, {
		timeOut: 5000,
		position: PositionEnum.TOP_CENTER,
		opacity: 0.5,
	});
});

fireInfoContainer.appendChild(fireButton);
body.appendChild(fireInfoContainer);
