# SearchJobPostingsRequestBody

## Example Usage

```typescript
import { SearchJobPostingsRequestBody } from "exfunc/models/operations";

let value: SearchJobPostingsRequestBody = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `keywords`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | Keywords to search for in job postings                                                   |
| `location`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | Location to filter job postings                                                          |
| `datePosted`                                                                             | [operations.DatePosted](../../models/operations/dateposted.md)                           | :heavy_minus_sign:                                                                       | Filter for job postings based on when they were posted                                   |
| `salary`                                                                                 | [operations.Salary](../../models/operations/salary.md)                                   | :heavy_minus_sign:                                                                       | Salary range to filter job postings                                                      |
| `jobType`                                                                                | [operations.JobType](../../models/operations/jobtype.md)                                 | :heavy_minus_sign:                                                                       | Job type to filter (e.g., Full-time, Part-time)                                          |
| `workType`                                                                               | [operations.WorkType](../../models/operations/worktype.md)                               | :heavy_minus_sign:                                                                       | Work type to filter (e.g., Remote, On-site)                                              |
| `experienceLevel`                                                                        | [operations.ExperienceLevel](../../models/operations/experiencelevel.md)                 | :heavy_minus_sign:                                                                       | Experience level to filter (e.g., Associate, Executive)                                  |
| `companyUids`                                                                            | *string*[]                                                                               | :heavy_minus_sign:                                                                       | List of company unique identifiers to filter                                             |
| `sortBy`                                                                                 | [operations.SearchJobPostingsSortBy](../../models/operations/searchjobpostingssortby.md) | :heavy_minus_sign:                                                                       | The criteria to sort results                                                             |
| `page`                                                                                   | *number*                                                                                 | :heavy_minus_sign:                                                                       | Page number for pagination (default is 1)                                                |