/**
 * Helper
 */
export default class Helper {

	/**
	 * Sleeps helper
	 * @param ms
	 * @returns
	 */
	public static async sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
}
