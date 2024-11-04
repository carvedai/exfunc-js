# SearchTweetsRequestBody

## Example Usage

```typescript
import { SearchTweetsRequestBody } from "exfunc/models/operations";

let value: SearchTweetsRequestBody = {
  query: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `query`                                            | *string*                                           | :heavy_check_mark:                                 | The search query string                            |
| `type`                                             | [operations.Type](../../models/operations/type.md) | :heavy_minus_sign:                                 | The type of search                                 |
| `count`                                            | *number*                                           | :heavy_minus_sign:                                 | The number of results to retrieve                  |