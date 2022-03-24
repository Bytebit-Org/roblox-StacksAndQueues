/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { Stack } from "./Stack";

export = () => {
	describe("clear", () => {
		it("should reset size, make the stack empty, and make the next value nil", () => {
			const stack = new Stack();

			expect(stack.size()).to.equal(0);
			expect(stack.isEmpty()).to.equal(true);
			expect(stack.peek()).to.never.be.ok();

			const arrayInput = ["a", "b", "c"];
			stack.pushArray(arrayInput);

			expect(stack.size()).to.equal(arrayInput.size());
			expect(stack.isEmpty()).to.equal(false);
			expect(stack.peek()).to.equal(arrayInput[arrayInput.size() - 1]);

			stack.clear();

			expect(stack.size()).to.equal(0);
			expect(stack.isEmpty()).to.equal(true);
			expect(stack.peek()).to.never.be.ok();
		});
	});

	describe("isEmpty", () => {
		// this is tested in just about every other method so I'm going to call it good to go with just this
		it("should be true upon initialization", () => {
			const stack = new Stack();
			expect(stack.isEmpty()).to.equal(true);
		});
	});

	describe("peek", () => {
		it("should return nil for an empty stack", () => {
			const stack = new Stack();

			expect(stack.peek()).to.never.be.ok();

			const arrayInput = ["a", "b", "c"];
			stack.pushArray(arrayInput);

			stack.clear();

			expect(stack.peek()).to.never.be.ok();
		});

		it("should return the most recently added value", () => {
			const stack = new Stack();

			const arrayInput = ["a", "b", "c"];

			for (const value of arrayInput) {
				stack.push(value);

				expect(stack.peek()).to.equal(value);
			}
		});
	});

	describe("pop", () => {
		it("should return nil for an empty stack", () => {
			const stack = new Stack();

			expect(stack.pop()).to.never.be.ok();

			const arrayInput = ["a", "b", "c"];
			stack.pushArray(arrayInput);

			stack.clear();

			expect(stack.pop()).to.never.be.ok();
		});

		it("should return the most recently added value and remove the item from the stack and change the size of the stack", () => {
			const stack = new Stack();

			const arrayInput = ["a", "b", "c"];

			for (const value of arrayInput) {
				stack.push(value);

				expect(stack.isEmpty()).to.equal(false);
				expect(stack.size()).to.equal(1);
				expect(stack.pop()).to.equal(value);

				expect(stack.isEmpty()).to.equal(true);
				expect(stack.size()).to.equal(0);
				expect(stack.pop()).to.never.be.ok();
			}
		});
	});

	describe("push", () => {
		it("should put the most recently added value at the top of the stack and change the size of the stack", () => {
			const stack = new Stack();

			const arrayInput = ["a", "b", "c"];

			for (let i = 0; i < arrayInput.size(); i++) {
				const value = arrayInput[i];

				stack.push(value);

				expect(stack.isEmpty()).to.equal(false);
				expect(stack.size()).to.equal(i + 1);
				expect(stack.peek()).to.equal(value);
			}
		});
	});

	describe("pushArray", () => {
		it("should put the last element of the input array at the top of the stack with the other items in order and change the size of the stack", () => {
			const stack = new Stack();

			const arrayInput = ["a", "b", "c"];

			stack.pushArray(arrayInput);

			expect(stack.isEmpty()).to.equal(false);
			expect(stack.size()).to.equal(arrayInput.size());

			for (let i = arrayInput.size() - 1; i >= 0; i--) {
				expect(stack.pop()).to.equal(arrayInput[i]);
				expect(stack.size()).to.equal(i);
			}

			expect(stack.isEmpty()).to.equal(true);
			expect(stack.size()).to.equal(0);
		});
	});

	describe("size", () => {
		// this is tested in just about every other method so I'm going to call it good to go with just this
		it("should be 0 upon initialization", () => {
			const stack = new Stack();
			expect(stack.size()).to.equal(0);
		});
	});
};
