# SearchWebRequestBody

## Example Usage

```typescript
import { SearchWebRequestBody } from "exfunc/models/operations";

let value: SearchWebRequestBody = {
  query: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `query`                                                    | *string*                                                   | :heavy_check_mark:                                         | The search query                                           |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | Number of news articles to return per page (default is 10) |