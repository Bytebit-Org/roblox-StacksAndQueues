/**
 * Defines a readonly interface for a queue
 */
export interface IReadonlyQueue<T extends defined> {
	/**
	 * Gets whether the queue is presently empty
	 * @returns True if empty, false otherwise
	 */
	isEmpty(): boolean;

	/**
	 * Peeks at the next value in the queue, if any
	 * @returns The next value in the queue, if any
	 */
	peek(): T | undefined;

	/**
	 * Gets the current size of the queue
	 * @returns The current size of the queue
	 */
	size(): number;
}
