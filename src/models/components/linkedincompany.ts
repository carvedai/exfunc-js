/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Total rounds of funding information
 */
export type TotalRounds = {
  /**
   * Number of funding rounds
   */
  count?: number | null | undefined;
  /**
   * URL of source
   */
  url?: string | null | undefined;
};

/**
 * Last round of funding information
 */
export type LastRound = {
  /**
   * Stage of last funding round
   */
  stage?: string | null | undefined;
  /**
   * Date of last funding round
   */
  date?: string | null | undefined;
  /**
   * Amount of last funding round
   */
  amount?: string | null | undefined;
  /**
   * URL of source
   */
  url?: string | null | undefined;
};

export type Investors = {
  /**
   * Name of investor
   */
  name?: string | null | undefined;
  /**
   * URL of source
   */
  url?: string | null | undefined;
};

/**
 * Funding information for the company
 */
export type Funding = {
  /**
   * Total rounds of funding information
   */
  totalRounds?: TotalRounds | undefined;
  /**
   * Last round of funding information
   */
  lastRound?: LastRound | undefined;
  /**
   * List of investors
   */
  investors?: Array<Investors> | undefined;
};

export type LinkedInCompany = {
  /**
   * URL to the company's profile
   */
  url?: string | undefined;
  /**
   * Name of the company
   */
  name?: string | undefined;
  /**
   * Location of the company
   */
  location?: string | undefined;
  /**
   * Industry in which the company operates
   */
  industry?: string | undefined;
  /**
   * Overview or description of the company
   */
  overview?: string | undefined;
  /**
   * Size of the company (e.g., number of employees)
   */
  size?: string | undefined;
  /**
   * Commma separated string of specialties or areas of expertise for the company
   */
  specialties?: string | undefined;
  /**
   * Company's website URL
   */
  websiteUrl?: string | undefined;
  /**
   * Funding information for the company
   */
  funding?: Funding | undefined;
};

/** @internal */
export const TotalRounds$inboundSchema: z.ZodType<
  TotalRounds,
  z.ZodTypeDef,
  unknown
> = z.object({
  count: z.nullable(z.number().int()).optional(),
  url: z.nullable(z.string()).optional(),
});

/** @internal */
export type TotalRounds$Outbound = {
  count?: number | null | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const TotalRounds$outboundSchema: z.ZodType<
  TotalRounds$Outbound,
  z.ZodTypeDef,
  TotalRounds
> = z.object({
  count: z.nullable(z.number().int()).optional(),
  url: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TotalRounds$ {
  /** @deprecated use `TotalRounds$inboundSchema` instead. */
  export const inboundSchema = TotalRounds$inboundSchema;
  /** @deprecated use `TotalRounds$outboundSchema` instead. */
  export const outboundSchema = TotalRounds$outboundSchema;
  /** @deprecated use `TotalRounds$Outbound` instead. */
  export type Outbound = TotalRounds$Outbound;
}

export function totalRoundsToJSON(totalRounds: TotalRounds): string {
  return JSON.stringify(TotalRounds$outboundSchema.parse(totalRounds));
}

export function totalRoundsFromJSON(
  jsonString: string,
): SafeParseResult<TotalRounds, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TotalRounds$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TotalRounds' from JSON`,
  );
}

/** @internal */
export const LastRound$inboundSchema: z.ZodType<
  LastRound,
  z.ZodTypeDef,
  unknown
> = z.object({
  stage: z.nullable(z.string()).optional(),
  date: z.nullable(z.string()).optional(),
  amount: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
});

/** @internal */
export type LastRound$Outbound = {
  stage?: string | null | undefined;
  date?: string | null | undefined;
  amount?: string | null | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const LastRound$outboundSchema: z.ZodType<
  LastRound$Outbound,
  z.ZodTypeDef,
  LastRound
> = z.object({
  stage: z.nullable(z.string()).optional(),
  date: z.nullable(z.string()).optional(),
  amount: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LastRound$ {
  /** @deprecated use `LastRound$inboundSchema` instead. */
  export const inboundSchema = LastRound$inboundSchema;
  /** @deprecated use `LastRound$outboundSchema` instead. */
  export const outboundSchema = LastRound$outboundSchema;
  /** @deprecated use `LastRound$Outbound` instead. */
  export type Outbound = LastRound$Outbound;
}

export function lastRoundToJSON(lastRound: LastRound): string {
  return JSON.stringify(LastRound$outboundSchema.parse(lastRound));
}

export function lastRoundFromJSON(
  jsonString: string,
): SafeParseResult<LastRound, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LastRound$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LastRound' from JSON`,
  );
}

/** @internal */
export const Investors$inboundSchema: z.ZodType<
  Investors,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
});

/** @internal */
export type Investors$Outbound = {
  name?: string | null | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const Investors$outboundSchema: z.ZodType<
  Investors$Outbound,
  z.ZodTypeDef,
  Investors
> = z.object({
  name: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Investors$ {
  /** @deprecated use `Investors$inboundSchema` instead. */
  export const inboundSchema = Investors$inboundSchema;
  /** @deprecated use `Investors$outboundSchema` instead. */
  export const outboundSchema = Investors$outboundSchema;
  /** @deprecated use `Investors$Outbound` instead. */
  export type Outbound = Investors$Outbound;
}

export function investorsToJSON(investors: Investors): string {
  return JSON.stringify(Investors$outboundSchema.parse(investors));
}

export function investorsFromJSON(
  jsonString: string,
): SafeParseResult<Investors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Investors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Investors' from JSON`,
  );
}

/** @internal */
export const Funding$inboundSchema: z.ZodType<Funding, z.ZodTypeDef, unknown> =
  z.object({
    total_rounds: z.lazy(() => TotalRounds$inboundSchema).optional(),
    last_round: z.lazy(() => LastRound$inboundSchema).optional(),
    investors: z.array(z.lazy(() => Investors$inboundSchema)).optional(),
  }).transform((v) => {
    return remap$(v, {
      "total_rounds": "totalRounds",
      "last_round": "lastRound",
    });
  });

/** @internal */
export type Funding$Outbound = {
  total_rounds?: TotalRounds$Outbound | undefined;
  last_round?: LastRound$Outbound | undefined;
  investors?: Array<Investors$Outbound> | undefined;
};

/** @internal */
export const Funding$outboundSchema: z.ZodType<
  Funding$Outbound,
  z.ZodTypeDef,
  Funding
> = z.object({
  totalRounds: z.lazy(() => TotalRounds$outboundSchema).optional(),
  lastRound: z.lazy(() => LastRound$outboundSchema).optional(),
  investors: z.array(z.lazy(() => Investors$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    totalRounds: "total_rounds",
    lastRound: "last_round",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Funding$ {
  /** @deprecated use `Funding$inboundSchema` instead. */
  export const inboundSchema = Funding$inboundSchema;
  /** @deprecated use `Funding$outboundSchema` instead. */
  export const outboundSchema = Funding$outboundSchema;
  /** @deprecated use `Funding$Outbound` instead. */
  export type Outbound = Funding$Outbound;
}

export function fundingToJSON(funding: Funding): string {
  return JSON.stringify(Funding$outboundSchema.parse(funding));
}

export function fundingFromJSON(
  jsonString: string,
): SafeParseResult<Funding, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Funding$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Funding' from JSON`,
  );
}

/** @internal */
export const LinkedInCompany$inboundSchema: z.ZodType<
  LinkedInCompany,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string().optional(),
  name: z.string().optional(),
  location: z.string().optional(),
  industry: z.string().optional(),
  overview: z.string().optional(),
  size: z.string().optional(),
  specialties: z.string().optional(),
  website_url: z.string().optional(),
  funding: z.lazy(() => Funding$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "website_url": "websiteUrl",
  });
});

/** @internal */
export type LinkedInCompany$Outbound = {
  url?: string | undefined;
  name?: string | undefined;
  location?: string | undefined;
  industry?: string | undefined;
  overview?: string | undefined;
  size?: string | undefined;
  specialties?: string | undefined;
  website_url?: string | undefined;
  funding?: Funding$Outbound | undefined;
};

/** @internal */
export const LinkedInCompany$outboundSchema: z.ZodType<
  LinkedInCompany$Outbound,
  z.ZodTypeDef,
  LinkedInCompany
> = z.object({
  url: z.string().optional(),
  name: z.string().optional(),
  location: z.string().optional(),
  industry: z.string().optional(),
  overview: z.string().optional(),
  size: z.string().optional(),
  specialties: z.string().optional(),
  websiteUrl: z.string().optional(),
  funding: z.lazy(() => Funding$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    websiteUrl: "website_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinkedInCompany$ {
  /** @deprecated use `LinkedInCompany$inboundSchema` instead. */
  export const inboundSchema = LinkedInCompany$inboundSchema;
  /** @deprecated use `LinkedInCompany$outboundSchema` instead. */
  export const outboundSchema = LinkedInCompany$outboundSchema;
  /** @deprecated use `LinkedInCompany$Outbound` instead. */
  export type Outbound = LinkedInCompany$Outbound;
}

export function linkedInCompanyToJSON(
  linkedInCompany: LinkedInCompany,
): string {
  return JSON.stringify(LinkedInCompany$outboundSchema.parse(linkedInCompany));
}

export function linkedInCompanyFromJSON(
  jsonString: string,
): SafeParseResult<LinkedInCompany, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinkedInCompany$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinkedInCompany' from JSON`,
  );
}
