[@rbxts/stacks-and-queues](../README.md) / IReadonlyStack

# Interface: IReadonlyStack<T\>

Defines a readonly interface for a stack

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- **`IReadonlyStack`**

  ↳ [`IStack`](IStack.md)

## Table of contents

### Methods

- [isEmpty](IReadonlyStack.md#isempty)
- [peek](IReadonlyStack.md#peek)
- [size](IReadonlyStack.md#size)

## Methods

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the stack is presently empty

#### Returns

`boolean`

True if empty, false otherwise

#### Defined in

[interfaces/IReadonlyStack.d.ts:9](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IReadonlyStack.d.ts#L9)

___

### peek

▸ **peek**(): `undefined` \| `T`

Peeks at the next value in the stack, if any

#### Returns

`undefined` \| `T`

The next value in the stack, if any

#### Defined in

[interfaces/IReadonlyStack.d.ts:15](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IReadonlyStack.d.ts#L15)

___

### size

▸ **size**(): `number`

Gets the current size of the stack

#### Returns

`number`

The current size of the stack

#### Defined in

[interfaces/IReadonlyStack.d.ts:21](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IReadonlyStack.d.ts#L21)
