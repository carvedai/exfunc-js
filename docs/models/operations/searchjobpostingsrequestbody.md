# SearchJobPostingsRequestBody

## Example Usage

```typescript
import { SearchJobPostingsRequestBody } from "exfunc/models/operations";

let value: SearchJobPostingsRequestBody = {
  keywords: "<value>",
  location: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `keywords`                                                     | *string*                                                       | :heavy_check_mark:                                             | Keywords to search for in job postings                         |
| `location`                                                     | *string*                                                       | :heavy_check_mark:                                             | Location to filter job postings                                |
| `datePosted`                                                   | [operations.DatePosted](../../models/operations/dateposted.md) | :heavy_minus_sign:                                             | Filter for job postings based on when they were posted         |
| `salary`                                                       | [operations.Salary](../../models/operations/salary.md)         | :heavy_minus_sign:                                             | Salary range to filter job postings                            |
| `jobTypes`                                                     | [operations.JobTypes](../../models/operations/jobtypes.md)[]   | :heavy_minus_sign:                                             | N/A                                                            |
| `workTypes`                                                    | [operations.WorkTypes](../../models/operations/worktypes.md)[] | :heavy_minus_sign:                                             | N/A                                                            |
| `companyUids`                                                  | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `page`                                                         | *number*                                                       | :heavy_minus_sign:                                             | Page number for pagination (default is 1)                      |