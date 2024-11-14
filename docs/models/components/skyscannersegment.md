# SkyScannerSegment

## Example Usage

```typescript
import { SkyScannerSegment } from "exfunc/models/components";

let value: SkyScannerSegment = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `origin`                                                                     | [components.SkyScannerAirport](../../models/components/skyscannerairport.md) | :heavy_minus_sign:                                                           | The airport information                                                      |
| `destination`                                                                | [components.SkyScannerAirport](../../models/components/skyscannerairport.md) | :heavy_minus_sign:                                                           | The airport information                                                      |
| `departureTime`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | The departure time of the segment                                            |
| `arrivalTime`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | The arrival time of the segment                                              |
| `durationInMinutes`                                                          | *number*                                                                     | :heavy_minus_sign:                                                           | Duration of the segment in minutes                                           |
| `flightNumber`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | Flight number for the segment                                                |
| `marketingCarrier`                                                           | [components.SkyScannerCarrier](../../models/components/skyscannercarrier.md) | :heavy_minus_sign:                                                           | The carrier details                                                          |
| `operatingCarrier`                                                           | [components.SkyScannerCarrier](../../models/components/skyscannercarrier.md) | :heavy_minus_sign:                                                           | The carrier details                                                          |