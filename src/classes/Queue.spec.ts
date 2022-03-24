/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { Queue } from "classes/Queue";

export = () => {
	describe("clear", () => {
		it("should reset size, make the queue empty, and make the next value nil", () => {
			const queue = new Queue();

			expect(queue.size()).to.equal(0);
			expect(queue.isEmpty()).to.equal(true);
			expect(queue.peek()).to.never.be.ok();

			const arrayInput = ["a", "b", "c"];
			queue.pushArray(arrayInput);

			expect(queue.size()).to.equal(arrayInput.size());
			expect(queue.isEmpty()).to.equal(false);
			expect(queue.peek()).to.equal(arrayInput[0]);

			queue.clear();

			expect(queue.size()).to.equal(0);
			expect(queue.isEmpty()).to.equal(true);
			expect(queue.peek()).to.never.be.ok();
		});
	});

	describe("isEmpty", () => {
		// this is tested in just about every other method so I'm going to call it good to go with just this
		it("should be true upon initialization", () => {
			const queue = new Queue();
			expect(queue.isEmpty()).to.equal(true);
		});
	});

	describe("peek", () => {
		it("should return nil for an empty queue", () => {
			const queue = new Queue();

			expect(queue.peek()).to.never.be.ok();

			const arrayInput = ["a", "b", "c"];
			queue.pushArray(arrayInput);

			queue.clear();

			expect(queue.peek()).to.never.be.ok();
		});

		it("should return the least recently added value", () => {
			const queue = new Queue();

			const arrayInput = ["a", "b", "c"];

			for (const value of arrayInput) {
				queue.push(value);

				expect(queue.peek()).to.equal(arrayInput[0]);
			}
		});
	});

	describe("pop", () => {
		it("should return nil for an empty queue", () => {
			const queue = new Queue();

			expect(queue.pop()).to.never.be.ok();

			const arrayInput = ["a", "b", "c"];
			queue.pushArray(arrayInput);

			queue.clear();

			expect(queue.pop()).to.never.be.ok();
		});

		it("should return the least recently added value and remove the item from the queue and change the size of the queue", () => {
			const queue = new Queue();

			const arrayInput = ["a", "b", "c"];
			queue.pushArray(arrayInput);

			for (let i = 0; i < arrayInput.size(); i++) {
				expect(queue.isEmpty()).to.equal(false);
				expect(queue.size()).to.equal(arrayInput.size() - i);
				expect(queue.pop()).to.equal(arrayInput[i]);
			}

			expect(queue.isEmpty()).to.equal(true);
			expect(queue.size()).to.equal(0);
			expect(queue.pop()).to.never.be.ok();
		});
	});

	describe("push", () => {
		it("should put the most recently added value at the end of the queue and change the size of the queue", () => {
			const queue = new Queue();

			const arrayInput = ["a", "b", "c"];

			for (let i = 0; i < arrayInput.size(); i++) {
				const value = arrayInput[i];

				queue.push(value);

				expect(queue.isEmpty()).to.equal(false);
				expect(queue.size()).to.equal(i + 1);
				expect(queue.peek()).to.equal(arrayInput[0]);
			}
		});
	});

	describe("pushArray", () => {
		it("should put the last element of the input array at the back of the queue with the other items in order and change the size of the queue", () => {
			const firstValue = "first";
			const queue = new Queue();

			queue.push(firstValue);

			const arrayInput = ["a", "b", "c"];

			queue.pushArray(arrayInput);

			expect(queue.isEmpty()).to.equal(false);
			expect(queue.size()).to.equal(arrayInput.size() + 1);

			expect(queue.pop()).to.equal(firstValue);
			expect(queue.size()).to.equal(arrayInput.size());

			for (let i = 0; i < arrayInput.size(); i++) {
				expect(queue.pop()).to.equal(arrayInput[i]);
				expect(queue.size()).to.equal(arrayInput.size() - i - 1);
			}

			expect(queue.isEmpty()).to.equal(true);
			expect(queue.size()).to.equal(0);
		});
	});

	describe("size", () => {
		// this is tested in just about every other method so I'm going to call it good to go with just this
		it("should be 0 upon initialization", () => {
			const queue = new Queue();
			expect(queue.size()).to.equal(0);
		});
	});
};
