[@rbxts/stacks-and-queues](../README.md) / IReadonlyQueue

# Interface: IReadonlyQueue<T\>

Defines a readonly interface for a queue

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- **`IReadonlyQueue`**

  ↳ [`IQueue`](IQueue.md)

## Table of contents

### Methods

- [isEmpty](IReadonlyQueue.md#isempty)
- [peek](IReadonlyQueue.md#peek)
- [size](IReadonlyQueue.md#size)

## Methods

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the queue is presently empty

#### Returns

`boolean`

True if empty, false otherwise

#### Defined in

[interfaces/IReadonlyQueue.d.ts:9](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IReadonlyQueue.d.ts#L9)

___

### peek

▸ **peek**(): `undefined` \| `T`

Peeks at the next value in the queue, if any

#### Returns

`undefined` \| `T`

The next value in the queue, if any

#### Defined in

[interfaces/IReadonlyQueue.d.ts:15](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IReadonlyQueue.d.ts#L15)

___

### size

▸ **size**(): `number`

Gets the current size of the queue

#### Returns

`number`

The current size of the queue

#### Defined in

[interfaces/IReadonlyQueue.d.ts:21](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IReadonlyQueue.d.ts#L21)
