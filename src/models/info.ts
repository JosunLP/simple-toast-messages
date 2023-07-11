/**
 * Info
 *
 * @description - A class that represents an info model for the library, containing the following properties:
 * 					- VERSION: The version of the library.
 * 					- AUTHOR: The author of the library.
 * 					- LICENSE: The license of the library.
 * 					- HOMEPAGE: The homepage of the library.
 * 					- REPOSITORY: The repository of the library.
 */
export default class Info {
	/**
	 * Version  of info
	 */
	private readonly VERSION: string = "2.0.1"

	/**
	 * Author  of info
	 */
	private readonly AUTHOR: string = "Jonas Pfalzgraf"

	/**
	 * License  of info
	 */
	private readonly LICENSE: string = "MIT"

	/**
	 * Repository  of info
	 */
	private readonly REPOSITORY: string = "git+https://github.com/JosunLP/simple-toast-messages.git"

	/**
	 * Homepage  of info
	 */
	private readonly HOMEPAGE: string = "https://github.com/JosunLP/simple-toast-messages#readme"

	/**
	 * Gets info
	 * @returns
	 *
	 * @example
	 * ```
	 * getInfo()
	 * ```
	 */
	public getInfo() {
		return {
			VERSION: this.VERSION,
			AUTHOR: this.AUTHOR,
			LICENSE: this.LICENSE,
			REPOSITORY: this.REPOSITORY,
			HOMEPAGE: this.HOMEPAGE,
		};
	}
}
