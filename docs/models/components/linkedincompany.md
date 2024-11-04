# LinkedInCompany

## Example Usage

```typescript
import { LinkedInCompany } from "exfunc/models/components";

let value: LinkedInCompany = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `url`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | URL to the company's profile                                                 |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Name of the company                                                          |
| `location`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | Location of the company                                                      |
| `industry`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | Industry in which the company operates                                       |
| `overview`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | Overview or description of the company                                       |
| `size`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Size of the company (e.g., number of employees)                              |
| `specialties`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | Commma separated string of specialties or areas of expertise for the company |
| `websiteUrl`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | Company's website URL                                                        |
| `funding`                                                                    | [components.Funding](../../models/components/funding.md)                     | :heavy_minus_sign:                                                           | Funding information for the company                                          |