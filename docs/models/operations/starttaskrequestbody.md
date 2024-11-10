# StartTaskRequestBody

## Example Usage

```typescript
import { StartTaskRequestBody } from "exfunc/models/operations";

let value: StartTaskRequestBody = {
  url: "https://steep-independence.net",
  objective: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `url`                                            | *string*                                         | :heavy_check_mark:                               | The URL to start navigating from                 |
| `objective`                                      | *string*                                         | :heavy_check_mark:                               | The natural language objective of the navigation |