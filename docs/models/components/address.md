# Address

The physical address of the property

## Example Usage

```typescript
import { Address } from "exfunc/models/components";

let value: Address = {};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `streetAddress`                    | *string*                           | :heavy_minus_sign:                 | The street address of the building |
| `zipcode`                          | *string*                           | :heavy_minus_sign:                 | The zipcode of the building        |
| `city`                             | *string*                           | :heavy_minus_sign:                 | The city of the building           |
| `state`                            | *string*                           | :heavy_minus_sign:                 | The state of the building          |
| `buildingId`                       | *number*                           | :heavy_minus_sign:                 | The ID of the building             |