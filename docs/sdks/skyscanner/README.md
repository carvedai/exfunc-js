# Skyscanner
(*skyscanner*)

## Overview

### Available Operations

* [searchFlights](#searchflights) - Search flights on SkyScanner

## searchFlights

Search flights on SkyScanner for given origin, destination, departure date and return date

### Example Usage

<!-- UsageSnippet language="typescript" operationID="search-flights" method="post" path="/skyscanner/search-flights" -->
```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.skyscanner.searchFlights({
    origin: "<value>",
    destination: "<value>",
    flightType: "roundtrip",
    departDate: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ExfuncCore } from "exfunc/core.js";
import { skyscannerSearchFlights } from "exfunc/funcs/skyscannerSearchFlights.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await skyscannerSearchFlights(exfunc, {
    origin: "<value>",
    destination: "<value>",
    flightType: "roundtrip",
    departDate: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("skyscannerSearchFlights failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchFlightsRequestBody](../../models/operations/searchflightsrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchFlightsResponseBody](../../models/operations/searchflightsresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |