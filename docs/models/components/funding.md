# Funding

Funding information for the company

## Example Usage

```typescript
import { Funding } from "exfunc/models/components";

let value: Funding = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `totalRounds`                                                    | [components.TotalRounds](../../models/components/totalrounds.md) | :heavy_minus_sign:                                               | Total rounds of funding information                              |
| `lastRound`                                                      | [components.LastRound](../../models/components/lastround.md)     | :heavy_minus_sign:                                               | Last round of funding information                                |
| `investors`                                                      | [components.Investors](../../models/components/investors.md)[]   | :heavy_minus_sign:                                               | List of investors                                                |