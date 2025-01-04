# IndeedSearchJobPostingsRequestBody

## Example Usage

```typescript
import { IndeedSearchJobPostingsRequestBody } from "exfunc/models/operations";

let value: IndeedSearchJobPostingsRequestBody = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `query`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The search query for job postings                                                                            |
| `location`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Location to filter job postings                                                                              |
| `datePosted`                                                                                                 | [operations.IndeedSearchJobPostingsDatePosted](../../models/operations/indeedsearchjobpostingsdateposted.md) | :heavy_minus_sign:                                                                                           | Filter for job postings based on when they were posted                                                       |
| `nextToken`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Next token for pagination                                                                                    |