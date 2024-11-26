# SearchPeopleRequestBody

## Example Usage

```typescript
import { SearchPeopleRequestBody } from "exfunc/models/operations";

let value: SearchPeopleRequestBody = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `keywords`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | Keywords to search for in people profiles                                                  |
| `locations`                                                                                | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | List of locations to filter the search                                                     |
| `titles`                                                                                   | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | List of job titles to filter the search                                                    |
| `seniorities`                                                                              | [operations.Seniorities](../../models/operations/seniorities.md)[]                         | :heavy_minus_sign:                                                                         | List of seniority levels to filter the search                                              |
| `companySizes`                                                                             | [components.LinkedInCompanySize](../../models/components/linkedincompanysize.md)[]         | :heavy_minus_sign:                                                                         | List of company size ranges to filter the search                                           |
| `companyIndustries`                                                                        | [components.LinkedInCompanyIndustry](../../models/components/linkedincompanyindustry.md)[] | :heavy_minus_sign:                                                                         | List of company industry tags to filter the search                                         |
| `companyDomains`                                                                           | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | List of company domains to filter the search                                               |
| `page`                                                                                     | *number*                                                                                   | :heavy_minus_sign:                                                                         | Page number for pagination (default is 1)                                                  |