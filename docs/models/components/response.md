# Response

## Example Usage

```typescript
import { Response } from "exfunc/models/components";

let value: Response = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `html`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | The HTML string of the page that the navigator reached                          |
| `img`                                                                           | *string*                                                                        | :heavy_minus_sign:                                                              | The base64-encoded string for screenshot of the page that the navigator reached |
| `markdown`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | The markdown string of the page that the navigator reached                      |