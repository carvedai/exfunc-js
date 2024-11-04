# Tweet

## Example Usage

```typescript
import { Tweet } from "exfunc/models/components";

let value: Tweet = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `tweetId`                                     | *string*                                      | :heavy_minus_sign:                            | Unique identifier for the tweet               |
| `fullText`                                    | *string*                                      | :heavy_minus_sign:                            | The full text of the tweet                    |
| `createdAt`                                   | *string*                                      | :heavy_minus_sign:                            | The timestamp when the tweet was created      |
| `authorUserId`                                | *string*                                      | :heavy_minus_sign:                            | The ID of the user who authored the tweet     |
| `bookmarkCount`                               | *number*                                      | :heavy_minus_sign:                            | Number of times the tweet has been bookmarked |
| `replyCount`                                  | *number*                                      | :heavy_minus_sign:                            | Number of replies to the tweet                |
| `retweetCount`                                | *number*                                      | :heavy_minus_sign:                            | Number of times the tweet has been retweeted  |
| `retweeted`                                   | *boolean*                                     | :heavy_minus_sign:                            | Indicates if the tweet is a retweet           |
| `urls`                                        | *string*[]                                    | :heavy_minus_sign:                            | List of URLs included in the tweet            |