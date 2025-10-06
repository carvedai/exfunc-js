# Linkedin
(*linkedin*)

## Overview

### Available Operations

* [getCompany](#getcompany) - Get LinkedIn company info
* [getJobPosting](#getjobposting) - Get LinkedIn job posting info
* [getPerson](#getperson) - Get LinkedIn person profile info
* [searchCompanies](#searchcompanies) - Search for LinkedIn companies
* [searchJobPostings](#searchjobpostings) - Search for LinkedIn job postings
* [searchPeople](#searchpeople) - Search for LinkedIn people

## getCompany

Get LinkedIn company info from either a LinkedIn company url or company website url. Only one is required.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-company" method="post" path="/linkedin/get-company" -->
```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.linkedin.getCompany({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ExfuncCore } from "exfunc/core.js";
import { linkedinGetCompany } from "exfunc/funcs/linkedinGetCompany.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await linkedinGetCompany(exfunc, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linkedinGetCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCompanyRequestBody](../../models/operations/getcompanyrequestbody.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCompanyResponseBody](../../models/operations/getcompanyresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## getJobPosting

Get LinkedIn job posting info from a LinkedIn job posting url

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-job-posting" method="post" path="/linkedin/get-job-posting" -->
```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.linkedin.getJobPosting({
    jobPostingUrl: "https://second-hand-printer.org",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ExfuncCore } from "exfunc/core.js";
import { linkedinGetJobPosting } from "exfunc/funcs/linkedinGetJobPosting.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await linkedinGetJobPosting(exfunc, {
    jobPostingUrl: "https://second-hand-printer.org",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linkedinGetJobPosting failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetJobPostingRequestBody](../../models/operations/getjobpostingrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetJobPostingResponseBody](../../models/operations/getjobpostingresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## getPerson

Get LinkedIn person profile info from a LinkedIn person profile url

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-person" method="post" path="/linkedin/get-person" -->
```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.linkedin.getPerson({
    personUrl: "https://unsteady-suitcase.net/",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ExfuncCore } from "exfunc/core.js";
import { linkedinGetPerson } from "exfunc/funcs/linkedinGetPerson.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await linkedinGetPerson(exfunc, {
    personUrl: "https://unsteady-suitcase.net/",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linkedinGetPerson failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPersonRequestBody](../../models/operations/getpersonrequestbody.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPersonResponseBody](../../models/operations/getpersonresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## searchCompanies

Search for companies on LinkedIn for a given name, locations, and other criteria

### Example Usage

<!-- UsageSnippet language="typescript" operationID="search-companies" method="post" path="/linkedin/search-companies" -->
```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.linkedin.searchCompanies({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ExfuncCore } from "exfunc/core.js";
import { linkedinSearchCompanies } from "exfunc/funcs/linkedinSearchCompanies.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await linkedinSearchCompanies(exfunc, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linkedinSearchCompanies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchCompaniesRequestBody](../../models/operations/searchcompaniesrequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchCompaniesResponseBody](../../models/operations/searchcompaniesresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## searchJobPostings

Search for job postings on LinkedIn for a given keywords, location, and other criteria

### Example Usage

<!-- UsageSnippet language="typescript" operationID="search-job-postings" method="post" path="/linkedin/search-job-postings" -->
```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.linkedin.searchJobPostings({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ExfuncCore } from "exfunc/core.js";
import { linkedinSearchJobPostings } from "exfunc/funcs/linkedinSearchJobPostings.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await linkedinSearchJobPostings(exfunc, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linkedinSearchJobPostings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchJobPostingsRequestBody](../../models/operations/searchjobpostingsrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchJobPostingsResponseBody](../../models/operations/searchjobpostingsresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## searchPeople

Search for people on LinkedIn for a given keywords, locations, and other criteria

### Example Usage

<!-- UsageSnippet language="typescript" operationID="search-people" method="post" path="/linkedin/search-people" -->
```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.linkedin.searchPeople({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ExfuncCore } from "exfunc/core.js";
import { linkedinSearchPeople } from "exfunc/funcs/linkedinSearchPeople.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await linkedinSearchPeople(exfunc, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linkedinSearchPeople failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchPeopleRequestBody](../../models/operations/searchpeoplerequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchPeopleResponseBody](../../models/operations/searchpeopleresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |