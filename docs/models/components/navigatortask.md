# NavigatorTask

## Example Usage

```typescript
import { NavigatorTask } from "exfunc/models/components";

let value: NavigatorTask = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `taskId`                                                     | *string*                                                     | :heavy_minus_sign:                                           | The ID of the navigator task                                 |
| `request`                                                    | [components.RequestT](../../models/components/requestt.md)   | :heavy_minus_sign:                                           | N/A                                                          |
| `response`                                                   | [components.ResponseT](../../models/components/responset.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `status`                                                     | [components.Status](../../models/components/status.md)       | :heavy_minus_sign:                                           | The status of the navigator task                             |
| `startTime`                                                  | *string*                                                     | :heavy_minus_sign:                                           | The start time of the navigator task                         |
| `endTime`                                                    | *string*                                                     | :heavy_minus_sign:                                           | The end time of the navigator task                           |
| `lastUpdatedTime`                                            | *string*                                                     | :heavy_minus_sign:                                           | The last updated time of the navigator task                  |