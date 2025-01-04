# GlassdoorSearchJobPostingsResponseBody

SearchJobPostings API successful response

## Example Usage

```typescript
import { GlassdoorSearchJobPostingsResponseBody } from "exfunc/models/operations";

let value: GlassdoorSearchJobPostingsResponseBody = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `jobPostings`                                                                      | [components.GlassdoorJobPosting](../../models/components/glassdoorjobposting.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `nextToken`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | Next token for pagination                                                          |