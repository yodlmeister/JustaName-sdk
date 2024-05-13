---
id: "SubnameAcceptRoute"
title: "Interface: SubnameAcceptRoute"
sidebar_label: "SubnameAcceptRoute"
sidebar_position: 0
custom_edit_url: null
---

Configures the route for accepting a subname invitation.

 SubnameAcceptRoute

## Hierarchy

- [`IRoute`](IRoute.md)

  ↳ **`SubnameAcceptRoute`**

## Properties

### headers

• **headers**: [`ApiKeyHeaders`](ApiKeyHeaders.md) & [`SIWEHeaders`](SIWEHeaders.md)

Combined API key and SIWE authentication headers required for the request.

#### Overrides

[IRoute](IRoute.md).[headers](IRoute.md#headers)

#### Defined in

[lib/types/subnames/accept.ts:112](https://github.com/JustaName-id/JustaName-sdk/blob/4ff9084/packages/@justaname.id/sdk/src/lib/types/subnames/accept.ts#L112)

___

### request

• **request**: [`SubnameAcceptRequest`](SubnameAcceptRequest.md)

The data structure for the claim request.

#### Overrides

[IRoute](IRoute.md).[request](IRoute.md#request)

#### Defined in

[lib/types/subnames/accept.ts:110](https://github.com/JustaName-id/JustaName-sdk/blob/4ff9084/packages/@justaname.id/sdk/src/lib/types/subnames/accept.ts#L110)

___

### response

• **response**: [`SubnameAcceptResponse`](SubnameAcceptResponse.md)

The expected structure for the claim response.

#### Overrides

[IRoute](IRoute.md).[response](IRoute.md#response)

#### Defined in

[lib/types/subnames/accept.ts:111](https://github.com/JustaName-id/JustaName-sdk/blob/4ff9084/packages/@justaname.id/sdk/src/lib/types/subnames/accept.ts#L111)