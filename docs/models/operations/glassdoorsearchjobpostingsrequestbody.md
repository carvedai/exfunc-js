# GlassdoorSearchJobPostingsRequestBody

## Example Usage

```typescript
import { GlassdoorSearchJobPostingsRequestBody } from "exfunc/models/operations";

let value: GlassdoorSearchJobPostingsRequestBody = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `query`                                                        | *string*                                                       | :heavy_minus_sign:                                             | The search query for job postings                              |
| `location`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Location to filter job postings                                |
| `datePosted`                                                   | [operations.DatePosted](../../models/operations/dateposted.md) | :heavy_minus_sign:                                             | Filter for job postings based on when they were posted         |
| `nextToken`                                                    | *string*                                                       | :heavy_minus_sign:                                             | Next token for pagination                                      |