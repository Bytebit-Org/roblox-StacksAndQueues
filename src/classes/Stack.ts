import { SinglyLinkedList } from "@rbxts/linked-lists";
import { IStack } from "../interfaces/IStack";

/**
 * An implementation of a stack data structure that is built upon a singly linked list.
 */
export class Stack<T extends defined> implements IStack<T> {
	private readonly linkedList = new SinglyLinkedList<T>();

	public clear() {
		this.linkedList.clear();
	}

	public isEmpty() {
		return this.linkedList.isEmpty();
	}

	public peek() {
		return this.linkedList.peekValueAtHead();
	}

	public pop() {
		return this.linkedList.popHeadValue();
	}

	public push(value: T) {
		this.linkedList.pushToHead(value);
	}

	public pushArray(valuesArray: ReadonlyArray<T>) {
		for (const value of valuesArray) {
			this.linkedList.pushToHead(value);
		}
	}

	public size() {
		return this.linkedList.size();
	}
}
