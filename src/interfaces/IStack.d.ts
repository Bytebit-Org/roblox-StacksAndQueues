import { IReadonlyStack } from "interfaces/IReadonlyStack";

/**
 * Defines a complete interface describing a stack data structure
 */
export interface IStack<T extends defined> extends IReadonlyStack<T> {
	/**
	 * Clears the entire stack all at once
	 */
	clear(): void;

	/**
	 * Pops the next value, if any, off the stack
	 * @returns The next value in the stack, if any
	 */
	pop(): T | undefined;

	/**
	 * Pushes the given value onto the stack
	 * @param value The value to put onto the stack
	 */
	push(value: T): void;

	/**
	 * Pushes the given values onto the stack such that the first
	 * value in the array is the next value on the stack
	 * @param valuesArray The array of values to put onto the stack
	 */
	pushArray(valuesArray: ReadonlyArray<T>): void;
}
