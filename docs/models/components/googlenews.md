# GoogleNews

## Example Usage

```typescript
import { GoogleNews } from "exfunc/models/components";

let value: GoogleNews = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The title of the news article                                                                 |
| `link`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The URL link to the news article                                                              |
| `snippet`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | A brief snippet or summary of the news article                                                |
| `photoUrl`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The URL of the photo associated with the news article                                         |
| `publishedDatetimeUtc`                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The publication date and time in UTC                                                          |
| `sourceUrl`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The URL of the source website                                                                 |
| `sourceName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the news source                                                                   |