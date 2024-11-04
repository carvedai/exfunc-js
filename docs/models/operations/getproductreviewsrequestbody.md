# GetProductReviewsRequestBody

## Example Usage

```typescript
import { GetProductReviewsRequestBody } from "exfunc/models/operations";

let value: GetProductReviewsRequestBody = {
  productId: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `productId`                                          | *string*                                             | :heavy_check_mark:                                   | The ID of the product for which to retrieve reviews  |
| `countryCode`                                        | *string*                                             | :heavy_minus_sign:                                   | The country code for the reviews                     |
| `perPage`                                            | *number*                                             | :heavy_minus_sign:                                   | Number of reviews to return per page (default is 10) |