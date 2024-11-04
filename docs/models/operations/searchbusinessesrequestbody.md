# SearchBusinessesRequestBody

## Example Usage

```typescript
import { SearchBusinessesRequestBody } from "exfunc/models/operations";

let value: SearchBusinessesRequestBody = {
  query: "<value>",
  location: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `query`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | The search term to find businesses                                                     |
| `location`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | The location to search for businesses                                                  |
| `sortBy`                                                                               | [operations.SearchBusinessesSortBy](../../models/operations/searchbusinessessortby.md) | :heavy_minus_sign:                                                                     | The criteria to sort the results (e.g., "recommended", "highest_rated", etc.)          |
| `start`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | The starting index for pagination (default is 0)                                       |