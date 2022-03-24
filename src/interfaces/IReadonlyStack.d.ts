/**
 * Defines a readonly interface for a stack
 */
export interface IReadonlyStack<T extends defined> {
	/**
	 * Gets whether the stack is presently empty
	 * @returns True if empty, false otherwise
	 */
	isEmpty(): boolean;

	/**
	 * Peeks at the next value in the stack, if any
	 * @returns The next value in the stack, if any
	 */
	peek(): T | undefined;

	/**
	 * Gets the current size of the stack
	 * @returns The current size of the stack
	 */
	size(): number;
}
