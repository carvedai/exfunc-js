# GetUserFollowersRequestBody

## Example Usage

```typescript
import { GetUserFollowersRequestBody } from "exfunc/models/operations";

let value: GetUserFollowersRequestBody = {
  username: "Joy_Gleason",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `username`                                                   | *string*                                                     | :heavy_check_mark:                                           | The username of the Twitter user whose followers to retrieve |
| `count`                                                      | *number*                                                     | :heavy_minus_sign:                                           | The number of followers to retrieve                          |