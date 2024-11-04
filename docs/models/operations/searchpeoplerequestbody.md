# SearchPeopleRequestBody

## Example Usage

```typescript
import { SearchPeopleRequestBody } from "exfunc/models/operations";

let value: SearchPeopleRequestBody = {
  keywords: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `keywords`                                | *string*                                  | :heavy_check_mark:                        | Keywords to search for in people profiles |
| `locations`                               | *string*[]                                | :heavy_minus_sign:                        | N/A                                       |
| `titles`                                  | *string*[]                                | :heavy_minus_sign:                        | N/A                                       |
| `seniorities`                             | *string*[]                                | :heavy_minus_sign:                        | N/A                                       |
| `companySizes`                            | *string*[]                                | :heavy_minus_sign:                        | N/A                                       |
| `companyIndustries`                       | *string*[]                                | :heavy_minus_sign:                        | N/A                                       |
| `companyDomains`                          | *string*[]                                | :heavy_minus_sign:                        | N/A                                       |
| `page`                                    | *number*                                  | :heavy_minus_sign:                        | Page number for pagination (default is 1) |