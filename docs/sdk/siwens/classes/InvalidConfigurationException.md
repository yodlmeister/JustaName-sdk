[**@justaname.id/siwens**](../README.md) • **Docs**

***

[@justaname.id/siwens](../globals.md) / InvalidConfigurationException

# Class: InvalidConfigurationException

## Extends

- `Error`

## Constructors

### new InvalidConfigurationException()

> **new InvalidConfigurationException**(`message`): [`InvalidConfigurationException`](InvalidConfigurationException.md)

#### Parameters

• **message**: `string`

#### Returns

[`InvalidConfigurationException`](InvalidConfigurationException.md)

#### Overrides

`Error.constructor`

#### Defined in

[packages/@justaname.id/siwens/src/lib/errors/InvalidConfiguration.exception.ts:2](https://github.com/JustaName-id/JustaName-sdk/blob/626b4b68604f3125538c424811e641247a5bd58d/packages/@justaname.id/siwens/src/lib/errors/InvalidConfiguration.exception.ts#L2)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Defined in

node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:11

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:4

***

### domainRequired()

> `static` **domainRequired**(): [`InvalidConfigurationException`](InvalidConfigurationException.md)

#### Returns

[`InvalidConfigurationException`](InvalidConfigurationException.md)

#### Defined in

[packages/@justaname.id/siwens/src/lib/errors/InvalidConfiguration.exception.ts:12](https://github.com/JustaName-id/JustaName-sdk/blob/626b4b68604f3125538c424811e641247a5bd58d/packages/@justaname.id/siwens/src/lib/errors/InvalidConfiguration.exception.ts#L12)

***

### providerUrlRequired()

> `static` **providerUrlRequired**(): [`InvalidConfigurationException`](InvalidConfigurationException.md)

#### Returns

[`InvalidConfigurationException`](InvalidConfigurationException.md)

#### Defined in

[packages/@justaname.id/siwens/src/lib/errors/InvalidConfiguration.exception.ts:7](https://github.com/JustaName-id/JustaName-sdk/blob/626b4b68604f3125538c424811e641247a5bd58d/packages/@justaname.id/siwens/src/lib/errors/InvalidConfiguration.exception.ts#L7)