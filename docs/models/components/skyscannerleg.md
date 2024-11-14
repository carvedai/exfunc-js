# SkyScannerLeg

## Example Usage

```typescript
import { SkyScannerLeg } from "exfunc/models/components";

let value: SkyScannerLeg = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `origin`                                                                                      | [components.SkyScannerAirport](../../models/components/skyscannerairport.md)                  | :heavy_minus_sign:                                                                            | The airport information                                                                       |
| `destination`                                                                                 | [components.SkyScannerAirport](../../models/components/skyscannerairport.md)                  | :heavy_minus_sign:                                                                            | The airport information                                                                       |
| `durationInMinutes`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | Duration of the leg in minutes                                                                |
| `stopCount`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of stops for the leg                                                               |
| `departureTime`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The departure time of the leg                                                                 |
| `arrivalTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The arrival time of the leg                                                                   |
| `timeDeltaInDays`                                                                             | *number*                                                                                      | :heavy_minus_sign:                                                                            | The time delta in days between the departure and the arrival                                  |
| `carriers`                                                                                    | [components.Carriers](../../models/components/carriers.md)                                    | :heavy_minus_sign:                                                                            | The carrier information                                                                       |
| `segments`                                                                                    | [components.SkyScannerSegment](../../models/components/skyscannersegment.md)[]                | :heavy_minus_sign:                                                                            | The list of segments for the leg                                                              |