import { IReadonlyQueue } from "interfaces/IReadonlyQueue";

/**
 * Defines a complete interface describing a queue data structure
 */
export interface IQueue<T extends defined> extends IReadonlyQueue<T> {
	/**
	 * Clears the entire queue all at once
	 */
	clear(): void;

	/**
	 * Pops the next value, if any, off the queue
	 * @returns The next value in the queue, if any
	 */
	pop(): T | undefined;

	/**
	 * Pushes the given value onto the queue
	 * @param value The value to put onto the queue
	 */
	push(value: T): void;
}
