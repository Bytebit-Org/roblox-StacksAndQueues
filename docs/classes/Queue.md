[@rbxts/stacks-and-queues](../README.md) / Queue

# Class: Queue<T\>

An implementation of a queue data structure that is built upon a singly linked list.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Implements

- [`IQueue`](../interfaces/IQueue.md)<`T`\>

## Table of contents

### Constructors

- [constructor](Queue.md#constructor)

### Methods

- [clear](Queue.md#clear)
- [isEmpty](Queue.md#isempty)
- [peek](Queue.md#peek)
- [pop](Queue.md#pop)
- [push](Queue.md#push)
- [pushArray](Queue.md#pusharray)
- [size](Queue.md#size)

## Constructors

### constructor

• **new Queue**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Methods

### clear

▸ **clear**(): `void`

Clears the entire queue all at once

#### Returns

`void`

#### Implementation of

[IQueue](../interfaces/IQueue.md).[clear](../interfaces/IQueue.md#clear)

#### Defined in

[classes/Queue.ts:10](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Queue.ts#L10)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the queue is presently empty

#### Returns

`boolean`

True if empty, false otherwise

#### Implementation of

[IQueue](../interfaces/IQueue.md).[isEmpty](../interfaces/IQueue.md#isempty)

#### Defined in

[classes/Queue.ts:14](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Queue.ts#L14)

___

### peek

▸ **peek**(): `undefined` \| `T`

Peeks at the next value in the queue, if any

#### Returns

`undefined` \| `T`

The next value in the queue, if any

#### Implementation of

[IQueue](../interfaces/IQueue.md).[peek](../interfaces/IQueue.md#peek)

#### Defined in

[classes/Queue.ts:18](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Queue.ts#L18)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops the next value, if any, off the queue

#### Returns

`undefined` \| `T`

The next value in the queue, if any

#### Implementation of

[IQueue](../interfaces/IQueue.md).[pop](../interfaces/IQueue.md#pop)

#### Defined in

[classes/Queue.ts:22](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Queue.ts#L22)

___

### push

▸ **push**(`value`): `void`

Pushes the given value onto the queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

[IQueue](../interfaces/IQueue.md).[push](../interfaces/IQueue.md#push)

#### Defined in

[classes/Queue.ts:26](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Queue.ts#L26)

___

### pushArray

▸ **pushArray**(`valuesArray`): `void`

Pushes the given values onto the queue such that the last
value in the array is the last value in the queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `valuesArray` | readonly `T`[] |

#### Returns

`void`

#### Implementation of

[IQueue](../interfaces/IQueue.md).[pushArray](../interfaces/IQueue.md#pusharray)

#### Defined in

[classes/Queue.ts:30](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Queue.ts#L30)

___

### size

▸ **size**(): `number`

Gets the current size of the queue

#### Returns

`number`

The current size of the queue

#### Implementation of

[IQueue](../interfaces/IQueue.md).[size](../interfaces/IQueue.md#size)

#### Defined in

[classes/Queue.ts:34](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Queue.ts#L34)
