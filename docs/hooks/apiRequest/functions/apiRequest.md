[**the-cdj-ui**](../../../README.md)

***

[the-cdj-ui](../../../README.md) / [hooks/apiRequest](../README.md) / apiRequest

# Function: apiRequest()

> **apiRequest**\<`T`\>(`url`, `options`?): `Promise`\<`T`\>

Makes an API request to the specified URL with the given options.

## Type Parameters

• **T**

## Parameters

### url

`string`

The endpoint to call, relative to `API_BASE_URL`.

### options?

[`ApiOptions`](../interfaces/ApiOptions.md) = `DEFAULT_OPTIONS`

The options to use for the
request.

## Returns

`Promise`\<`T`\>

A promise that resolves to the response data as a
generic type `T`.

## Throws

Throws an error if the network response is not OK or if the
request fails. The error contains the response body as a JSON string.

## Example

```ts
const options: ApiOptions = {
  method: 'POST',
};

const response = await apiRequest('/test-endpoint', options);
```

## Defined in

[src/hooks/apiRequest.ts:47](https://github.com/hiyaryan/the-cdj-ui/blob/66083ffd99c70e3de7b7a7a2d26584eb05be11c4/src/hooks/apiRequest.ts#L47)
