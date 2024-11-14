/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  SkyScannerAirport,
  SkyScannerAirport$inboundSchema,
  SkyScannerAirport$Outbound,
  SkyScannerAirport$outboundSchema,
} from "./skyscannerairport.js";
import {
  SkyScannerSegment,
  SkyScannerSegment$inboundSchema,
  SkyScannerSegment$Outbound,
  SkyScannerSegment$outboundSchema,
} from "./skyscannersegment.js";

/**
 * The carrier information
 */
export type Carriers = {
  /**
   * The list of marketing carriers (airlines)
   */
  marketing?: Array<string> | undefined;
  /**
   * The list of operating carriers (airlines)
   */
  operating?: Array<string> | undefined;
};

export type SkyScannerLeg = {
  /**
   * The airport information
   */
  origin?: SkyScannerAirport | undefined;
  /**
   * The airport information
   */
  destination?: SkyScannerAirport | undefined;
  /**
   * Duration of the leg in minutes
   */
  durationInMinutes?: number | undefined;
  /**
   * The number of stops for the leg
   */
  stopCount?: number | undefined;
  /**
   * The departure time of the leg
   */
  departureTime?: string | undefined;
  /**
   * The arrival time of the leg
   */
  arrivalTime?: string | undefined;
  /**
   * The time delta in days between the departure and the arrival
   */
  timeDeltaInDays?: number | undefined;
  /**
   * The carrier information
   */
  carriers?: Carriers | undefined;
  /**
   * The list of segments for the leg
   */
  segments?: Array<SkyScannerSegment> | undefined;
};

/** @internal */
export const Carriers$inboundSchema: z.ZodType<
  Carriers,
  z.ZodTypeDef,
  unknown
> = z.object({
  marketing: z.array(z.string()).optional(),
  operating: z.array(z.string()).optional(),
});

/** @internal */
export type Carriers$Outbound = {
  marketing?: Array<string> | undefined;
  operating?: Array<string> | undefined;
};

/** @internal */
export const Carriers$outboundSchema: z.ZodType<
  Carriers$Outbound,
  z.ZodTypeDef,
  Carriers
> = z.object({
  marketing: z.array(z.string()).optional(),
  operating: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Carriers$ {
  /** @deprecated use `Carriers$inboundSchema` instead. */
  export const inboundSchema = Carriers$inboundSchema;
  /** @deprecated use `Carriers$outboundSchema` instead. */
  export const outboundSchema = Carriers$outboundSchema;
  /** @deprecated use `Carriers$Outbound` instead. */
  export type Outbound = Carriers$Outbound;
}

/** @internal */
export const SkyScannerLeg$inboundSchema: z.ZodType<
  SkyScannerLeg,
  z.ZodTypeDef,
  unknown
> = z.object({
  origin: SkyScannerAirport$inboundSchema.optional(),
  destination: SkyScannerAirport$inboundSchema.optional(),
  duration_in_minutes: z.number().optional(),
  stop_count: z.number().optional(),
  departure_time: z.string().optional(),
  arrival_time: z.string().optional(),
  time_delta_in_days: z.number().optional(),
  carriers: z.lazy(() => Carriers$inboundSchema).optional(),
  segments: z.array(SkyScannerSegment$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "duration_in_minutes": "durationInMinutes",
    "stop_count": "stopCount",
    "departure_time": "departureTime",
    "arrival_time": "arrivalTime",
    "time_delta_in_days": "timeDeltaInDays",
  });
});

/** @internal */
export type SkyScannerLeg$Outbound = {
  origin?: SkyScannerAirport$Outbound | undefined;
  destination?: SkyScannerAirport$Outbound | undefined;
  duration_in_minutes?: number | undefined;
  stop_count?: number | undefined;
  departure_time?: string | undefined;
  arrival_time?: string | undefined;
  time_delta_in_days?: number | undefined;
  carriers?: Carriers$Outbound | undefined;
  segments?: Array<SkyScannerSegment$Outbound> | undefined;
};

/** @internal */
export const SkyScannerLeg$outboundSchema: z.ZodType<
  SkyScannerLeg$Outbound,
  z.ZodTypeDef,
  SkyScannerLeg
> = z.object({
  origin: SkyScannerAirport$outboundSchema.optional(),
  destination: SkyScannerAirport$outboundSchema.optional(),
  durationInMinutes: z.number().optional(),
  stopCount: z.number().optional(),
  departureTime: z.string().optional(),
  arrivalTime: z.string().optional(),
  timeDeltaInDays: z.number().optional(),
  carriers: z.lazy(() => Carriers$outboundSchema).optional(),
  segments: z.array(SkyScannerSegment$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    durationInMinutes: "duration_in_minutes",
    stopCount: "stop_count",
    departureTime: "departure_time",
    arrivalTime: "arrival_time",
    timeDeltaInDays: "time_delta_in_days",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SkyScannerLeg$ {
  /** @deprecated use `SkyScannerLeg$inboundSchema` instead. */
  export const inboundSchema = SkyScannerLeg$inboundSchema;
  /** @deprecated use `SkyScannerLeg$outboundSchema` instead. */
  export const outboundSchema = SkyScannerLeg$outboundSchema;
  /** @deprecated use `SkyScannerLeg$Outbound` instead. */
  export type Outbound = SkyScannerLeg$Outbound;
}
