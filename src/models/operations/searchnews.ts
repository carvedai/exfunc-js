/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Filter news articles published after this date
 */
export const TimePublished = {
  Anytime: "anytime",
  Oneh: "1h",
  Oned: "1d",
  Sevend: "7d",
  Oney: "1y",
} as const;
/**
 * Filter news articles published after this date
 */
export type TimePublished = ClosedEnum<typeof TimePublished>;

export type SearchNewsRequestBody = {
  /**
   * The search query for news articles
   */
  query: string;
  /**
   * The country code for filtering news
   */
  countryCode?: string | undefined;
  /**
   * Number of news articles to return per page (default is 10)
   */
  perPage?: number | undefined;
  /**
   * Filter news articles published after this date
   */
  timePublished?: TimePublished | undefined;
};

/**
 * SearchNews API successful response
 */
export type SearchNewsResponseBody = {
  news?: Array<components.GoogleNews> | undefined;
};

/** @internal */
export const TimePublished$inboundSchema: z.ZodNativeEnum<
  typeof TimePublished
> = z.nativeEnum(TimePublished);

/** @internal */
export const TimePublished$outboundSchema: z.ZodNativeEnum<
  typeof TimePublished
> = TimePublished$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimePublished$ {
  /** @deprecated use `TimePublished$inboundSchema` instead. */
  export const inboundSchema = TimePublished$inboundSchema;
  /** @deprecated use `TimePublished$outboundSchema` instead. */
  export const outboundSchema = TimePublished$outboundSchema;
}

/** @internal */
export const SearchNewsRequestBody$inboundSchema: z.ZodType<
  SearchNewsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string(),
  country_code: z.string().optional(),
  per_page: z.number().int().optional(),
  time_published: TimePublished$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "country_code": "countryCode",
    "per_page": "perPage",
    "time_published": "timePublished",
  });
});

/** @internal */
export type SearchNewsRequestBody$Outbound = {
  query: string;
  country_code?: string | undefined;
  per_page?: number | undefined;
  time_published?: string | undefined;
};

/** @internal */
export const SearchNewsRequestBody$outboundSchema: z.ZodType<
  SearchNewsRequestBody$Outbound,
  z.ZodTypeDef,
  SearchNewsRequestBody
> = z.object({
  query: z.string(),
  countryCode: z.string().optional(),
  perPage: z.number().int().optional(),
  timePublished: TimePublished$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    countryCode: "country_code",
    perPage: "per_page",
    timePublished: "time_published",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchNewsRequestBody$ {
  /** @deprecated use `SearchNewsRequestBody$inboundSchema` instead. */
  export const inboundSchema = SearchNewsRequestBody$inboundSchema;
  /** @deprecated use `SearchNewsRequestBody$outboundSchema` instead. */
  export const outboundSchema = SearchNewsRequestBody$outboundSchema;
  /** @deprecated use `SearchNewsRequestBody$Outbound` instead. */
  export type Outbound = SearchNewsRequestBody$Outbound;
}

export function searchNewsRequestBodyToJSON(
  searchNewsRequestBody: SearchNewsRequestBody,
): string {
  return JSON.stringify(
    SearchNewsRequestBody$outboundSchema.parse(searchNewsRequestBody),
  );
}

export function searchNewsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<SearchNewsRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchNewsRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchNewsRequestBody' from JSON`,
  );
}

/** @internal */
export const SearchNewsResponseBody$inboundSchema: z.ZodType<
  SearchNewsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  news: z.array(components.GoogleNews$inboundSchema).optional(),
});

/** @internal */
export type SearchNewsResponseBody$Outbound = {
  news?: Array<components.GoogleNews$Outbound> | undefined;
};

/** @internal */
export const SearchNewsResponseBody$outboundSchema: z.ZodType<
  SearchNewsResponseBody$Outbound,
  z.ZodTypeDef,
  SearchNewsResponseBody
> = z.object({
  news: z.array(components.GoogleNews$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchNewsResponseBody$ {
  /** @deprecated use `SearchNewsResponseBody$inboundSchema` instead. */
  export const inboundSchema = SearchNewsResponseBody$inboundSchema;
  /** @deprecated use `SearchNewsResponseBody$outboundSchema` instead. */
  export const outboundSchema = SearchNewsResponseBody$outboundSchema;
  /** @deprecated use `SearchNewsResponseBody$Outbound` instead. */
  export type Outbound = SearchNewsResponseBody$Outbound;
}

export function searchNewsResponseBodyToJSON(
  searchNewsResponseBody: SearchNewsResponseBody,
): string {
  return JSON.stringify(
    SearchNewsResponseBody$outboundSchema.parse(searchNewsResponseBody),
  );
}

export function searchNewsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<SearchNewsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchNewsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchNewsResponseBody' from JSON`,
  );
}
