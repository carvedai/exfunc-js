# SearchProductsRequestBody

## Example Usage

```typescript
import { SearchProductsRequestBody } from "exfunc/models/operations";

let value: SearchProductsRequestBody = {
  query: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `query`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | The search query for products                                              |
| `countryCode`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | The country code for filtering products                                    |
| `page`                                                                     | *number*                                                                   | :heavy_minus_sign:                                                         | Page number for pagination (default is 1)                                  |
| `perPage`                                                                  | *number*                                                                   | :heavy_minus_sign:                                                         | Number of products to return per page (default is 10)                      |
| `sortBy`                                                                   | [operations.SortBy](../../models/operations/sortby.md)                     | :heavy_minus_sign:                                                         | Sort the results by a specific field                                       |
| `productCondition`                                                         | [operations.ProductCondition](../../models/operations/productcondition.md) | :heavy_minus_sign:                                                         | Filter products by condition                                               |