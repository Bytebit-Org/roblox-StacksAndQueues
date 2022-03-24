[@rbxts/stacks-and-queues](../README.md) / IQueue

# Interface: IQueue<T\>

Defines a complete interface describing a queue data structure

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- [`IReadonlyQueue`](IReadonlyQueue.md)<`T`\>

  ↳ **`IQueue`**

## Implemented by

- [`Queue`](../classes/Queue.md)

## Table of contents

### Methods

- [clear](IQueue.md#clear)
- [isEmpty](IQueue.md#isempty)
- [peek](IQueue.md#peek)
- [pop](IQueue.md#pop)
- [push](IQueue.md#push)
- [pushArray](IQueue.md#pusharray)
- [size](IQueue.md#size)

## Methods

### clear

▸ **clear**(): `void`

Clears the entire queue all at once

#### Returns

`void`

#### Defined in

[interfaces/IQueue.d.ts:10](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IQueue.d.ts#L10)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the queue is presently empty

#### Returns

`boolean`

True if empty, false otherwise

#### Inherited from

[IReadonlyQueue](IReadonlyQueue.md).[isEmpty](IReadonlyQueue.md#isempty)

#### Defined in

[interfaces/IReadonlyQueue.d.ts:9](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IReadonlyQueue.d.ts#L9)

___

### peek

▸ **peek**(): `undefined` \| `T`

Peeks at the next value in the queue, if any

#### Returns

`undefined` \| `T`

The next value in the queue, if any

#### Inherited from

[IReadonlyQueue](IReadonlyQueue.md).[peek](IReadonlyQueue.md#peek)

#### Defined in

[interfaces/IReadonlyQueue.d.ts:15](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IReadonlyQueue.d.ts#L15)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops the next value, if any, off the queue

#### Returns

`undefined` \| `T`

The next value in the queue, if any

#### Defined in

[interfaces/IQueue.d.ts:16](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IQueue.d.ts#L16)

___

### push

▸ **push**(`value`): `void`

Pushes the given value onto the queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to put onto the queue |

#### Returns

`void`

#### Defined in

[interfaces/IQueue.d.ts:22](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IQueue.d.ts#L22)

___

### pushArray

▸ **pushArray**(`valuesArray`): `void`

Pushes the given values onto the queue such that the last
value in the array is the last value in the queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `valuesArray` | readonly `T`[] | The array of values to put onto the queue |

#### Returns

`void`

#### Defined in

[interfaces/IQueue.d.ts:29](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IQueue.d.ts#L29)

___

### size

▸ **size**(): `number`

Gets the current size of the queue

#### Returns

`number`

The current size of the queue

#### Inherited from

[IReadonlyQueue](IReadonlyQueue.md).[size](IReadonlyQueue.md#size)

#### Defined in

[interfaces/IReadonlyQueue.d.ts:21](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IReadonlyQueue.d.ts#L21)
