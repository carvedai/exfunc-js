# GoogleSearchJobPostingsRequestBody

## Example Usage

```typescript
import { GoogleSearchJobPostingsRequestBody } from "exfunc/models/operations";

let value: GoogleSearchJobPostingsRequestBody = {
  query: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `query`                                                        | *string*                                                       | :heavy_check_mark:                                             | The search query for job postings                              |
| `countryCode`                                                  | *string*                                                       | :heavy_minus_sign:                                             | The country code for filtering job postings                    |
| `datePosted`                                                   | [operations.DatePosted](../../models/operations/dateposted.md) | :heavy_minus_sign:                                             | Filter for job postings based on when they were posted         |
| `jobTypes`                                                     | [operations.JobTypes](../../models/operations/jobtypes.md)[]   | :heavy_minus_sign:                                             | Job types to filter (e.g., Full-time, Part-time)               |
| `page`                                                         | *number*                                                       | :heavy_minus_sign:                                             | Page number for pagination (default is 1)                      |
| `perPage`                                                      | *number*                                                       | :heavy_minus_sign:                                             | Number of news articles to return per page (default is 10)     |