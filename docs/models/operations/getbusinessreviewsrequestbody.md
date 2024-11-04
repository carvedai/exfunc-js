# GetBusinessReviewsRequestBody

## Example Usage

```typescript
import { GetBusinessReviewsRequestBody } from "exfunc/models/operations";

let value: GetBusinessReviewsRequestBody = {
  businessId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `businessId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID of the business to retrieve reviews for                                             |
| `sortBy`                                                                                   | [operations.GetBusinessReviewsSortBy](../../models/operations/getbusinessreviewssortby.md) | :heavy_minus_sign:                                                                         | The criteria to sort reviews (e.g., "best_match", "newest", etc.)                          |
| `page`                                                                                     | *number*                                                                                   | :heavy_minus_sign:                                                                         | The page number of results to retrieve (default is 1)                                      |
| `perPage`                                                                                  | *number*                                                                                   | :heavy_minus_sign:                                                                         | The number of reviews to retrieve per page (default is 10)                                 |