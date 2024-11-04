# SearchPropertiesRequestBody

## Example Usage

```typescript
import { SearchPropertiesRequestBody } from "exfunc/models/operations";

let value: SearchPropertiesRequestBody = {
  location: "<value>",
  listingStatus: "sold",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `location`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | The location to search for properties                                                  |
| `listingStatus`                                                                        | [operations.ListingStatus](../../models/operations/listingstatus.md)                   | :heavy_check_mark:                                                                     | The status of the listings (e.g., "for_sale", "for_rent")                              |
| `sortBy`                                                                               | [operations.SearchPropertiesSortBy](../../models/operations/searchpropertiessortby.md) | :heavy_minus_sign:                                                                     | The criteria to sort the results (e.g., "newest", "lot_size")                          |
| `page`                                                                                 | *number*                                                                               | :heavy_minus_sign:                                                                     | The page number of results to retrieve                                                 |
| `minListingPrice`                                                                      | *number*                                                                               | :heavy_minus_sign:                                                                     | The minimum listing price for the properties                                           |
| `maxListingPrice`                                                                      | *number*                                                                               | :heavy_minus_sign:                                                                     | The maximum listing price for the properties                                           |
| `minNumBedrooms`                                                                       | [operations.MinNumBedrooms](../../models/operations/minnumbedrooms.md)                 | :heavy_minus_sign:                                                                     | The minimum number of bedrooms                                                         |
| `maxNumBedrooms`                                                                       | [operations.MaxNumBedrooms](../../models/operations/maxnumbedrooms.md)                 | :heavy_minus_sign:                                                                     | The maximum number of bedrooms                                                         |