# Response

## Example Usage

```typescript
import { Response } from "exfunc/models/components";

let value: Response = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `pageImg`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | The base64-encoded string for screenshot of the page that the navigator reached |
| `pageHtml`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | The HTML string of the page that the navigator reached                          |