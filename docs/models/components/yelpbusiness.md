# YelpBusiness

## Example Usage

```typescript
import { YelpBusiness } from "exfunc/models/components";

let value: YelpBusiness = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `businessId`                                                     | *string*                                                         | :heavy_minus_sign:                                               | Unique identifier for the business                               |
| `alias`                                                          | *string*                                                         | :heavy_minus_sign:                                               | A unique identifier used in the URL for the business             |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | The name of the business                                         |
| `address`                                                        | *string*                                                         | :heavy_minus_sign:                                               | The physical address of the business                             |
| `website`                                                        | *string*                                                         | :heavy_minus_sign:                                               | The website URL of the business                                  |
| `businessPageLink`                                               | *string*                                                         | :heavy_minus_sign:                                               | The link to the business's page on the platform                  |
| `categories`                                                     | [components.Categories](../../models/components/categories.md)[] | :heavy_minus_sign:                                               | List of categories that the business falls under                 |
| `rating`                                                         | *number*                                                         | :heavy_minus_sign:                                               | Average rating of the business                                   |
| `reviewCount`                                                    | *number*                                                         | :heavy_minus_sign:                                               | Total number of reviews for the business                         |
| `highlights`                                                     | *string*[]                                                       | :heavy_minus_sign:                                               | Highlights or features of the business                           |
| `serviceArea`                                                    | *string*                                                         | :heavy_minus_sign:                                               | The area where the business provides services                    |
| `neighborhoods`                                                  | *string*[]                                                       | :heavy_minus_sign:                                               | List of neighborhoods where the business is located              |