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

export const Seniorities = {
  Owner: "owner",
  Founder: "founder",
  CSuite: "c_suite",
  Partner: "partner",
  Vp: "vp",
  Head: "head",
  Director: "director",
  Manager: "manager",
  Senior: "senior",
  Entry: "entry",
  Intern: "intern",
} as const;
export type Seniorities = ClosedEnum<typeof Seniorities>;

export type SearchPeopleRequestBody = {
  /**
   * Keywords to search for in people profiles
   */
  keywords?: string | undefined;
  /**
   * List of locations to filter the search
   */
  locations?: Array<string> | undefined;
  /**
   * List of job titles to filter the search
   */
  titles?: Array<string> | undefined;
  /**
   * List of seniority levels to filter the search
   */
  seniorities?: Array<Seniorities> | undefined;
  /**
   * List of company size ranges to filter the search
   */
  companySizes?: Array<components.LinkedInCompanySize> | undefined;
  /**
   * List of company industry tags to filter the search
   */
  companyIndustries?: Array<components.LinkedInCompanyIndustry> | undefined;
  /**
   * List of company domains to filter the search
   */
  companyDomains?: Array<string> | undefined;
  /**
   * Page number for pagination (default is 1)
   */
  page?: number | undefined;
};

/**
 * SearchPeople API successful response
 */
export type SearchPeopleResponseBody = {
  people?: Array<components.LinkedInPerson> | undefined;
};

/** @internal */
export const Seniorities$inboundSchema: z.ZodNativeEnum<typeof Seniorities> = z
  .nativeEnum(Seniorities);

/** @internal */
export const Seniorities$outboundSchema: z.ZodNativeEnum<typeof Seniorities> =
  Seniorities$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Seniorities$ {
  /** @deprecated use `Seniorities$inboundSchema` instead. */
  export const inboundSchema = Seniorities$inboundSchema;
  /** @deprecated use `Seniorities$outboundSchema` instead. */
  export const outboundSchema = Seniorities$outboundSchema;
}

/** @internal */
export const SearchPeopleRequestBody$inboundSchema: z.ZodType<
  SearchPeopleRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  keywords: z.string().optional(),
  locations: z.array(z.string()).optional(),
  titles: z.array(z.string()).optional(),
  seniorities: z.array(Seniorities$inboundSchema).optional(),
  company_sizes: z.array(components.LinkedInCompanySize$inboundSchema)
    .optional(),
  company_industries: z.array(components.LinkedInCompanyIndustry$inboundSchema)
    .optional(),
  company_domains: z.array(z.string()).optional(),
  page: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "company_sizes": "companySizes",
    "company_industries": "companyIndustries",
    "company_domains": "companyDomains",
  });
});

/** @internal */
export type SearchPeopleRequestBody$Outbound = {
  keywords?: string | undefined;
  locations?: Array<string> | undefined;
  titles?: Array<string> | undefined;
  seniorities?: Array<string> | undefined;
  company_sizes?: Array<string> | undefined;
  company_industries?: Array<string> | undefined;
  company_domains?: Array<string> | undefined;
  page?: number | undefined;
};

/** @internal */
export const SearchPeopleRequestBody$outboundSchema: z.ZodType<
  SearchPeopleRequestBody$Outbound,
  z.ZodTypeDef,
  SearchPeopleRequestBody
> = z.object({
  keywords: z.string().optional(),
  locations: z.array(z.string()).optional(),
  titles: z.array(z.string()).optional(),
  seniorities: z.array(Seniorities$outboundSchema).optional(),
  companySizes: z.array(components.LinkedInCompanySize$outboundSchema)
    .optional(),
  companyIndustries: z.array(components.LinkedInCompanyIndustry$outboundSchema)
    .optional(),
  companyDomains: z.array(z.string()).optional(),
  page: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    companySizes: "company_sizes",
    companyIndustries: "company_industries",
    companyDomains: "company_domains",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchPeopleRequestBody$ {
  /** @deprecated use `SearchPeopleRequestBody$inboundSchema` instead. */
  export const inboundSchema = SearchPeopleRequestBody$inboundSchema;
  /** @deprecated use `SearchPeopleRequestBody$outboundSchema` instead. */
  export const outboundSchema = SearchPeopleRequestBody$outboundSchema;
  /** @deprecated use `SearchPeopleRequestBody$Outbound` instead. */
  export type Outbound = SearchPeopleRequestBody$Outbound;
}

export function searchPeopleRequestBodyToJSON(
  searchPeopleRequestBody: SearchPeopleRequestBody,
): string {
  return JSON.stringify(
    SearchPeopleRequestBody$outboundSchema.parse(searchPeopleRequestBody),
  );
}

export function searchPeopleRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<SearchPeopleRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchPeopleRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchPeopleRequestBody' from JSON`,
  );
}

/** @internal */
export const SearchPeopleResponseBody$inboundSchema: z.ZodType<
  SearchPeopleResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  people: z.array(components.LinkedInPerson$inboundSchema).optional(),
});

/** @internal */
export type SearchPeopleResponseBody$Outbound = {
  people?: Array<components.LinkedInPerson$Outbound> | undefined;
};

/** @internal */
export const SearchPeopleResponseBody$outboundSchema: z.ZodType<
  SearchPeopleResponseBody$Outbound,
  z.ZodTypeDef,
  SearchPeopleResponseBody
> = z.object({
  people: z.array(components.LinkedInPerson$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchPeopleResponseBody$ {
  /** @deprecated use `SearchPeopleResponseBody$inboundSchema` instead. */
  export const inboundSchema = SearchPeopleResponseBody$inboundSchema;
  /** @deprecated use `SearchPeopleResponseBody$outboundSchema` instead. */
  export const outboundSchema = SearchPeopleResponseBody$outboundSchema;
  /** @deprecated use `SearchPeopleResponseBody$Outbound` instead. */
  export type Outbound = SearchPeopleResponseBody$Outbound;
}

export function searchPeopleResponseBodyToJSON(
  searchPeopleResponseBody: SearchPeopleResponseBody,
): string {
  return JSON.stringify(
    SearchPeopleResponseBody$outboundSchema.parse(searchPeopleResponseBody),
  );
}

export function searchPeopleResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<SearchPeopleResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchPeopleResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchPeopleResponseBody' from JSON`,
  );
}
