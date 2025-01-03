/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetJobPostingRequestBody = {
  /**
   * The LinkedIn URL of the job posting to enrich
   */
  jobPostingUrl: string;
};

/**
 * GetJobPosting API successful response
 */
export type GetJobPostingResponseBody = {
  jobPosting?: components.LinkedInJobPosting | undefined;
};

/** @internal */
export const GetJobPostingRequestBody$inboundSchema: z.ZodType<
  GetJobPostingRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  job_posting_url: z.string(),
}).transform((v) => {
  return remap$(v, {
    "job_posting_url": "jobPostingUrl",
  });
});

/** @internal */
export type GetJobPostingRequestBody$Outbound = {
  job_posting_url: string;
};

/** @internal */
export const GetJobPostingRequestBody$outboundSchema: z.ZodType<
  GetJobPostingRequestBody$Outbound,
  z.ZodTypeDef,
  GetJobPostingRequestBody
> = z.object({
  jobPostingUrl: z.string(),
}).transform((v) => {
  return remap$(v, {
    jobPostingUrl: "job_posting_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetJobPostingRequestBody$ {
  /** @deprecated use `GetJobPostingRequestBody$inboundSchema` instead. */
  export const inboundSchema = GetJobPostingRequestBody$inboundSchema;
  /** @deprecated use `GetJobPostingRequestBody$outboundSchema` instead. */
  export const outboundSchema = GetJobPostingRequestBody$outboundSchema;
  /** @deprecated use `GetJobPostingRequestBody$Outbound` instead. */
  export type Outbound = GetJobPostingRequestBody$Outbound;
}

export function getJobPostingRequestBodyToJSON(
  getJobPostingRequestBody: GetJobPostingRequestBody,
): string {
  return JSON.stringify(
    GetJobPostingRequestBody$outboundSchema.parse(getJobPostingRequestBody),
  );
}

export function getJobPostingRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetJobPostingRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetJobPostingRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetJobPostingRequestBody' from JSON`,
  );
}

/** @internal */
export const GetJobPostingResponseBody$inboundSchema: z.ZodType<
  GetJobPostingResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  job_posting: components.LinkedInJobPosting$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "job_posting": "jobPosting",
  });
});

/** @internal */
export type GetJobPostingResponseBody$Outbound = {
  job_posting?: components.LinkedInJobPosting$Outbound | undefined;
};

/** @internal */
export const GetJobPostingResponseBody$outboundSchema: z.ZodType<
  GetJobPostingResponseBody$Outbound,
  z.ZodTypeDef,
  GetJobPostingResponseBody
> = z.object({
  jobPosting: components.LinkedInJobPosting$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    jobPosting: "job_posting",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetJobPostingResponseBody$ {
  /** @deprecated use `GetJobPostingResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetJobPostingResponseBody$inboundSchema;
  /** @deprecated use `GetJobPostingResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetJobPostingResponseBody$outboundSchema;
  /** @deprecated use `GetJobPostingResponseBody$Outbound` instead. */
  export type Outbound = GetJobPostingResponseBody$Outbound;
}

export function getJobPostingResponseBodyToJSON(
  getJobPostingResponseBody: GetJobPostingResponseBody,
): string {
  return JSON.stringify(
    GetJobPostingResponseBody$outboundSchema.parse(getJobPostingResponseBody),
  );
}

export function getJobPostingResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetJobPostingResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetJobPostingResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetJobPostingResponseBody' from JSON`,
  );
}
