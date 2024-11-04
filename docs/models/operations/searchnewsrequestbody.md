# SearchNewsRequestBody

## Example Usage

```typescript
import { SearchNewsRequestBody } from "exfunc/models/operations";

let value: SearchNewsRequestBody = {
  query: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `query`                                                              | *string*                                                             | :heavy_check_mark:                                                   | The search query for news articles                                   |
| `countryCode`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | The country code for filtering news                                  |
| `perPage`                                                            | *number*                                                             | :heavy_minus_sign:                                                   | Number of news articles to return per page (default is 10)           |
| `timePublished`                                                      | [operations.TimePublished](../../models/operations/timepublished.md) | :heavy_minus_sign:                                                   | Filter news articles published after this date                       |