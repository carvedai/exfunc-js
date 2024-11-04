# SearchCompaniesRequestBody

## Example Usage

```typescript
import { SearchCompaniesRequestBody } from "exfunc/models/operations";

let value: SearchCompaniesRequestBody = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `name`                                    | *string*                                  | :heavy_minus_sign:                        | The name of the company to search for     |
| `locations`                               | *string*[]                                | :heavy_minus_sign:                        | N/A                                       |
| `sizes`                                   | *string*[]                                | :heavy_minus_sign:                        | N/A                                       |
| `industries`                              | *string*[]                                | :heavy_minus_sign:                        | N/A                                       |
| `page`                                    | *number*                                  | :heavy_minus_sign:                        | Page number for pagination (default is 1) |