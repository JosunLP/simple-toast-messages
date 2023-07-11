import { MessageType } from "./types/message.type.js";
import Helper from "./classes/helper.js";
import Info from "./models/info.js";
import { ToastSettingsType } from "./types/settings.type.js";
import { MessageEnum } from "./enums/message.enum.js";
import { PositionEnum } from "./enums/position.enum.js";
import { PositionType } from "./types/position.type.js";

/**
 * Simple toast messages
 */
class SimpleToastMessages {
	/**
	 * Instance  of simply status messages
	 */
	private static instance: SimpleToastMessages;

	/**
	 * Gets instance
	 * @returns instance
	 */
	public static getInstance(): SimpleToastMessages {
		if (!this.instance) {
			this.instance = new SimpleToastMessages();
		}

		return this.instance;
	}

	/**
	 * Creates an instance of simply status messages.
	 */
	private constructor() {
		let messageContainer = document.createElement("div");
		messageContainer = this.buildCss(messageContainer);
		messageContainer.className = "stm_message_container";
		messageContainer.id = "stm_message_container";
		document.body.appendChild(messageContainer);

		this.refresh(messageContainer);
	}

	/**
	 * Info  of simply status messages
	 */
	public static readonly info = new Info();

	/**
	 * Shows message
	 * @param message
	 * @param type
	 * @param toastSettings?
	 *
	 * @returns Promise<void>
	 *
	 * @example
	 * ```typescript
	 * SimpleToastMessages.show("Hello World", MessageType.SUCCESS);
	 * ```
	 */
	private async show(message: string, type: MessageType, toastSettings?: ToastSettingsType): Promise<void> {
		const messageElement = this.renderMessage(message, type, toastSettings);
		const messageContainer = <HTMLDivElement>(
			document.getElementById("stm_message_container")
		);
		messageContainer.appendChild(messageElement);
		let positionHeight: string;
		if (toastSettings?.position !== undefined) {
			switch (toastSettings.position) {
				case PositionEnum.TOP_LEFT:
					positionHeight = "left";
					break;
				case PositionEnum.TOP_RIGHT:
					positionHeight = "right";
					break;
				case PositionEnum.TOP_CENTER:
					positionHeight = "top";
					break;
				case PositionEnum.BOTTOM_LEFT:
					positionHeight = "left";
					break;
				case PositionEnum.BOTTOM_RIGHT:
					positionHeight = "right";
					break;
				case PositionEnum.BOTTOM_CENTER:
					positionHeight = "bottom";
					break;
				default:
					positionHeight = "right"
					break;
			}
		} else {
			positionHeight = "right";
		}

		if (toastSettings?.timeOut) {
			await Helper.sleep(toastSettings?.timeOut);
			messageElement.classList.add("stm_message_close_animation_" + positionHeight);
			await Helper.sleep(1500);
			messageElement.remove();
		}
	}

	/**
	 * Refreshs simple toast messages
	 * @param messageContainer
	 * @returns refresh
	 */
	private async refresh(messageContainer: HTMLDivElement): Promise<void> {
		const state = true;
		while (state) {
			const container = document.querySelectorAll(".stm_message_container");

			if (container.length <= 0) {
				document.body.appendChild(messageContainer);
			}
			await Helper.sleep(5000);

			if (document.querySelectorAll(".stm_message_container").length > 1) {
				container.forEach((element) => {
					element.remove();
				});

				document.body.appendChild(messageContainer);
			}
		}
	}

	/**
	 * Renders message
	 * @param message
	 * @param type
	 * @param toastSettings?
	 * @returns
	 *
	 * @example
	 * ```typescript
	 * SimpleToastMessages.renderMessage("Hello World", MessageType.SUCCESS);
	 * ```
	 *
	 * @example
	 * ```typescript
	 * SimpleToastMessages.renderMessage("Hello World", MessageType.SUCCESS, {position: PositionEnum.TOP_LEFT});
	 * ```
	 */
	private renderMessage(message: string, type: MessageType, toastSettings?: ToastSettingsType): HTMLDivElement {
		const messageElement = document.createElement("div") as HTMLDivElement;
		let prefix = "";
		let positionHeight = "";
		const suffix = document.createElement("b");
		const messageId = crypto.randomUUID();
		if (toastSettings?.position !== undefined) {
			console.log(toastSettings.position);
			switch (toastSettings.position) {
				case PositionEnum.TOP_LEFT:
					positionHeight = "left";
					messageElement.classList.add("stm_message_" + toastSettings.position);
					break;
				case PositionEnum.TOP_RIGHT:
					positionHeight = "right";
					messageElement.classList.add("stm_message_" + toastSettings.position);
					break;
				case PositionEnum.TOP_CENTER:
					messageElement.classList.add("stm_message_" + toastSettings.position);
					positionHeight = "top";
					break;
				case PositionEnum.BOTTOM_LEFT:
					positionHeight = "left";
					messageElement.classList.add("stm_message_" + toastSettings.position);
					break;
				case PositionEnum.BOTTOM_RIGHT:
					positionHeight = "right";
					messageElement.classList.add("stm_message_" + toastSettings.position);
					break;
				case PositionEnum.BOTTOM_CENTER:
					messageElement.classList.add("stm_message_" + toastSettings.position);
					positionHeight = "bottom";
					break;
				default:
					messageElement.classList.add("stm_message_top-right");
					messageElement.style.top = "0";
					messageElement.style.right = "0";
					positionHeight = "right"
					break;
			}

		} else {
			messageElement.classList.add("stm_message_top-right");
			positionHeight = "right";
		}
		suffix.innerHTML = "X";
		suffix.className = "stm_message_close";
		suffix.addEventListener("click", async () => {
			messageElement.classList.add("stm_message_close_animation_" + positionHeight);
			await Helper.sleep(1500);
			messageElement.remove();
		});
		suffix.style.float = "right";
		suffix.style.cursor = "pointer";
		suffix.style.marginRight = "1rem";
		suffix.style.marginLeft = "1rem";

		switch (type) {
			case "success":
				prefix =
					'<img alt="check" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0iTTIxLjA1IDMzLjEgMzUuMiAxOC45NWwtMi4zLTIuMjUtMTEuODUgMTEuODUtNi02LTIuMjUgMi4yNVpNMjQgNDRxLTQuMSAwLTcuNzUtMS41NzUtMy42NS0xLjU3NS02LjM3NS00LjMtMi43MjUtMi43MjUtNC4zLTYuMzc1UTQgMjguMSA0IDI0cTAtNC4xNSAxLjU3NS03LjggMS41NzUtMy42NSA0LjMtNi4zNSAyLjcyNS0yLjcgNi4zNzUtNC4yNzVRMTkuOSA0IDI0IDRxNC4xNSAwIDcuOCAxLjU3NSAzLjY1IDEuNTc1IDYuMzUgNC4yNzUgMi43IDIuNyA0LjI3NSA2LjM1UTQ0IDE5Ljg1IDQ0IDI0cTAgNC4xLTEuNTc1IDcuNzUtMS41NzUgMy42NS00LjI3NSA2LjM3NXQtNi4zNSA0LjNRMjguMTUgNDQgMjQgNDRabTAtM3E3LjEgMCAxMi4wNS00Ljk3NVE0MSAzMS4wNSA0MSAyNHEwLTcuMS00Ljk1LTEyLjA1UTMxLjEgNyAyNCA3cS03LjA1IDAtMTIuMDI1IDQuOTVRNyAxNi45IDcgMjRxMCA3LjA1IDQuOTc1IDEyLjAyNVExNi45NSA0MSAyNCA0MVptMC0xN1oiLz48L3N2Zz4=" />';
				break;
			case "error":
				prefix =
					'<img alt="error" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0iTTI0IDM0cS43IDAgMS4xNzUtLjQ3NS40NzUtLjQ3NS40NzUtMS4xNzUgMC0uNy0uNDc1LTEuMTc1UTI0LjcgMzAuNyAyNCAzMC43cS0uNyAwLTEuMTc1LjQ3NS0uNDc1LjQ3NS0uNDc1IDEuMTc1IDAgLjcuNDc1IDEuMTc1UTIzLjMgMzQgMjQgMzRabS0xLjM1LTcuNjVoM1YxMy43aC0zWk0yNCA0NHEtNC4xIDAtNy43NS0xLjU3NS0zLjY1LTEuNTc1LTYuMzc1LTQuMy0yLjcyNS0yLjcyNS00LjMtNi4zNzVRNCAyOC4xIDQgMjMuOTVxMC00LjEgMS41NzUtNy43NSAxLjU3NS0zLjY1IDQuMy02LjM1IDIuNzI1LTIuNyA2LjM3NS00LjI3NVExOS45IDQgMjQuMDUgNHE0LjEgMCA3Ljc1IDEuNTc1IDMuNjUgMS41NzUgNi4zNSA0LjI3NSAyLjcgMi43IDQuMjc1IDYuMzVRNDQgMTkuODUgNDQgMjRxMCA0LjEtMS41NzUgNy43NS0xLjU3NSAzLjY1LTQuMjc1IDYuMzc1dC02LjM1IDQuM1EyOC4xNSA0NCAyNCA0NFptLjA1LTNxNy4wNSAwIDEyLTQuOTc1VDQxIDIzLjk1cTAtNy4wNS00Ljk1LTEyVDI0IDdxLTcuMDUgMC0xMi4wMjUgNC45NVE3IDE2LjkgNyAyNHEwIDcuMDUgNC45NzUgMTIuMDI1UTE2Ljk1IDQxIDI0LjA1IDQxWk0yNCAyNFoiLz48L3N2Zz4=" />';
				break;
			case "warning":
				prefix =
					'<img alt="warning" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0iTTIgNDIgMjQgNGwyMiAzOFptNS4yLTNoMzMuNkwyNCAxMFptMTctMi44NXEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NSAwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNVEyMi43IDM0IDIyLjcgMzQuNjVxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1Wm0tMS41LTUuNTVoM1YxOS40aC0zWm0xLjMtNi4xWiIvPjwvc3ZnPg==" />';
				break;
			case "info":
				prefix =
					'<img alt="info" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0iTTIyLjY1IDM0aDNWMjJoLTNaTTI0IDE4LjNxLjcgMCAxLjE3NS0uNDUuNDc1LS40NS40NzUtMS4xNXQtLjQ3NS0xLjJRMjQuNyAxNSAyNCAxNXEtLjcgMC0xLjE3NS41LS40NzUuNS0uNDc1IDEuMnQuNDc1IDEuMTVxLjQ3NS40NSAxLjE3NS40NVpNMjQgNDRxLTQuMSAwLTcuNzUtMS41NzUtMy42NS0xLjU3NS02LjM3NS00LjMtMi43MjUtMi43MjUtNC4zLTYuMzc1UTQgMjguMSA0IDIzLjk1cTAtNC4xIDEuNTc1LTcuNzUgMS41NzUtMy42NSA0LjMtNi4zNSAyLjcyNS0yLjcgNi4zNzUtNC4yNzVRMTkuOSA0IDI0LjA1IDRxNC4xIDAgNy43NSAxLjU3NSAzLjY1IDEuNTc1IDYuMzUgNC4yNzUgMi43IDIuNyA0LjI3NSA2LjM1UTQ0IDE5Ljg1IDQ0IDI0cTAgNC4xLTEuNTc1IDcuNzUtMS41NzUgMy42NS00LjI3NSA2LjM3NXQtNi4zNSA0LjNRMjguMTUgNDQgMjQgNDRabS4wNS0zcTcuMDUgMCAxMi00Ljk3NVQ0MSAyMy45NXEwLTcuMDUtNC45NS0xMlQyNCA3cS03LjA1IDAtMTIuMDI1IDQuOTVRNyAxNi45IDcgMjRxMCA3LjA1IDQuOTc1IDEyLjAyNVExNi45NSA0MSAyNC4wNSA0MVpNMjQgMjRaIi8+PC9zdmc+" />';
				break;
		}

		messageElement.innerHTML =
			prefix + "<b>-</b> <span>" + message + "</span>";
		messageElement.appendChild(suffix);
		messageElement.classList.add(type + "_message");
		messageElement.classList.add("stm_message");
		messageElement.id = "stm_id_" + messageId;
		if (toastSettings?.opacity) {
			messageElement.style.opacity = toastSettings.opacity.toString();
		}

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
			.stm_message_container {
				width: 100% !important;
				height: 100% !important;
				position: absolute !important;
				display: flex !important;
				align-items: center !important;
				justify-content: center !important;
				z-index: 2147483647 !important;
				pointer-events: none;
				right: 0;
				top: 0;
				left: 0;
				bottom: 0;
				overflow: hidden;
			}
			.success_message {
				color: #4caf50;
				background-color: #e8f5e9;
			}
			.success_message img {
				filter: invert(53%) sepia(84%) saturate(346%) hue-rotate(73deg) brightness(94%) contrast(85%);
			}
			.error_message {
				color: #f44336;
				background-color: #ffebee;
			}
			.error_message img {
				filter: invert(40%) sepia(81%) saturate(1486%) hue-rotate(333deg) brightness(90%) contrast(115%);
			}
			.warning_message {
				color: #ff9800;
				background-color: #fffde7;
			}
			.warning_message img {
				filter: invert(63%) sepia(57%) saturate(3351%) hue-rotate(1deg) brightness(104%) contrast(104%);
			}
			.info_message {
				color: #2196f3;
				background-color: #e3f2fd;
			}
			.info_message img {
				filter: invert(48%) sepia(40%) saturate(1367%) hue-rotate(172deg) brightness(96%) contrast(99%);
			}
			.stm_message img {

				-webkit-touch-callout: none;
				-webkit-user-select: none;
				-khtml-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				pointer-events: none;

				/*Handhelds (small devices)*/
				@media only screen and (max-device-width: 40rem) {
					width: 1.5rem;
					height: 1.5rem;
				}

				/*#Tablets (medium devices)*/
				@media only screen and (min-device-width: 40rem) {
					font-size: 1.5rem;
					margin-left: 0.7rem;
				}

				/*#Desktops (large devices)*/
				@media only screen and (min-width: 1000px) {
					font-size: 1.5rem;
					margin-left: 0.7rem;
				}

			}
			.stm_message b {

				-webkit-user-select: none;
				-khtml-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;

				/*Handhelds (small devices)*/
				@media only screen and (max-device-width: 40rem) {
					font-size: 0.9rem;
					margin-left: 0.2rem;
				}

				/*#Tablets (medium devices)*/
				@media only screen and (min-device-width: 40rem) {
					font-size: 1.5rem;
					margin-left: 0.7rem;
				}

				/*#Desktops (large devices)*/
				@media only screen and (min-width: 1000px) {
					font-size: 1.5rem;
					margin-left: 0.7rem;
				}
			}
			.stm_message {
				display: flex !important;
				align-items: center !important;
				font-weight: lighter !important;
				font-family: Verdana !important;
				border-radius: 0.25rem !important;
				pointer-events: auto !important;
				box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
				opacity: 0.9;
				transition: visibility 0.5s ease-out 0.5s;
				position: absolute !important;
				overflow: hidden;

				/*Handhelds (small devices)*/
				@media only screen and (max-device-width: 40rem) {
					padding: 0.1rem;
					margin: 0.5rem;
					font-size: 0.5rem;
					width: 15rem;
					min-height: 3rem;
					max-height: 7rem;
				}

				/*#Tablets (medium devices)*/
				@media only screen and (min-device-width: 40rem) {
					padding: 0.2rem;
					margin: 0.5rem;
					font-size: 0.5rem;
					width: 20rem;
				}

				/*#Desktops (large devices)*/
				@media only screen and (min-width: 1000px) {
					padding: 0.5rem;
					margin: 0.5rem;
					font-size: 0.8rem;
					width: 30rem;
				}
			}
			.stm_message ::-webkit-scrollbar {
				width: 0.5rem;
				pointer-events: auto;
			}
			.stm_message ::-webkit-scrollbar-track {
				background: #f1f1f1;
			}
			.stm_message ::-webkit-scrollbar-thumb {
				background: #888;
			}
			.stm_message ::-webkit-scrollbar-thumb:hover {
				background: #555;
			}
			.stm_message span {
				flex: 1;
				margin-left: 1rem;
				max-height: 7rem;
				overflow-x: auto;
			}
			.stm_message_top-right {
				top: 1rem !important;
				right: 1rem !important;
			}
			.stm_message_top-left {
				top: 1rem !important;
				left: 1rem !important;
			}
			.stm_message_top-center {
				top: 1.5rem !important;
				left: 0 !important;
				right: 0 !important;
				margin: 0 auto !important;
			}
			.stm_message_bottom-right {
				bottom: 1rem !important;
				right: 1rem !important;
			}
			.stm_message_bottom-left {
				bottom: 1rem !important;
				left: 1rem !important;
			}
			.stm_message_bottom-center {
				bottom: 1.5rem !important;
				left: 0 !important;
				right: 0 !important;
				margin: 0 auto !important;
			}
			.stm_message_close_animation_left {
				transform: translateX(-150%);
				transition: transform 0.5s ease-in-out;
			}
			.stm_message_close_animation_right {
				transform: translateX(150%);
				transition: transform 0.5s ease-in-out;
			}
			.stm_message_close_animation_top {
				transform: translateY(-150%);
				transition: transform 0.5s ease-in-out;
			}
			.stm_message_close_animation_bottom {
				transform: translateY(150%);
				transition: transform 0.5s ease-in-out;
			}
			`;
		element.appendChild(css);
		return element;
	}

	/**
	 * Success message
	 * @param message
	 * @param toastSettings?
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.success("message");
	 * ```
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.success("message",
	 * {
	 * 		timeOut: 5000
	 * });
	 * ```
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.success("message",
	 * {
	 * 		timeOut: 5000,
	 * 		position: PositionEnum.TOP_CENTER
	 * });
	 * ```
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.success("message",
	 * {
	 * 		timeOut: 5000,
	 * 		position: PositionEnum.TOP_CENTER,
	 * 		opacity: 0.5
	 * });
	 * ```
	 */
	public success(message: string, toastSettings?: ToastSettingsType) {
		this.show(message, MessageEnum.SUCCESS, toastSettings);
	}

	/**
	 * Errors message
	 * @param message
	 * @param toastSettings?
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.error("message");
	 * ```
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.error("message",
	 * {
	 * 		timeOut: 5000
	 * });
	 * ```
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.error("message",
	 * {
	 * 		timeOut: 5000,
	 * 		position: PositionEnum.TOP_CENTER
	 * });
	 * ```
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.error("message",
	 * {
	 * 		timeOut: 5000,
	 * 		position: PositionEnum.TOP_CENTER,
	 * 		opacity: 0.5
	 * });
	 * ```
	 */
	public error(message: string, toastSettings?: ToastSettingsType) {
		this.show(message, MessageEnum.ERROR, toastSettings);
	}

	/**
	 * Warning message
	 * @param message
	 * @param toastSettings?
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.warning("message");
	 * ```
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.warning("message",
	 * {
	 * 		timeOut: 5000
	 * });
	 * ```
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.warning("message",
	 * {
	 * 		timeOut: 5000,
	 * 		position: PositionEnum.TOP_CENTER
	 * });
	 * ```
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.warning("message",
	 * {
	 * 		timeOut: 5000,
	 * 		position: PositionEnum.TOP_CENTER,
	 * 		opacity: 0.5
	 * });
	 * ```
	 */
	public warning(message: string, toastSettings?: ToastSettingsType) {
		this.show(message, MessageEnum.WARNING, toastSettings);
	}

	/**
	 * Infos message
	 * @param message
	 * @param toastSettings?
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.info("message");
	 * ```
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.info("message",
	 * {
	 * 		timeOut: 5000
	 * });
	 * ```
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.info("message",
	 * {
	 * 		timeOut: 5000,
	 * 		position: PositionEnum.TOP_CENTER
	 * });
	 * ```
	 *
	 * @example
	 * ```ts
	 * const stm = SimpleToastMessages.getInstance();
	 * stm.info("message",
	 * {
	 * 		timeOut: 5000,
	 * 		position: PositionEnum.TOP_CENTER,
	 * 		opacity: 0.5
	 * });
	 * ```
	 */
	public info(message: string, toastSettings?: ToastSettingsType) {
		this.show(message, MessageEnum.INFO, toastSettings);
	}
}

export default { SimpleToastMessages };
export { SimpleToastMessages };
export { SimpleToastMessages as stm };
export { SimpleToastMessages as T };
export { MessageType, PositionType, ToastSettingsType };
export { MessageEnum, PositionEnum };
export { Info };
