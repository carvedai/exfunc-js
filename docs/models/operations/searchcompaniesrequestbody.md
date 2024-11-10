# SearchCompaniesRequestBody

## Example Usage

```typescript
import { SearchCompaniesRequestBody } from "exfunc/models/operations";

let value: SearchCompaniesRequestBody = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | The name of the company to search for                                                      |
| `locations`                                                                                | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | List of locations to filter the search                                                     |
| `sizes`                                                                                    | [components.LinkedInCompanySize](../../models/components/linkedincompanysize.md)[]         | :heavy_minus_sign:                                                                         | List of company sizes to filter the search                                                 |
| `industries`                                                                               | [components.LinkedInCompanyIndustry](../../models/components/linkedincompanyindustry.md)[] | :heavy_minus_sign:                                                                         | List of industry tags to filter the search                                                 |
| `page`                                                                                     | *number*                                                                                   | :heavy_minus_sign:                                                                         | Page number for pagination (default is 1)                                                  |