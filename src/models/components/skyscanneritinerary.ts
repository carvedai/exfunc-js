/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SkyScannerLeg,
  SkyScannerLeg$inboundSchema,
  SkyScannerLeg$Outbound,
  SkyScannerLeg$outboundSchema,
} from "./skyscannerleg.js";

export type SkyScannerItinerary = {
  /**
   * The price for the itinerary
   */
  price?: string | undefined;
  legs?: Array<SkyScannerLeg> | undefined;
};

/** @internal */
export const SkyScannerItinerary$inboundSchema: z.ZodType<
  SkyScannerItinerary,
  z.ZodTypeDef,
  unknown
> = z.object({
  price: z.string().optional(),
  legs: z.array(SkyScannerLeg$inboundSchema).optional(),
});

/** @internal */
export type SkyScannerItinerary$Outbound = {
  price?: string | undefined;
  legs?: Array<SkyScannerLeg$Outbound> | undefined;
};

/** @internal */
export const SkyScannerItinerary$outboundSchema: z.ZodType<
  SkyScannerItinerary$Outbound,
  z.ZodTypeDef,
  SkyScannerItinerary
> = z.object({
  price: z.string().optional(),
  legs: z.array(SkyScannerLeg$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SkyScannerItinerary$ {
  /** @deprecated use `SkyScannerItinerary$inboundSchema` instead. */
  export const inboundSchema = SkyScannerItinerary$inboundSchema;
  /** @deprecated use `SkyScannerItinerary$outboundSchema` instead. */
  export const outboundSchema = SkyScannerItinerary$outboundSchema;
  /** @deprecated use `SkyScannerItinerary$Outbound` instead. */
  export type Outbound = SkyScannerItinerary$Outbound;
}

export function skyScannerItineraryToJSON(
  skyScannerItinerary: SkyScannerItinerary,
): string {
  return JSON.stringify(
    SkyScannerItinerary$outboundSchema.parse(skyScannerItinerary),
  );
}

export function skyScannerItineraryFromJSON(
  jsonString: string,
): SafeParseResult<SkyScannerItinerary, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SkyScannerItinerary$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SkyScannerItinerary' from JSON`,
  );
}
