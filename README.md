# Exfunc Typescript SDK

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *exfunc* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=exfunc&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

Exfunc Typescript SDK is a library that allows you to easily take web actions on websites from your Typescript codebase.

<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Exfunc Typescript SDK](#exfunc-typescript-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add exfunc
```

### PNPM

```bash
pnpm add exfunc
```

### Bun

```bash
bun add exfunc
```

### Yarn

```bash
yarn add exfunc zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.glassdoor.searchJobPostings({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [glassdoor](docs/sdks/glassdoor/README.md)

* [searchJobPostings](docs/sdks/glassdoor/README.md#searchjobpostings) - Search job postings on Glassdoor

### [google](docs/sdks/google/README.md)

* [getJobPosting](docs/sdks/google/README.md#getjobposting) - Get job posting details from Google
* [getProduct](docs/sdks/google/README.md#getproduct) - Get product details from Google
* [getProductReviews](docs/sdks/google/README.md#getproductreviews) - Get product reviews from Google
* [searchJobPostings](docs/sdks/google/README.md#searchjobpostings) - Search job postings on Google
* [searchNews](docs/sdks/google/README.md#searchnews) - Search news articles on Google
* [searchProducts](docs/sdks/google/README.md#searchproducts) - Search products on Google
* [searchWeb](docs/sdks/google/README.md#searchweb) - Search web on Google

### [indeed](docs/sdks/indeed/README.md)

* [searchJobPostings](docs/sdks/indeed/README.md#searchjobpostings) - Search job postings on Indeed

### [linkedin](docs/sdks/linkedin/README.md)

* [getCompany](docs/sdks/linkedin/README.md#getcompany) - Get LinkedIn company info
* [getJobPosting](docs/sdks/linkedin/README.md#getjobposting) - Get LinkedIn job posting info
* [getPerson](docs/sdks/linkedin/README.md#getperson) - Get LinkedIn person profile info
* [searchCompanies](docs/sdks/linkedin/README.md#searchcompanies) - Search for LinkedIn companies
* [searchJobPostings](docs/sdks/linkedin/README.md#searchjobpostings) - Search for LinkedIn job postings
* [searchPeople](docs/sdks/linkedin/README.md#searchpeople) - Search for LinkedIn people

### [navigator](docs/sdks/navigator/README.md)

* [getTask](docs/sdks/navigator/README.md#gettask) - Get web navigator task results
* [startTask](docs/sdks/navigator/README.md#starttask) - Start a web navigator task
* [scrape](docs/sdks/navigator/README.md#scrape) - Scrape a web page

### [skyscanner](docs/sdks/skyscanner/README.md)

* [searchFlights](docs/sdks/skyscanner/README.md#searchflights) - Search flights on SkyScanner

### [twitter](docs/sdks/twitter/README.md)

* [getTweet](docs/sdks/twitter/README.md#gettweet) - Get a tweet by ID
* [getUser](docs/sdks/twitter/README.md#getuser) - Get a Twitter user by either user ID or username
* [getUserFollowers](docs/sdks/twitter/README.md#getuserfollowers) - Get a Twitter user's followers by username
* [getUserFollowings](docs/sdks/twitter/README.md#getuserfollowings) - Get a Twitter user's followings by username
* [getUserTweets](docs/sdks/twitter/README.md#getusertweets) - Get a Twitter user's tweets by username
* [searchTweets](docs/sdks/twitter/README.md#searchtweets) - Search Twitter for tweets
* [searchUsers](docs/sdks/twitter/README.md#searchusers) - Search Twitter for users

### [yelp](docs/sdks/yelp/README.md)

* [getBusiness](docs/sdks/yelp/README.md#getbusiness) - Get business details from Yelp
* [getBusinessReviews](docs/sdks/yelp/README.md#getbusinessreviews) - Get Yelp reviews for a business
* [searchBusinesses](docs/sdks/yelp/README.md#searchbusinesses) - Search for businesses on Yelp

### [zillow](docs/sdks/zillow/README.md)

* [getProperty](docs/sdks/zillow/README.md#getproperty) - Get property details from Zillow
* [searchProperties](docs/sdks/zillow/README.md#searchproperties) - Search for properties on Zillow

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`glassdoorSearchJobPostings`](docs/sdks/glassdoor/README.md#searchjobpostings) - Search job postings on Glassdoor
- [`googleGetJobPosting`](docs/sdks/google/README.md#getjobposting) - Get job posting details from Google
- [`googleGetProduct`](docs/sdks/google/README.md#getproduct) - Get product details from Google
- [`googleGetProductReviews`](docs/sdks/google/README.md#getproductreviews) - Get product reviews from Google
- [`googleSearchJobPostings`](docs/sdks/google/README.md#searchjobpostings) - Search job postings on Google
- [`googleSearchNews`](docs/sdks/google/README.md#searchnews) - Search news articles on Google
- [`googleSearchProducts`](docs/sdks/google/README.md#searchproducts) - Search products on Google
- [`googleSearchWeb`](docs/sdks/google/README.md#searchweb) - Search web on Google
- [`indeedSearchJobPostings`](docs/sdks/indeed/README.md#searchjobpostings) - Search job postings on Indeed
- [`linkedinGetCompany`](docs/sdks/linkedin/README.md#getcompany) - Get LinkedIn company info
- [`linkedinGetJobPosting`](docs/sdks/linkedin/README.md#getjobposting) - Get LinkedIn job posting info
- [`linkedinGetPerson`](docs/sdks/linkedin/README.md#getperson) - Get LinkedIn person profile info
- [`linkedinSearchCompanies`](docs/sdks/linkedin/README.md#searchcompanies) - Search for LinkedIn companies
- [`linkedinSearchJobPostings`](docs/sdks/linkedin/README.md#searchjobpostings) - Search for LinkedIn job postings
- [`linkedinSearchPeople`](docs/sdks/linkedin/README.md#searchpeople) - Search for LinkedIn people
- [`navigatorGetTask`](docs/sdks/navigator/README.md#gettask) - Get web navigator task results
- [`navigatorScrape`](docs/sdks/navigator/README.md#scrape) - Scrape a web page
- [`navigatorStartTask`](docs/sdks/navigator/README.md#starttask) - Start a web navigator task
- [`skyscannerSearchFlights`](docs/sdks/skyscanner/README.md#searchflights) - Search flights on SkyScanner
- [`twitterGetTweet`](docs/sdks/twitter/README.md#gettweet) - Get a tweet by ID
- [`twitterGetUser`](docs/sdks/twitter/README.md#getuser) - Get a Twitter user by either user ID or username
- [`twitterGetUserFollowers`](docs/sdks/twitter/README.md#getuserfollowers) - Get a Twitter user's followers by username
- [`twitterGetUserFollowings`](docs/sdks/twitter/README.md#getuserfollowings) - Get a Twitter user's followings by username
- [`twitterGetUserTweets`](docs/sdks/twitter/README.md#getusertweets) - Get a Twitter user's tweets by username
- [`twitterSearchTweets`](docs/sdks/twitter/README.md#searchtweets) - Search Twitter for tweets
- [`twitterSearchUsers`](docs/sdks/twitter/README.md#searchusers) - Search Twitter for users
- [`yelpGetBusiness`](docs/sdks/yelp/README.md#getbusiness) - Get business details from Yelp
- [`yelpGetBusinessReviews`](docs/sdks/yelp/README.md#getbusinessreviews) - Get Yelp reviews for a business
- [`yelpSearchBusinesses`](docs/sdks/yelp/README.md#searchbusinesses) - Search for businesses on Yelp
- [`zillowGetProperty`](docs/sdks/zillow/README.md#getproperty) - Get property details from Zillow
- [`zillowSearchProperties`](docs/sdks/zillow/README.md#searchproperties) - Search for properties on Zillow

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.glassdoor.searchJobPostings({}, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.glassdoor.searchJobPostings({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `searchJobPostings` method may throw the following errors:

| Error Type         | Status Code | Content Type     |
| ------------------ | ----------- | ---------------- |
| errors.UserError   | 400         | application/json |
| errors.ServerError | 500         | application/json |
| errors.SDKError    | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { Exfunc } from "exfunc";
import {
  SDKValidationError,
  ServerError,
  UserError,
} from "exfunc/models/errors";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  let result;
  try {
    result = await exfunc.glassdoor.searchJobPostings({});

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof UserError): {
        // Handle err.data$: UserErrorData
        console.error(err);
        return;
      }
      case (err instanceof ServerError): {
        // Handle err.data$: ServerErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  serverURL: "https://api.exfunc.com",
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.glassdoor.searchJobPostings({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Exfunc } from "exfunc";
import { HTTPClient } from "exfunc/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Exfunc({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  | Environment Variable |
| -------- | ------ | ------- | -------------------- |
| `apiKey` | apiKey | API key | `EXFUNC_API_KEY`     |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.glassdoor.searchJobPostings({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Exfunc } from "exfunc";

const sdk = new Exfunc({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `EXFUNC_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=exfunc&utm_campaign=typescript)
