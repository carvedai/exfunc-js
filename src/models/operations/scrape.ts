/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ScrapeRequestBody = {
  /**
   * The URL to start navigating from
   */
  url: string;
};

/**
 * Scrape API successful response
 */
export type ScrapeResponseBody = {
  /**
   * The page html of the website
   */
  pageHtml?: string | undefined;
};

/** @internal */
export const ScrapeRequestBody$inboundSchema: z.ZodType<
  ScrapeRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
});

/** @internal */
export type ScrapeRequestBody$Outbound = {
  url: string;
};

/** @internal */
export const ScrapeRequestBody$outboundSchema: z.ZodType<
  ScrapeRequestBody$Outbound,
  z.ZodTypeDef,
  ScrapeRequestBody
> = z.object({
  url: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScrapeRequestBody$ {
  /** @deprecated use `ScrapeRequestBody$inboundSchema` instead. */
  export const inboundSchema = ScrapeRequestBody$inboundSchema;
  /** @deprecated use `ScrapeRequestBody$outboundSchema` instead. */
  export const outboundSchema = ScrapeRequestBody$outboundSchema;
  /** @deprecated use `ScrapeRequestBody$Outbound` instead. */
  export type Outbound = ScrapeRequestBody$Outbound;
}

/** @internal */
export const ScrapeResponseBody$inboundSchema: z.ZodType<
  ScrapeResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  page_html: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "page_html": "pageHtml",
  });
});

/** @internal */
export type ScrapeResponseBody$Outbound = {
  page_html?: string | undefined;
};

/** @internal */
export const ScrapeResponseBody$outboundSchema: z.ZodType<
  ScrapeResponseBody$Outbound,
  z.ZodTypeDef,
  ScrapeResponseBody
> = z.object({
  pageHtml: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    pageHtml: "page_html",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScrapeResponseBody$ {
  /** @deprecated use `ScrapeResponseBody$inboundSchema` instead. */
  export const inboundSchema = ScrapeResponseBody$inboundSchema;
  /** @deprecated use `ScrapeResponseBody$outboundSchema` instead. */
  export const outboundSchema = ScrapeResponseBody$outboundSchema;
  /** @deprecated use `ScrapeResponseBody$Outbound` instead. */
  export type Outbound = ScrapeResponseBody$Outbound;
}
