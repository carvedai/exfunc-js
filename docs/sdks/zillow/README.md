# Zillow
(*zillow*)

## Overview

### Available Operations

* [getProperty](#getproperty) - Get property details from Zillow
* [searchProperties](#searchproperties) - Search for properties on Zillow

## getProperty

Get property details on Zillow for a given property ID

### Example Usage

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.zillow.getProperty({
    propertyId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ExfuncCore } from "exfunc/core.js";
import { zillowGetProperty } from "exfunc/funcs/zillowGetProperty.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await zillowGetProperty(exfunc, {
    propertyId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPropertyRequestBody](../../models/operations/getpropertyrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPropertyResponseBody](../../models/operations/getpropertyresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## searchProperties

Search for properties on Zillow for a given location, listing status, and other criteria

### Example Usage

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.zillow.searchProperties({
    location: "<value>",
    listingStatus: "for_rent",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ExfuncCore } from "exfunc/core.js";
import { zillowSearchProperties } from "exfunc/funcs/zillowSearchProperties.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await zillowSearchProperties(exfunc, {
    location: "<value>",
    listingStatus: "for_rent",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchPropertiesRequestBody](../../models/operations/searchpropertiesrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchPropertiesResponseBody](../../models/operations/searchpropertiesresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |