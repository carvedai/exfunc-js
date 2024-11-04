# Twitter
(*twitter*)

## Overview

### Available Operations

* [getTweet](#gettweet) - Get a tweet by ID
* [getUser](#getuser) - Get a Twitter user by either user ID or username
* [getUserFollowers](#getuserfollowers) - Get a Twitter user's followers by username
* [getUserFollowings](#getuserfollowings) - Get a Twitter user's followings by username
* [getUserTweets](#getusertweets) - Get a Twitter user's tweets by username
* [searchTweets](#searchtweets) - Search Twitter for tweets
* [searchUsers](#searchusers) - Search Twitter for users

## getTweet

Get tweet details given a tweet ID

### Example Usage

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.twitter.getTweet({
    tweetId: "<id>",
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
import { twitterGetTweet } from "exfunc/funcs/twitterGetTweet.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await twitterGetTweet(exfunc, {
    tweetId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetTweetRequestBody](../../models/operations/gettweetrequestbody.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTweetResponseBody](../../models/operations/gettweetresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## getUser

Get user details given a Twitter user ID or username (handle)

### Example Usage

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.twitter.getUser({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ExfuncCore } from "exfunc/core.js";
import { twitterGetUser } from "exfunc/funcs/twitterGetUser.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await twitterGetUser(exfunc, {});

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
| `request`                                                                                                                                                                      | [operations.GetUserRequestBody](../../models/operations/getuserrequestbody.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetUserResponseBody](../../models/operations/getuserresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## getUserFollowers

Get a list of followers given a Twitter username (handle)

### Example Usage

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.twitter.getUserFollowers({
    username: "Timmy_Bogan",
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
import { twitterGetUserFollowers } from "exfunc/funcs/twitterGetUserFollowers.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await twitterGetUserFollowers(exfunc, {
    username: "Timmy_Bogan",
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
| `request`                                                                                                                                                                      | [operations.GetUserFollowersRequestBody](../../models/operations/getuserfollowersrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetUserFollowersResponseBody](../../models/operations/getuserfollowersresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## getUserFollowings

Get a list of followings given a Twitter username (handle)

### Example Usage

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.twitter.getUserFollowings({
    username: "Nathaniel84",
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
import { twitterGetUserFollowings } from "exfunc/funcs/twitterGetUserFollowings.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await twitterGetUserFollowings(exfunc, {
    username: "Nathaniel84",
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
| `request`                                                                                                                                                                      | [operations.GetUserFollowingsRequestBody](../../models/operations/getuserfollowingsrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetUserFollowingsResponseBody](../../models/operations/getuserfollowingsresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## getUserTweets

Get a list of tweets given a Twitter username (handle)

### Example Usage

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.twitter.getUserTweets({
    username: "Fatima_Mosciski",
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
import { twitterGetUserTweets } from "exfunc/funcs/twitterGetUserTweets.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await twitterGetUserTweets(exfunc, {
    username: "Fatima_Mosciski",
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
| `request`                                                                                                                                                                      | [operations.GetUserTweetsRequestBody](../../models/operations/getusertweetsrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetUserTweetsResponseBody](../../models/operations/getusertweetsresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## searchTweets

Search tweets on Twitter for a given query

### Example Usage

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.twitter.searchTweets({
    query: "<value>",
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
import { twitterSearchTweets } from "exfunc/funcs/twitterSearchTweets.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await twitterSearchTweets(exfunc, {
    query: "<value>",
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
| `request`                                                                                                                                                                      | [operations.SearchTweetsRequestBody](../../models/operations/searchtweetsrequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchTweetsResponseBody](../../models/operations/searchtweetsresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## searchUsers

Search users on Twitter for a given query

### Example Usage

```typescript
import { Exfunc } from "exfunc";

const exfunc = new Exfunc({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const result = await exfunc.twitter.searchUsers({
    query: "<value>",
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
import { twitterSearchUsers } from "exfunc/funcs/twitterSearchUsers.js";

// Use `ExfuncCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const exfunc = new ExfuncCore({
  apiKey: process.env["EXFUNC_API_KEY"] ?? "",
});

async function run() {
  const res = await twitterSearchUsers(exfunc, {
    query: "<value>",
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
| `request`                                                                                                                                                                      | [operations.SearchUsersRequestBody](../../models/operations/searchusersrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchUsersResponseBody](../../models/operations/searchusersresponsebody.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.UserError   | 400                | application/json   |
| errors.ServerError | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |