/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GetPropertyRequestBody = {
  /**
   * The ID of the property
   */
  propertyId: string;
};

/**
 * GetProperty API successful response
 */
export type GetPropertyResponseBody = {
  property?: components.ZillowProperty | undefined;
};

/** @internal */
export const GetPropertyRequestBody$inboundSchema: z.ZodType<
  GetPropertyRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  property_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "property_id": "propertyId",
  });
});

/** @internal */
export type GetPropertyRequestBody$Outbound = {
  property_id: string;
};

/** @internal */
export const GetPropertyRequestBody$outboundSchema: z.ZodType<
  GetPropertyRequestBody$Outbound,
  z.ZodTypeDef,
  GetPropertyRequestBody
> = z.object({
  propertyId: z.string(),
}).transform((v) => {
  return remap$(v, {
    propertyId: "property_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPropertyRequestBody$ {
  /** @deprecated use `GetPropertyRequestBody$inboundSchema` instead. */
  export const inboundSchema = GetPropertyRequestBody$inboundSchema;
  /** @deprecated use `GetPropertyRequestBody$outboundSchema` instead. */
  export const outboundSchema = GetPropertyRequestBody$outboundSchema;
  /** @deprecated use `GetPropertyRequestBody$Outbound` instead. */
  export type Outbound = GetPropertyRequestBody$Outbound;
}

/** @internal */
export const GetPropertyResponseBody$inboundSchema: z.ZodType<
  GetPropertyResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  property: components.ZillowProperty$inboundSchema.optional(),
});

/** @internal */
export type GetPropertyResponseBody$Outbound = {
  property?: components.ZillowProperty$Outbound | undefined;
};

/** @internal */
export const GetPropertyResponseBody$outboundSchema: z.ZodType<
  GetPropertyResponseBody$Outbound,
  z.ZodTypeDef,
  GetPropertyResponseBody
> = z.object({
  property: components.ZillowProperty$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPropertyResponseBody$ {
  /** @deprecated use `GetPropertyResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetPropertyResponseBody$inboundSchema;
  /** @deprecated use `GetPropertyResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetPropertyResponseBody$outboundSchema;
  /** @deprecated use `GetPropertyResponseBody$Outbound` instead. */
  export type Outbound = GetPropertyResponseBody$Outbound;
}
