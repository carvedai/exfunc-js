# SearchRoundtripRequestBody

## Example Usage

```typescript
import { SearchRoundtripRequestBody } from "exfunc/models/operations";

let value: SearchRoundtripRequestBody = {
  origin: "<value>",
  destination: "<value>",
  departDate: "<value>",
  returnDate: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `origin`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | The origin location of the itinerary                                                         |
| `destination`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | The destination location of the itinerary                                                    |
| `departDate`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | The departure date of the itinerary. The format has to be YYYY-MM-DD                         |
| `returnDate`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | The return date of the itinerary. The format has to be YYYY-MM-DD                            |
| `stops`                                                                                      | [operations.SearchRoundtripStops](../../models/operations/searchroundtripstops.md)[]         | :heavy_minus_sign:                                                                           | The list of filter values for number of stops                                                |
| `numAdults`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | The number of adults for the itinerary                                                       |
| `numChildren`                                                                                | *number*                                                                                     | :heavy_minus_sign:                                                                           | The number of children for the itinerary                                                     |
| `numInfants`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | The number of infants for the itinerary                                                      |
| `cabinClass`                                                                                 | [operations.SearchRoundtripCabinClass](../../models/operations/searchroundtripcabinclass.md) | :heavy_minus_sign:                                                                           | The cabin class filter                                                                       |
| `includeOriginNearbyAirports`                                                                | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Boolean to indicate whether to include nearby origin airports in the results or not          |
| `includeDestinationNearbyAirports`                                                           | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Boolean to indicate whether to include nearby destination airports in the results or not     |