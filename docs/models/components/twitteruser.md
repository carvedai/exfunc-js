# TwitterUser

## Example Usage

```typescript
import { TwitterUser } from "exfunc/models/components";

let value: TwitterUser = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `userId`                                    | *string*                                    | :heavy_minus_sign:                          | Unique identifier for the user              |
| `username`                                  | *string*                                    | :heavy_minus_sign:                          | The user's username                         |
| `name`                                      | *string*                                    | :heavy_minus_sign:                          | The name of the user                        |
| `description`                               | *string*                                    | :heavy_minus_sign:                          | A brief description of the user             |
| `url`                                       | *string*                                    | :heavy_minus_sign:                          | The attached URL on the user's profile page |
| `followingCount`                            | *number*                                    | :heavy_minus_sign:                          | Number of users the user is following       |
| `followerCount`                             | *number*                                    | :heavy_minus_sign:                          | Number of followers the user has            |