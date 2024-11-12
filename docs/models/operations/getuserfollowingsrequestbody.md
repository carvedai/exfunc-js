# GetUserFollowingsRequestBody

## Example Usage

```typescript
import { GetUserFollowingsRequestBody } from "exfunc/models/operations";

let value: GetUserFollowingsRequestBody = {
  username: "Leora_Welch",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `username`                                                    | *string*                                                      | :heavy_check_mark:                                            | The username of the Twitter user whose followings to retrieve |
| `count`                                                       | *number*                                                      | :heavy_minus_sign:                                            | The number of followings to retrieve                          |