/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type SearchCompaniesRequestBody = {
  /**
   * The name of the company to search for
   */
  name?: string | undefined;
  locations?: Array<string> | undefined;
  sizes?: Array<string> | undefined;
  industries?: Array<string> | undefined;
  /**
   * Page number for pagination (default is 1)
   */
  page?: number | undefined;
};

export type Companies = {
  /**
   * URL to the company's profile
   */
  url?: string | null | undefined;
  /**
   * LinkedIn uid
   */
  uid?: string | null | undefined;
  /**
   * Name of the company
   */
  name?: string | undefined;
  /**
   * Company's website URL
   */
  websiteUrl?: string | null | undefined;
};

/**
 * SearchCompanies API successful response
 */
export type SearchCompaniesResponseBody = {
  companies?: Array<Companies> | undefined;
};

/** @internal */
export const SearchCompaniesRequestBody$inboundSchema: z.ZodType<
  SearchCompaniesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  locations: z.array(z.string()).optional(),
  sizes: z.array(z.string()).optional(),
  industries: z.array(z.string()).optional(),
  page: z.number().int().optional(),
});

/** @internal */
export type SearchCompaniesRequestBody$Outbound = {
  name?: string | undefined;
  locations?: Array<string> | undefined;
  sizes?: Array<string> | undefined;
  industries?: Array<string> | undefined;
  page?: number | undefined;
};

/** @internal */
export const SearchCompaniesRequestBody$outboundSchema: z.ZodType<
  SearchCompaniesRequestBody$Outbound,
  z.ZodTypeDef,
  SearchCompaniesRequestBody
> = z.object({
  name: z.string().optional(),
  locations: z.array(z.string()).optional(),
  sizes: z.array(z.string()).optional(),
  industries: z.array(z.string()).optional(),
  page: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchCompaniesRequestBody$ {
  /** @deprecated use `SearchCompaniesRequestBody$inboundSchema` instead. */
  export const inboundSchema = SearchCompaniesRequestBody$inboundSchema;
  /** @deprecated use `SearchCompaniesRequestBody$outboundSchema` instead. */
  export const outboundSchema = SearchCompaniesRequestBody$outboundSchema;
  /** @deprecated use `SearchCompaniesRequestBody$Outbound` instead. */
  export type Outbound = SearchCompaniesRequestBody$Outbound;
}

/** @internal */
export const Companies$inboundSchema: z.ZodType<
  Companies,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.nullable(z.string()).optional(),
  uid: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  website_url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "website_url": "websiteUrl",
  });
});

/** @internal */
export type Companies$Outbound = {
  url?: string | null | undefined;
  uid?: string | null | undefined;
  name?: string | undefined;
  website_url?: string | null | undefined;
};

/** @internal */
export const Companies$outboundSchema: z.ZodType<
  Companies$Outbound,
  z.ZodTypeDef,
  Companies
> = z.object({
  url: z.nullable(z.string()).optional(),
  uid: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  websiteUrl: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    websiteUrl: "website_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Companies$ {
  /** @deprecated use `Companies$inboundSchema` instead. */
  export const inboundSchema = Companies$inboundSchema;
  /** @deprecated use `Companies$outboundSchema` instead. */
  export const outboundSchema = Companies$outboundSchema;
  /** @deprecated use `Companies$Outbound` instead. */
  export type Outbound = Companies$Outbound;
}

/** @internal */
export const SearchCompaniesResponseBody$inboundSchema: z.ZodType<
  SearchCompaniesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  companies: z.array(z.lazy(() => Companies$inboundSchema)).optional(),
});

/** @internal */
export type SearchCompaniesResponseBody$Outbound = {
  companies?: Array<Companies$Outbound> | undefined;
};

/** @internal */
export const SearchCompaniesResponseBody$outboundSchema: z.ZodType<
  SearchCompaniesResponseBody$Outbound,
  z.ZodTypeDef,
  SearchCompaniesResponseBody
> = z.object({
  companies: z.array(z.lazy(() => Companies$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchCompaniesResponseBody$ {
  /** @deprecated use `SearchCompaniesResponseBody$inboundSchema` instead. */
  export const inboundSchema = SearchCompaniesResponseBody$inboundSchema;
  /** @deprecated use `SearchCompaniesResponseBody$outboundSchema` instead. */
  export const outboundSchema = SearchCompaniesResponseBody$outboundSchema;
  /** @deprecated use `SearchCompaniesResponseBody$Outbound` instead. */
  export type Outbound = SearchCompaniesResponseBody$Outbound;
}
