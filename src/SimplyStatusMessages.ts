import { MessageType } from "./types/message.type.js";
import Helper from "./classes/helper.js";
import Info from "./models/info.js";

/**
 * SimplyStatusMessages
 */
class SimplyStatusMessages {
	/**
	 * Instance  of simply status messages
	 */
	private static instance: SimplyStatusMessages;

	/**
	 * Gets instance
	 * @returns instance
	 */
	public static getInstance(): SimplyStatusMessages {
		if (!this.instance) {
			this.instance = new SimplyStatusMessages();
		}

		return this.instance;
	}

	/**
	 * Creates an instance of simply status messages.
	 */
	private constructor() {
		let messageContainer = document.createElement("div");
		messageContainer = this.buildCss(messageContainer);
		messageContainer.className = "ssm_message_container";
		messageContainer.id = "ssm_message_container";
		document.body.appendChild(messageContainer);
	}

	/**
	 * Info  of simply status messages
	 */
	public static readonly info = new Info();

	/**
	 * Shows message
	 * @param message
	 * @param type
	 */
	private async show(message: string, type: MessageType) {
		const messageElement = this.renderMessage(message, type);
		const messageContainer = <HTMLDivElement>(
			document.getElementById("ssm_message_container")
		);
		messageContainer.appendChild(messageElement);
		await Helper.sleep(3000);
		messageContainer.removeChild(messageElement);
	}

	/**
	 * Renders message
	 * @param message
	 * @param type
	 * @returns
	 */
	private renderMessage(message: string, type: MessageType) {
		const messageElement = document.createElement("div");
		let prefix = "";

		switch (type) {
			case "success":
				prefix =
					'<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M21.05 33.1 35.2 18.95l-2.3-2.25-11.85 11.85-6-6-2.25 2.25ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>';
				break;
			case "error":
				prefix =
					'<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 34q.7 0 1.175-.475.475-.475.475-1.175 0-.7-.475-1.175Q24.7 30.7 24 30.7q-.7 0-1.175.475-.475.475-.475 1.175 0 .7.475 1.175Q23.3 34 24 34Zm-1.35-7.65h3V13.7h-3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"/></svg>';
				break;
			case "warning":
				prefix =
					'<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M2 42 24 4l22 38Zm5.2-3h33.6L24 10Zm17-2.85q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425Q22.7 34 22.7 34.65q0 .65.425 1.075.425.425 1.075.425Zm-1.5-5.55h3V19.4h-3Zm1.3-6.1Z"/></svg>';
				break;
			case "info":
				prefix =
					'<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.65 34h3V22h-3ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"/></svg>';
				break;
		}

		messageElement.innerHTML =
			prefix + "<b>-</b> <span>" + message + "</span>";
		messageElement.className = type + "_message ssm_message";
		messageElement.style.display = "flex";
		return messageElement;
	}

	/**
	 * Builds css
	 * @param element
	 * @returns css
	 */
	private buildCss(element: HTMLDivElement): HTMLDivElement {
		const css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = `
			.ssm_message_container {
				padding: 1rem;
				margin-bottom: 1rem;
				width: 30em;
				position: fixed;
				z-index: 2147483647;
				right: 0;
				top: 0;
			}
			.success_message {
				color: #4caf50;
				background-color: #e8f5e9;
			}
			.success_message svg {
				filter: invert(53%) sepia(84%) saturate(346%) hue-rotate(73deg) brightness(94%) contrast(85%);
			}
			.error_message {
				color: #f44336;
				background-color: #ffebee;
			}
			.error_message svg {
				filter: invert(40%) sepia(81%) saturate(1486%) hue-rotate(333deg) brightness(90%) contrast(115%);
			}
			.warning_message {
				color: #ff9800;
				background-color: #fffde7;
			}
			.warning_message svg {
				filter: invert(63%) sepia(57%) saturate(3351%) hue-rotate(1deg) brightness(104%) contrast(104%);
			}
			.info_message {
				color: #2196f3;
				background-color: #e3f2fd;
			}
			.info_message svg {
				filter: invert(48%) sepia(40%) saturate(1367%) hue-rotate(172deg) brightness(96%) contrast(99%);
			}
			.ssm_message svg {
				font-size: 3rem;
				margin-left: 0.5rem;
			}
			.ssm_message b {
				font-size: 1.5rem;
				margin-left: 0.7rem;
			}
			.ssm_message {
				display: flex !important;
				font-weight: lighter;
				font-size: 1.3rem;
				align-items: center;
				font-family: Courier New;
				margin-bottom: 1rem;
				padding: 0.5rem;
				border-radius: 0.25rem;
				width: 100%;
				right: 0;
				top: 0;
				bottom: 0;
				left: 0;
				box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
				opacity: 0.9;
			}
			.ssm_message span {
				flex: 1;
				margin-left: 1rem;
			}
			`;
		element.appendChild(css);
		return element;
	}

	/**
	 * Success message
	 * @param message
	 */
	public success(message: string) {
		this.show(message, "success");
	}

	/**
	 * Errors message
	 * @param message
	 */
	public error(message: string) {
		this.show(message, "error");
	}

	/**
	 * Warning message
	 * @param message
	 */
	public warning(message: string) {
		this.show(message, "warning");
	}

	/**
	 * Infos message
	 * @param message
	 */
	public info(message: string) {
		this.show(message, "info");
	}
}

export default { SimplyStatusMessages };
export { SimplyStatusMessages };
export { SimplyStatusMessages as ssm };
export { SimplyStatusMessages as M };
