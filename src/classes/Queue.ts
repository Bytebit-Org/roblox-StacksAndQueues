import { SinglyLinkedList } from "@rbxts/linked-lists";
import { IQueue } from "../interfaces/IQueue";

/**
 * An implementation of a queue data structure that is built upon a singly linked list.
 */
export class Queue<T extends defined> implements IQueue<T> {
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
		this.linkedList.pushToTail(value);
	}

	public pushArray(valuesArray: ReadonlyArray<T>) {
		this.linkedList.pushArrayToTail(valuesArray);
	}

	public size() {
		return this.linkedList.size();
	}
}
