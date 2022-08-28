/**
 * Helper
 */
export default class Helper {

	/**
	 * Generates uuid
	 * @returns uuid
	 */
	public static generateUUid(): string {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
			/[xy]/g,
			function (c) {
				const r = (Math.random() * 16) | 0,
					v = c == "x" ? r : (r & 0x3) | 0x8;
				return v.toString(16);
			}
		);
	}

	/**
	 * Sleeps helper
	 * @param ms
	 * @returns
	 */
	public static async sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
}
