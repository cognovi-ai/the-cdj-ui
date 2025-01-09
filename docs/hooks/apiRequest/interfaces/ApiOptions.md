[**the-cdj-ui**](../../../README.md)

***

[the-cdj-ui](../../../README.md) / [hooks/apiRequest](../README.md) / ApiOptions

# Interface: ApiOptions

Options for configuring an API request.

## Properties

### body?

> `optional` **body**: `Record`\<`string`, `unknown`\>

The request body to send with
the request (e.g., JSON data).

#### Defined in

[src/hooks/apiRequest.ts:25](https://github.com/hiyaryan/the-cdj-ui/blob/66083ffd99c70e3de7b7a7a2d26584eb05be11c4/src/hooks/apiRequest.ts#L25)

***

### credentials?

> `optional` **credentials**: `RequestCredentials`

The credentials policy for
the request (e.g., 'include', 'same-origin', 'omit').

#### Defined in

[src/hooks/apiRequest.ts:27](https://github.com/hiyaryan/the-cdj-ui/blob/66083ffd99c70e3de7b7a7a2d26584eb05be11c4/src/hooks/apiRequest.ts#L27)

***

### headers

> **headers**: `Record`\<`string`, `string`\>

Headers to include in the
request (e.g., 'Content-Type', 'Authorization').

#### Defined in

[src/hooks/apiRequest.ts:26](https://github.com/hiyaryan/the-cdj-ui/blob/66083ffd99c70e3de7b7a7a2d26584eb05be11c4/src/hooks/apiRequest.ts#L26)

***

### method

> **method**: `Method`

The HTTP method to use for the request (e.g.,
'GET', 'POST', 'PUT', 'DELETE').

#### Defined in

[src/hooks/apiRequest.ts:24](https://github.com/hiyaryan/the-cdj-ui/blob/66083ffd99c70e3de7b7a7a2d26584eb05be11c4/src/hooks/apiRequest.ts#L24)
