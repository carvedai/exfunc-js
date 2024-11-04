# ZillowPriceHistoryEvent

## Example Usage

```typescript
import { ZillowPriceHistoryEvent } from "exfunc/models/components";

let value: ZillowPriceHistoryEvent = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `date`                                                          | *string*                                                        | :heavy_minus_sign:                                              | The date of the price change                                    |
| `price`                                                         | *number*                                                        | :heavy_minus_sign:                                              | The price of the property at the given date                     |
| `timeEpoch`                                                     | *number*                                                        | :heavy_minus_sign:                                              | Time of the price change in epoch format                        |
| `pricePerSquareFoot`                                            | *number*                                                        | :heavy_minus_sign:                                              | Price per square foot at the given date                         |
| `priceChangeRate`                                               | *number*                                                        | :heavy_minus_sign:                                              | Rate of change in price over time                               |
| `event`                                                         | *string*                                                        | :heavy_minus_sign:                                              | Description of the event (e.g., price increase, price decrease) |
| `source`                                                        | *string*                                                        | :heavy_minus_sign:                                              | Source of the price history data                                |
| `isRental`                                                      | *boolean*                                                       | :heavy_minus_sign:                                              | Indicates if the property is a rental                           |