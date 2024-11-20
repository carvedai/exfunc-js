/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ZillowPriceHistoryEvent,
  ZillowPriceHistoryEvent$inboundSchema,
  ZillowPriceHistoryEvent$Outbound,
  ZillowPriceHistoryEvent$outboundSchema,
} from "./zillowpricehistoryevent.js";

/**
 * The physical address of the property
 */
export type Address = {
  /**
   * The street address of the building
   */
  streetAddress?: string | undefined;
  /**
   * The zipcode of the building
   */
  zipcode?: string | undefined;
  /**
   * The city of the building
   */
  city?: string | undefined;
  /**
   * The state of the building
   */
  state?: string | undefined;
  /**
   * The ID of the building
   */
  buildingId?: number | undefined;
};

export type ZillowProperty = {
  /**
   * Unique identifier for the property
   */
  propertyId?: number | undefined;
  /**
   * The physical address of the property
   */
  address?: Address | undefined;
  /**
   * List of photo URLs for the property
   */
  photos?: Array<string> | undefined;
  /**
   * Number of bathrooms in the property
   */
  bathrooms?: number | null | undefined;
  /**
   * Number of bedrooms in the property
   */
  bedrooms?: number | null | undefined;
  /**
   * The living area of the property in square feet
   */
  livingArea?: number | null | undefined;
  /**
   * The year the property was built
   */
  yearBuilt?: number | null | undefined;
  /**
   * Type of the property (e.g. house, condo)
   */
  propertyType?: string | undefined;
  /**
   * Status of the listing (e.g. forSale, sold)
   */
  listingStatus?: string | undefined;
  /**
   * Number of days the property has been listed on Zillow
   */
  daysOnZillow?: number | null | undefined;
  /**
   * Listing price of the property
   */
  price?: number | undefined;
  /**
   * Zillow's estimated value of the property
   */
  zestimate?: number | null | undefined;
  /**
   * Zillow's estimated value of the rent for the property
   */
  rentZestimate?: number | null | undefined;
  priceHistory?: Array<ZillowPriceHistoryEvent> | undefined;
};

/** @internal */
export const Address$inboundSchema: z.ZodType<Address, z.ZodTypeDef, unknown> =
  z.object({
    streetAddress: z.string().optional(),
    zipcode: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    buildingId: z.number().int().optional(),
  });

/** @internal */
export type Address$Outbound = {
  streetAddress?: string | undefined;
  zipcode?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  buildingId?: number | undefined;
};

/** @internal */
export const Address$outboundSchema: z.ZodType<
  Address$Outbound,
  z.ZodTypeDef,
  Address
> = z.object({
  streetAddress: z.string().optional(),
  zipcode: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  buildingId: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Address$ {
  /** @deprecated use `Address$inboundSchema` instead. */
  export const inboundSchema = Address$inboundSchema;
  /** @deprecated use `Address$outboundSchema` instead. */
  export const outboundSchema = Address$outboundSchema;
  /** @deprecated use `Address$Outbound` instead. */
  export type Outbound = Address$Outbound;
}

export function addressToJSON(address: Address): string {
  return JSON.stringify(Address$outboundSchema.parse(address));
}

export function addressFromJSON(
  jsonString: string,
): SafeParseResult<Address, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Address$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Address' from JSON`,
  );
}

/** @internal */
export const ZillowProperty$inboundSchema: z.ZodType<
  ZillowProperty,
  z.ZodTypeDef,
  unknown
> = z.object({
  property_id: z.number().int().optional(),
  address: z.lazy(() => Address$inboundSchema).optional(),
  photos: z.array(z.string()).optional(),
  bathrooms: z.nullable(z.number()).optional(),
  bedrooms: z.nullable(z.number().int()).optional(),
  living_area: z.nullable(z.number()).optional(),
  year_built: z.nullable(z.number().int()).optional(),
  property_type: z.string().optional(),
  listing_status: z.string().optional(),
  days_on_zillow: z.nullable(z.number().int()).optional(),
  price: z.number().optional(),
  zestimate: z.nullable(z.number()).optional(),
  rent_zestimate: z.nullable(z.number()).optional(),
  price_history: z.array(ZillowPriceHistoryEvent$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "property_id": "propertyId",
    "living_area": "livingArea",
    "year_built": "yearBuilt",
    "property_type": "propertyType",
    "listing_status": "listingStatus",
    "days_on_zillow": "daysOnZillow",
    "rent_zestimate": "rentZestimate",
    "price_history": "priceHistory",
  });
});

/** @internal */
export type ZillowProperty$Outbound = {
  property_id?: number | undefined;
  address?: Address$Outbound | undefined;
  photos?: Array<string> | undefined;
  bathrooms?: number | null | undefined;
  bedrooms?: number | null | undefined;
  living_area?: number | null | undefined;
  year_built?: number | null | undefined;
  property_type?: string | undefined;
  listing_status?: string | undefined;
  days_on_zillow?: number | null | undefined;
  price?: number | undefined;
  zestimate?: number | null | undefined;
  rent_zestimate?: number | null | undefined;
  price_history?: Array<ZillowPriceHistoryEvent$Outbound> | undefined;
};

/** @internal */
export const ZillowProperty$outboundSchema: z.ZodType<
  ZillowProperty$Outbound,
  z.ZodTypeDef,
  ZillowProperty
> = z.object({
  propertyId: z.number().int().optional(),
  address: z.lazy(() => Address$outboundSchema).optional(),
  photos: z.array(z.string()).optional(),
  bathrooms: z.nullable(z.number()).optional(),
  bedrooms: z.nullable(z.number().int()).optional(),
  livingArea: z.nullable(z.number()).optional(),
  yearBuilt: z.nullable(z.number().int()).optional(),
  propertyType: z.string().optional(),
  listingStatus: z.string().optional(),
  daysOnZillow: z.nullable(z.number().int()).optional(),
  price: z.number().optional(),
  zestimate: z.nullable(z.number()).optional(),
  rentZestimate: z.nullable(z.number()).optional(),
  priceHistory: z.array(ZillowPriceHistoryEvent$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    propertyId: "property_id",
    livingArea: "living_area",
    yearBuilt: "year_built",
    propertyType: "property_type",
    listingStatus: "listing_status",
    daysOnZillow: "days_on_zillow",
    rentZestimate: "rent_zestimate",
    priceHistory: "price_history",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ZillowProperty$ {
  /** @deprecated use `ZillowProperty$inboundSchema` instead. */
  export const inboundSchema = ZillowProperty$inboundSchema;
  /** @deprecated use `ZillowProperty$outboundSchema` instead. */
  export const outboundSchema = ZillowProperty$outboundSchema;
  /** @deprecated use `ZillowProperty$Outbound` instead. */
  export type Outbound = ZillowProperty$Outbound;
}

export function zillowPropertyToJSON(zillowProperty: ZillowProperty): string {
  return JSON.stringify(ZillowProperty$outboundSchema.parse(zillowProperty));
}

export function zillowPropertyFromJSON(
  jsonString: string,
): SafeParseResult<ZillowProperty, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ZillowProperty$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ZillowProperty' from JSON`,
  );
}
