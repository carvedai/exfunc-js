# GetUserTweetsRequestBody

## Example Usage

```typescript
import { GetUserTweetsRequestBody } from "exfunc/models/operations";

let value: GetUserTweetsRequestBody = {
  username: "Floy66",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `username`                                                | *string*                                                  | :heavy_check_mark:                                        | The username of the Twitter user whose tweets to retrieve |
| `count`                                                   | *number*                                                  | :heavy_minus_sign:                                        | The number of tweets to retrieve                          |