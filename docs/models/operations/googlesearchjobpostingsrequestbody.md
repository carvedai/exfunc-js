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
| `location`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Location to filter job postings                                |
| `countryCode`                                                  | *string*                                                       | :heavy_minus_sign:                                             | The country code to filter job postings                        |
| `datePosted`                                                   | [operations.DatePosted](../../models/operations/dateposted.md) | :heavy_minus_sign:                                             | Filter for job postings based on when they were posted         |
| `jobTypes`                                                     | [operations.JobTypes](../../models/operations/jobtypes.md)[]   | :heavy_minus_sign:                                             | Job types to filter (e.g., Full-time, Part-time)               |
| `page`                                                         | *number*                                                       | :heavy_minus_sign:                                             | Page number for pagination (default is 1)                      |
| `numPages`                                                     | *number*                                                       | :heavy_minus_sign:                                             | Number of pages to return, starting from page (default is 1)   |