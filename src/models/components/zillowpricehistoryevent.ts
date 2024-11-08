/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ZillowPriceHistoryEvent = {
  /**
   * The date of the price change
   */
  date?: string | undefined;
  /**
   * The price of the property at the given date
   */
  price?: number | null | undefined;
  /**
   * Time of the price change in epoch format
   */
  timeEpoch?: number | undefined;
  /**
   * Price per square foot at the given date
   */
  pricePerSquareFoot?: number | null | undefined;
  /**
   * Rate of change in price over time
   */
  priceChangeRate?: number | undefined;
  /**
   * Description of the event (e.g., price increase, price decrease)
   */
  event?: string | undefined;
  /**
   * Source of the price history data
   */
  source?: string | undefined;
  /**
   * Indicates if the property is a rental
   */
  isRental?: boolean | undefined;
};

/** @internal */
export const ZillowPriceHistoryEvent$inboundSchema: z.ZodType<
  ZillowPriceHistoryEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  date: z.string().optional(),
  price: z.nullable(z.number()).optional(),
  time_epoch: z.number().int().optional(),
  price_per_square_foot: z.nullable(z.number()).optional(),
  price_change_rate: z.number().optional(),
  event: z.string().optional(),
  source: z.string().optional(),
  is_rental: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "time_epoch": "timeEpoch",
    "price_per_square_foot": "pricePerSquareFoot",
    "price_change_rate": "priceChangeRate",
    "is_rental": "isRental",
  });
});

/** @internal */
export type ZillowPriceHistoryEvent$Outbound = {
  date?: string | undefined;
  price?: number | null | undefined;
  time_epoch?: number | undefined;
  price_per_square_foot?: number | null | undefined;
  price_change_rate?: number | undefined;
  event?: string | undefined;
  source?: string | undefined;
  is_rental?: boolean | undefined;
};

/** @internal */
export const ZillowPriceHistoryEvent$outboundSchema: z.ZodType<
  ZillowPriceHistoryEvent$Outbound,
  z.ZodTypeDef,
  ZillowPriceHistoryEvent
> = z.object({
  date: z.string().optional(),
  price: z.nullable(z.number()).optional(),
  timeEpoch: z.number().int().optional(),
  pricePerSquareFoot: z.nullable(z.number()).optional(),
  priceChangeRate: z.number().optional(),
  event: z.string().optional(),
  source: z.string().optional(),
  isRental: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    timeEpoch: "time_epoch",
    pricePerSquareFoot: "price_per_square_foot",
    priceChangeRate: "price_change_rate",
    isRental: "is_rental",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ZillowPriceHistoryEvent$ {
  /** @deprecated use `ZillowPriceHistoryEvent$inboundSchema` instead. */
  export const inboundSchema = ZillowPriceHistoryEvent$inboundSchema;
  /** @deprecated use `ZillowPriceHistoryEvent$outboundSchema` instead. */
  export const outboundSchema = ZillowPriceHistoryEvent$outboundSchema;
  /** @deprecated use `ZillowPriceHistoryEvent$Outbound` instead. */
  export type Outbound = ZillowPriceHistoryEvent$Outbound;
}
