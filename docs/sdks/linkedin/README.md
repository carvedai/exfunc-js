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

Get LinkedIn company info from a LinkedIn company url

### Example Usage

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.linkedin.getCompany({
    companyUrl: "https://minty-adaptation.biz/",
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
import { linkedinGetCompany } from "exfunc/funcs/linkedinGetCompany.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await linkedinGetCompany(exfunc, {
    companyUrl: "https://minty-adaptation.biz/",
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

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.linkedin.getJobPosting({
    jobPostingUrl: "https://exalted-comestible.info",
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
import { linkedinGetJobPosting } from "exfunc/funcs/linkedinGetJobPosting.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await linkedinGetJobPosting(exfunc, {
    jobPostingUrl: "https://exalted-comestible.info",
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

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.linkedin.getPerson({
    personUrl: "https://silky-spring.biz/",
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
import { linkedinGetPerson } from "exfunc/funcs/linkedinGetPerson.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await linkedinGetPerson(exfunc, {
    personUrl: "https://silky-spring.biz/",
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

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.linkedin.searchCompanies({});

  // Handle the result
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

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.linkedin.searchJobPostings({
    keywords: "<value>",
    location: "<value>",
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
import { linkedinSearchJobPostings } from "exfunc/funcs/linkedinSearchJobPostings.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await linkedinSearchJobPostings(exfunc, {
    keywords: "<value>",
    location: "<value>",
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

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.linkedin.searchPeople({
    keywords: "<value>",
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
import { linkedinSearchPeople } from "exfunc/funcs/linkedinSearchPeople.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await linkedinSearchPeople(exfunc, {
    keywords: "<value>",
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