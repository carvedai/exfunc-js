# LinkedInPerson

## Example Usage

```typescript
import { LinkedInPerson } from "exfunc/models/components";

let value: LinkedInPerson = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `url`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | URL to the person's profile                                        |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | Full name of the person                                            |
| `location`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | Location of the person                                             |
| `title`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | Job title of the person                                            |
| `companyName`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | Name of the company the person works for                           |
| `companyUrl`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | URL to the company profile                                         |
| `experiences`                                                      | [components.Experiences](../../models/components/experiences.md)[] | :heavy_minus_sign:                                                 | List of experiences or previous job roles of the person            |