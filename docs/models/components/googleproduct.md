# GoogleProduct

## Example Usage

```typescript
import { GoogleProduct } from "exfunc/models/components";

let value: GoogleProduct = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `productId`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | The unique identifier for the product                               |
| `title`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | The title of the product                                            |
| `description`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | A detailed description of the product                               |
| `photos`                                                            | *string*[]                                                          | :heavy_minus_sign:                                                  | An array of URLs for the product photos                             |
| `attributes`                                                        | Record<string, *string*>                                            | :heavy_minus_sign:                                                  | A set of attributes for the product, represented as key-value pairs |
| `rating`                                                            | *number*                                                            | :heavy_minus_sign:                                                  | The average rating of the product                                   |
| `pageUrl`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | The URL link to the product page                                    |
| `numReviews`                                                        | *number*                                                            | :heavy_minus_sign:                                                  | The total number of reviews for the product                         |
| `reviewsPerRating`                                                  | Record<string, *number*>                                            | :heavy_minus_sign:                                                  | The number of reviews for each rating level                         |
| `productDetails`                                                    | Record<string, *string*>                                            | :heavy_minus_sign:                                                  | Detailed information about the product                              |
| `productSpecs`                                                      | Record<string, *string*>                                            | :heavy_minus_sign:                                                  | Technical specifications of the product                             |