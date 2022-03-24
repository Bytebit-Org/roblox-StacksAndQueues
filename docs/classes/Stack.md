[@rbxts/stacks-and-queues](../README.md) / Stack

# Class: Stack<T\>

An implementation of a stack data structure that is built upon a singly linked list.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Implements

- [`IStack`](../interfaces/IStack.md)<`T`\>

## Table of contents

### Constructors

- [constructor](Stack.md#constructor)

### Methods

- [clear](Stack.md#clear)
- [isEmpty](Stack.md#isempty)
- [peek](Stack.md#peek)
- [pop](Stack.md#pop)
- [push](Stack.md#push)
- [pushArray](Stack.md#pusharray)
- [size](Stack.md#size)

## Constructors

### constructor

• **new Stack**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Methods

### clear

▸ **clear**(): `void`

Clears the entire stack all at once

#### Returns

`void`

#### Implementation of

[IStack](../interfaces/IStack.md).[clear](../interfaces/IStack.md#clear)

#### Defined in

[classes/Stack.ts:10](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Stack.ts#L10)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the stack is presently empty

#### Returns

`boolean`

True if empty, false otherwise

#### Implementation of

[IStack](../interfaces/IStack.md).[isEmpty](../interfaces/IStack.md#isempty)

#### Defined in

[classes/Stack.ts:14](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Stack.ts#L14)

___

### peek

▸ **peek**(): `undefined` \| `T`

Peeks at the next value in the stack, if any

#### Returns

`undefined` \| `T`

The next value in the stack, if any

#### Implementation of

[IStack](../interfaces/IStack.md).[peek](../interfaces/IStack.md#peek)

#### Defined in

[classes/Stack.ts:18](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Stack.ts#L18)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops the next value, if any, off the stack

#### Returns

`undefined` \| `T`

The next value in the stack, if any

#### Implementation of

[IStack](../interfaces/IStack.md).[pop](../interfaces/IStack.md#pop)

#### Defined in

[classes/Stack.ts:22](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Stack.ts#L22)

___

### push

▸ **push**(`value`): `void`

Pushes the given value onto the stack

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

[IStack](../interfaces/IStack.md).[push](../interfaces/IStack.md#push)

#### Defined in

[classes/Stack.ts:26](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Stack.ts#L26)

___

### pushArray

▸ **pushArray**(`valuesArray`): `void`

Pushes the given values onto the stack such that the last
value in the array is the next value on the stack

#### Parameters

| Name | Type |
| :------ | :------ |
| `valuesArray` | readonly `T`[] |

#### Returns

`void`

#### Implementation of

[IStack](../interfaces/IStack.md).[pushArray](../interfaces/IStack.md#pusharray)

#### Defined in

[classes/Stack.ts:30](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Stack.ts#L30)

___

### size

▸ **size**(): `number`

Gets the current size of the stack

#### Returns

`number`

The current size of the stack

#### Implementation of

[IStack](../interfaces/IStack.md).[size](../interfaces/IStack.md#size)

#### Defined in

[classes/Stack.ts:36](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/classes/Stack.ts#L36)
