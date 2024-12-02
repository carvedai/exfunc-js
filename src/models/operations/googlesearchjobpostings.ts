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
 * Filter for job postings based on when they were posted
 */
export const DatePosted = {
  AnyTime: "Any time",
  Past24Hours: "Past 24 hours",
  Past3Days: "Past 3 days",
  PastWeek: "Past Week",
  PastMonth: "Past Month",
} as const;
/**
 * Filter for job postings based on when they were posted
 */
export type DatePosted = ClosedEnum<typeof DatePosted>;

export const JobTypes = {
  Contract: "Contract",
  FullTime: "Full-time",
  PartTime: "Part-time",
  Internship: "Internship",
} as const;
export type JobTypes = ClosedEnum<typeof JobTypes>;

export type GoogleSearchJobPostingsRequestBody = {
  /**
   * The search query for job postings
   */
  query: string;
  /**
   * Location to filter job postings
   */
  location?: string | undefined;
  /**
   * The country code to filter job postings
   */
  countryCode?: string | undefined;
  /**
   * Filter for job postings based on when they were posted
   */
  datePosted?: DatePosted | undefined;
  /**
   * Job types to filter (e.g., Full-time, Part-time)
   */
  jobTypes?: Array<JobTypes> | undefined;
  /**
   * Page number for pagination (default is 1)
   */
  page?: number | undefined;
  /**
   * Number of news articles to return per page (default is 10)
   */
  perPage?: number | undefined;
};

/**
 * SearchJobPostings API successful response
 */
export type GoogleSearchJobPostingsResponseBody = {
  jobPostings?: Array<components.GoogleJobPosting> | undefined;
};

/** @internal */
export const DatePosted$inboundSchema: z.ZodNativeEnum<typeof DatePosted> = z
  .nativeEnum(DatePosted);

/** @internal */
export const DatePosted$outboundSchema: z.ZodNativeEnum<typeof DatePosted> =
  DatePosted$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DatePosted$ {
  /** @deprecated use `DatePosted$inboundSchema` instead. */
  export const inboundSchema = DatePosted$inboundSchema;
  /** @deprecated use `DatePosted$outboundSchema` instead. */
  export const outboundSchema = DatePosted$outboundSchema;
}

/** @internal */
export const JobTypes$inboundSchema: z.ZodNativeEnum<typeof JobTypes> = z
  .nativeEnum(JobTypes);

/** @internal */
export const JobTypes$outboundSchema: z.ZodNativeEnum<typeof JobTypes> =
  JobTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobTypes$ {
  /** @deprecated use `JobTypes$inboundSchema` instead. */
  export const inboundSchema = JobTypes$inboundSchema;
  /** @deprecated use `JobTypes$outboundSchema` instead. */
  export const outboundSchema = JobTypes$outboundSchema;
}

/** @internal */
export const GoogleSearchJobPostingsRequestBody$inboundSchema: z.ZodType<
  GoogleSearchJobPostingsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string(),
  location: z.string().optional(),
  country_code: z.string().default("us"),
  date_posted: DatePosted$inboundSchema.optional(),
  job_types: z.array(JobTypes$inboundSchema).optional(),
  page: z.number().int().optional(),
  per_page: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "country_code": "countryCode",
    "date_posted": "datePosted",
    "job_types": "jobTypes",
    "per_page": "perPage",
  });
});

/** @internal */
export type GoogleSearchJobPostingsRequestBody$Outbound = {
  query: string;
  location?: string | undefined;
  country_code: string;
  date_posted?: string | undefined;
  job_types?: Array<string> | undefined;
  page?: number | undefined;
  per_page?: number | undefined;
};

/** @internal */
export const GoogleSearchJobPostingsRequestBody$outboundSchema: z.ZodType<
  GoogleSearchJobPostingsRequestBody$Outbound,
  z.ZodTypeDef,
  GoogleSearchJobPostingsRequestBody
> = z.object({
  query: z.string(),
  location: z.string().optional(),
  countryCode: z.string().default("us"),
  datePosted: DatePosted$outboundSchema.optional(),
  jobTypes: z.array(JobTypes$outboundSchema).optional(),
  page: z.number().int().optional(),
  perPage: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    countryCode: "country_code",
    datePosted: "date_posted",
    jobTypes: "job_types",
    perPage: "per_page",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GoogleSearchJobPostingsRequestBody$ {
  /** @deprecated use `GoogleSearchJobPostingsRequestBody$inboundSchema` instead. */
  export const inboundSchema = GoogleSearchJobPostingsRequestBody$inboundSchema;
  /** @deprecated use `GoogleSearchJobPostingsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    GoogleSearchJobPostingsRequestBody$outboundSchema;
  /** @deprecated use `GoogleSearchJobPostingsRequestBody$Outbound` instead. */
  export type Outbound = GoogleSearchJobPostingsRequestBody$Outbound;
}

export function googleSearchJobPostingsRequestBodyToJSON(
  googleSearchJobPostingsRequestBody: GoogleSearchJobPostingsRequestBody,
): string {
  return JSON.stringify(
    GoogleSearchJobPostingsRequestBody$outboundSchema.parse(
      googleSearchJobPostingsRequestBody,
    ),
  );
}

export function googleSearchJobPostingsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<GoogleSearchJobPostingsRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GoogleSearchJobPostingsRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GoogleSearchJobPostingsRequestBody' from JSON`,
  );
}

/** @internal */
export const GoogleSearchJobPostingsResponseBody$inboundSchema: z.ZodType<
  GoogleSearchJobPostingsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  job_postings: z.array(components.GoogleJobPosting$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "job_postings": "jobPostings",
  });
});

/** @internal */
export type GoogleSearchJobPostingsResponseBody$Outbound = {
  job_postings?: Array<components.GoogleJobPosting$Outbound> | undefined;
};

/** @internal */
export const GoogleSearchJobPostingsResponseBody$outboundSchema: z.ZodType<
  GoogleSearchJobPostingsResponseBody$Outbound,
  z.ZodTypeDef,
  GoogleSearchJobPostingsResponseBody
> = z.object({
  jobPostings: z.array(components.GoogleJobPosting$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    jobPostings: "job_postings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GoogleSearchJobPostingsResponseBody$ {
  /** @deprecated use `GoogleSearchJobPostingsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GoogleSearchJobPostingsResponseBody$inboundSchema;
  /** @deprecated use `GoogleSearchJobPostingsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GoogleSearchJobPostingsResponseBody$outboundSchema;
  /** @deprecated use `GoogleSearchJobPostingsResponseBody$Outbound` instead. */
  export type Outbound = GoogleSearchJobPostingsResponseBody$Outbound;
}

export function googleSearchJobPostingsResponseBodyToJSON(
  googleSearchJobPostingsResponseBody: GoogleSearchJobPostingsResponseBody,
): string {
  return JSON.stringify(
    GoogleSearchJobPostingsResponseBody$outboundSchema.parse(
      googleSearchJobPostingsResponseBody,
    ),
  );
}

export function googleSearchJobPostingsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GoogleSearchJobPostingsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GoogleSearchJobPostingsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GoogleSearchJobPostingsResponseBody' from JSON`,
  );
}