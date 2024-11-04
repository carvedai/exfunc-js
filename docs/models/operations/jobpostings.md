# JobPostings

## Example Usage

```typescript
import { JobPostings } from "exfunc/models/operations";

let value: JobPostings = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `url`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | URL to the job posting                                                                        |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Title of the job                                                                              |
| `location`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Job location                                                                                  |
| `datePosted`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date when the job was posted                                                                  |
| `companyName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name of the company offering the job                                                          |
| `companyUrl`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | URL to the company's profile                                                                  |