[@rbxts/stacks-and-queues](../README.md) / IStack

# Interface: IStack<T\>

Defines a complete interface describing a stack data structure

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- [`IReadonlyStack`](IReadonlyStack.md)<`T`\>

  ↳ **`IStack`**

## Implemented by

- [`Stack`](../classes/Stack.md)

## Table of contents

### Methods

- [clear](IStack.md#clear)
- [isEmpty](IStack.md#isempty)
- [peek](IStack.md#peek)
- [pop](IStack.md#pop)
- [push](IStack.md#push)
- [pushArray](IStack.md#pusharray)
- [size](IStack.md#size)

## Methods

### clear

▸ **clear**(): `void`

Clears the entire stack all at once

#### Returns

`void`

#### Defined in

[interfaces/IStack.d.ts:10](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IStack.d.ts#L10)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the stack is presently empty

#### Returns

`boolean`

True if empty, false otherwise

#### Inherited from

[IReadonlyStack](IReadonlyStack.md).[isEmpty](IReadonlyStack.md#isempty)

#### Defined in

[interfaces/IReadonlyStack.d.ts:9](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IReadonlyStack.d.ts#L9)

___

### peek

▸ **peek**(): `undefined` \| `T`

Peeks at the next value in the stack, if any

#### Returns

`undefined` \| `T`

The next value in the stack, if any

#### Inherited from

[IReadonlyStack](IReadonlyStack.md).[peek](IReadonlyStack.md#peek)

#### Defined in

[interfaces/IReadonlyStack.d.ts:15](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IReadonlyStack.d.ts#L15)

___

### pop

▸ **pop**(): `undefined` \| `T`

Pops the next value, if any, off the stack

#### Returns

`undefined` \| `T`

The next value in the stack, if any

#### Defined in

[interfaces/IStack.d.ts:16](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IStack.d.ts#L16)

___

### push

▸ **push**(`value`): `void`

Pushes the given value onto the stack

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to put onto the stack |

#### Returns

`void`

#### Defined in

[interfaces/IStack.d.ts:22](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IStack.d.ts#L22)

___

### pushArray

▸ **pushArray**(`valuesArray`): `void`

Pushes the given values onto the stack such that the last
value in the array is the next value on the stack

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `valuesArray` | readonly `T`[] | The array of values to put onto the stack |

#### Returns

`void`

#### Defined in

[interfaces/IStack.d.ts:29](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IStack.d.ts#L29)

___

### size

▸ **size**(): `number`

Gets the current size of the stack

#### Returns

`number`

The current size of the stack

#### Inherited from

[IReadonlyStack](IReadonlyStack.md).[size](IReadonlyStack.md#size)

#### Defined in

[interfaces/IReadonlyStack.d.ts:21](https://github.com/Bytebit-Org/roblox-StacksAndQueues/blob/dd612ca/src/interfaces/IReadonlyStack.d.ts#L21)
