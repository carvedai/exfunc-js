/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SearchWebRequestBody = {
  /**
   * The search query
   */
  query: string;
  /**
   * Number of news articles to return per page (default is 10)
   */
  count?: number | undefined;
};

export type Results = {
  /**
   * The title of the search result
   */
  title?: string | undefined;
  /**
   * The url of the search result
   */
  url?: string | undefined;
  /**
   * The domain of the search result
   */
  domain?: string | undefined;
};

/**
 * SearchWeb API successful response
 */
export type SearchWebResponseBody = {
  results?: Array<Results> | undefined;
};

/** @internal */
export const SearchWebRequestBody$inboundSchema: z.ZodType<
  SearchWebRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string(),
  count: z.number().int().optional(),
});

/** @internal */
export type SearchWebRequestBody$Outbound = {
  query: string;
  count?: number | undefined;
};

/** @internal */
export const SearchWebRequestBody$outboundSchema: z.ZodType<
  SearchWebRequestBody$Outbound,
  z.ZodTypeDef,
  SearchWebRequestBody
> = z.object({
  query: z.string(),
  count: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchWebRequestBody$ {
  /** @deprecated use `SearchWebRequestBody$inboundSchema` instead. */
  export const inboundSchema = SearchWebRequestBody$inboundSchema;
  /** @deprecated use `SearchWebRequestBody$outboundSchema` instead. */
  export const outboundSchema = SearchWebRequestBody$outboundSchema;
  /** @deprecated use `SearchWebRequestBody$Outbound` instead. */
  export type Outbound = SearchWebRequestBody$Outbound;
}

export function searchWebRequestBodyToJSON(
  searchWebRequestBody: SearchWebRequestBody,
): string {
  return JSON.stringify(
    SearchWebRequestBody$outboundSchema.parse(searchWebRequestBody),
  );
}

export function searchWebRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<SearchWebRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchWebRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchWebRequestBody' from JSON`,
  );
}

/** @internal */
export const Results$inboundSchema: z.ZodType<Results, z.ZodTypeDef, unknown> =
  z.object({
    title: z.string().optional(),
    url: z.string().optional(),
    domain: z.string().optional(),
  });

/** @internal */
export type Results$Outbound = {
  title?: string | undefined;
  url?: string | undefined;
  domain?: string | undefined;
};

/** @internal */
export const Results$outboundSchema: z.ZodType<
  Results$Outbound,
  z.ZodTypeDef,
  Results
> = z.object({
  title: z.string().optional(),
  url: z.string().optional(),
  domain: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Results$ {
  /** @deprecated use `Results$inboundSchema` instead. */
  export const inboundSchema = Results$inboundSchema;
  /** @deprecated use `Results$outboundSchema` instead. */
  export const outboundSchema = Results$outboundSchema;
  /** @deprecated use `Results$Outbound` instead. */
  export type Outbound = Results$Outbound;
}

export function resultsToJSON(results: Results): string {
  return JSON.stringify(Results$outboundSchema.parse(results));
}

export function resultsFromJSON(
  jsonString: string,
): SafeParseResult<Results, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Results$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Results' from JSON`,
  );
}

/** @internal */
export const SearchWebResponseBody$inboundSchema: z.ZodType<
  SearchWebResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(z.lazy(() => Results$inboundSchema)).optional(),
});

/** @internal */
export type SearchWebResponseBody$Outbound = {
  results?: Array<Results$Outbound> | undefined;
};

/** @internal */
export const SearchWebResponseBody$outboundSchema: z.ZodType<
  SearchWebResponseBody$Outbound,
  z.ZodTypeDef,
  SearchWebResponseBody
> = z.object({
  results: z.array(z.lazy(() => Results$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchWebResponseBody$ {
  /** @deprecated use `SearchWebResponseBody$inboundSchema` instead. */
  export const inboundSchema = SearchWebResponseBody$inboundSchema;
  /** @deprecated use `SearchWebResponseBody$outboundSchema` instead. */
  export const outboundSchema = SearchWebResponseBody$outboundSchema;
  /** @deprecated use `SearchWebResponseBody$Outbound` instead. */
  export type Outbound = SearchWebResponseBody$Outbound;
}

export function searchWebResponseBodyToJSON(
  searchWebResponseBody: SearchWebResponseBody,
): string {
  return JSON.stringify(
    SearchWebResponseBody$outboundSchema.parse(searchWebResponseBody),
  );
}

export function searchWebResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<SearchWebResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchWebResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchWebResponseBody' from JSON`,
  );
}
