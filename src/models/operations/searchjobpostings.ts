/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Filter for job postings based on when they were posted
 */
export const DatePosted = {
  AnyTime: "Any time",
  Past24Hours: "Past 24 hours",
  PastWeek: "Past Week",
  PastMonth: "Past Month",
} as const;
/**
 * Filter for job postings based on when they were posted
 */
export type DatePosted = ClosedEnum<typeof DatePosted>;

/**
 * Salary range to filter job postings
 */
export const Salary = {
  Dollar40000Plus: "$40,000+",
  Dollar60000Plus: "$60,000+",
  Dollar80000Plus: "$80,000+",
  Dollar100000Plus: "$100,000+",
  Dollar120000Plus: "$120,000+",
  Dollar140000Plus: "$140,000+",
  Dollar160000Plus: "$160,000+",
  Dollar180000Plus: "$180,000+",
  Dollar200000Plus: "$200,000+",
} as const;
/**
 * Salary range to filter job postings
 */
export type Salary = ClosedEnum<typeof Salary>;

/**
 * Job type to filter (e.g., Full-time, Part-time)
 */
export const JobType = {
  Contract: "Contract",
  FullTime: "Full-time",
  PartTime: "Part-time",
  Internship: "Internship",
} as const;
/**
 * Job type to filter (e.g., Full-time, Part-time)
 */
export type JobType = ClosedEnum<typeof JobType>;

/**
 * Work type to filter (e.g., Remote, On-site)
 */
export const WorkType = {
  OnSite: "On-site",
  Remote: "Remote",
  Hybrid: "Hybrid",
} as const;
/**
 * Work type to filter (e.g., Remote, On-site)
 */
export type WorkType = ClosedEnum<typeof WorkType>;

/**
 * Experience level to filter (e.g., Associate, Executive)
 */
export const ExperienceLevel = {
  Associate: "Associate",
  Director: "Director",
  EntryLevel: "Entry Level",
  Executive: "Executive",
  Internship: "Internship",
  MidSeniorLevel: "Mid-Senior Level",
} as const;
/**
 * Experience level to filter (e.g., Associate, Executive)
 */
export type ExperienceLevel = ClosedEnum<typeof ExperienceLevel>;

/**
 * The criteria to sort results
 */
export const SearchJobPostingsSortBy = {
  MostRecent: "Most Recent",
  MostRelevant: "Most Relevant",
} as const;
/**
 * The criteria to sort results
 */
export type SearchJobPostingsSortBy = ClosedEnum<
  typeof SearchJobPostingsSortBy
>;

export type SearchJobPostingsRequestBody = {
  /**
   * Keywords to search for in job postings
   */
  keywords: string;
  /**
   * Location to filter job postings
   */
  location?: string | undefined;
  /**
   * Filter for job postings based on when they were posted
   */
  datePosted?: DatePosted | undefined;
  /**
   * Salary range to filter job postings
   */
  salary?: Salary | undefined;
  /**
   * Job type to filter (e.g., Full-time, Part-time)
   */
  jobType?: JobType | undefined;
  /**
   * Work type to filter (e.g., Remote, On-site)
   */
  workType?: WorkType | undefined;
  /**
   * Experience level to filter (e.g., Associate, Executive)
   */
  experienceLevel?: ExperienceLevel | undefined;
  /**
   * List of company unique identifiers to filter
   */
  companyUids?: Array<string> | undefined;
  /**
   * The criteria to sort results
   */
  sortBy?: SearchJobPostingsSortBy | undefined;
  /**
   * Page number for pagination (default is 1)
   */
  page?: number | undefined;
};

export type JobPostings = {
  /**
   * URL to the job posting
   */
  url?: string | undefined;
  /**
   * Title of the job
   */
  title?: string | undefined;
  /**
   * Job location
   */
  location?: string | undefined;
  /**
   * Date when the job was posted
   */
  datePosted?: Date | undefined;
  /**
   * Name of the company offering the job
   */
  companyName?: string | undefined;
  /**
   * URL to the company's profile
   */
  companyUrl?: string | undefined;
};

/**
 * SearchJobPostings API successful response
 */
export type SearchJobPostingsResponseBody = {
  jobPostings?: Array<JobPostings> | undefined;
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
export const Salary$inboundSchema: z.ZodNativeEnum<typeof Salary> = z
  .nativeEnum(Salary);

/** @internal */
export const Salary$outboundSchema: z.ZodNativeEnum<typeof Salary> =
  Salary$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Salary$ {
  /** @deprecated use `Salary$inboundSchema` instead. */
  export const inboundSchema = Salary$inboundSchema;
  /** @deprecated use `Salary$outboundSchema` instead. */
  export const outboundSchema = Salary$outboundSchema;
}

/** @internal */
export const JobType$inboundSchema: z.ZodNativeEnum<typeof JobType> = z
  .nativeEnum(JobType);

/** @internal */
export const JobType$outboundSchema: z.ZodNativeEnum<typeof JobType> =
  JobType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobType$ {
  /** @deprecated use `JobType$inboundSchema` instead. */
  export const inboundSchema = JobType$inboundSchema;
  /** @deprecated use `JobType$outboundSchema` instead. */
  export const outboundSchema = JobType$outboundSchema;
}

/** @internal */
export const WorkType$inboundSchema: z.ZodNativeEnum<typeof WorkType> = z
  .nativeEnum(WorkType);

/** @internal */
export const WorkType$outboundSchema: z.ZodNativeEnum<typeof WorkType> =
  WorkType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkType$ {
  /** @deprecated use `WorkType$inboundSchema` instead. */
  export const inboundSchema = WorkType$inboundSchema;
  /** @deprecated use `WorkType$outboundSchema` instead. */
  export const outboundSchema = WorkType$outboundSchema;
}

/** @internal */
export const ExperienceLevel$inboundSchema: z.ZodNativeEnum<
  typeof ExperienceLevel
> = z.nativeEnum(ExperienceLevel);

/** @internal */
export const ExperienceLevel$outboundSchema: z.ZodNativeEnum<
  typeof ExperienceLevel
> = ExperienceLevel$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperienceLevel$ {
  /** @deprecated use `ExperienceLevel$inboundSchema` instead. */
  export const inboundSchema = ExperienceLevel$inboundSchema;
  /** @deprecated use `ExperienceLevel$outboundSchema` instead. */
  export const outboundSchema = ExperienceLevel$outboundSchema;
}

/** @internal */
export const SearchJobPostingsSortBy$inboundSchema: z.ZodNativeEnum<
  typeof SearchJobPostingsSortBy
> = z.nativeEnum(SearchJobPostingsSortBy);

/** @internal */
export const SearchJobPostingsSortBy$outboundSchema: z.ZodNativeEnum<
  typeof SearchJobPostingsSortBy
> = SearchJobPostingsSortBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchJobPostingsSortBy$ {
  /** @deprecated use `SearchJobPostingsSortBy$inboundSchema` instead. */
  export const inboundSchema = SearchJobPostingsSortBy$inboundSchema;
  /** @deprecated use `SearchJobPostingsSortBy$outboundSchema` instead. */
  export const outboundSchema = SearchJobPostingsSortBy$outboundSchema;
}

/** @internal */
export const SearchJobPostingsRequestBody$inboundSchema: z.ZodType<
  SearchJobPostingsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  keywords: z.string(),
  location: z.string().optional(),
  date_posted: DatePosted$inboundSchema.optional(),
  salary: Salary$inboundSchema.optional(),
  job_type: JobType$inboundSchema.optional(),
  work_type: WorkType$inboundSchema.optional(),
  experience_level: ExperienceLevel$inboundSchema.optional(),
  company_uids: z.array(z.string()).optional(),
  sort_by: SearchJobPostingsSortBy$inboundSchema.optional(),
  page: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "date_posted": "datePosted",
    "job_type": "jobType",
    "work_type": "workType",
    "experience_level": "experienceLevel",
    "company_uids": "companyUids",
    "sort_by": "sortBy",
  });
});

/** @internal */
export type SearchJobPostingsRequestBody$Outbound = {
  keywords: string;
  location?: string | undefined;
  date_posted?: string | undefined;
  salary?: string | undefined;
  job_type?: string | undefined;
  work_type?: string | undefined;
  experience_level?: string | undefined;
  company_uids?: Array<string> | undefined;
  sort_by?: string | undefined;
  page?: number | undefined;
};

/** @internal */
export const SearchJobPostingsRequestBody$outboundSchema: z.ZodType<
  SearchJobPostingsRequestBody$Outbound,
  z.ZodTypeDef,
  SearchJobPostingsRequestBody
> = z.object({
  keywords: z.string(),
  location: z.string().optional(),
  datePosted: DatePosted$outboundSchema.optional(),
  salary: Salary$outboundSchema.optional(),
  jobType: JobType$outboundSchema.optional(),
  workType: WorkType$outboundSchema.optional(),
  experienceLevel: ExperienceLevel$outboundSchema.optional(),
  companyUids: z.array(z.string()).optional(),
  sortBy: SearchJobPostingsSortBy$outboundSchema.optional(),
  page: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    datePosted: "date_posted",
    jobType: "job_type",
    workType: "work_type",
    experienceLevel: "experience_level",
    companyUids: "company_uids",
    sortBy: "sort_by",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchJobPostingsRequestBody$ {
  /** @deprecated use `SearchJobPostingsRequestBody$inboundSchema` instead. */
  export const inboundSchema = SearchJobPostingsRequestBody$inboundSchema;
  /** @deprecated use `SearchJobPostingsRequestBody$outboundSchema` instead. */
  export const outboundSchema = SearchJobPostingsRequestBody$outboundSchema;
  /** @deprecated use `SearchJobPostingsRequestBody$Outbound` instead. */
  export type Outbound = SearchJobPostingsRequestBody$Outbound;
}

/** @internal */
export const JobPostings$inboundSchema: z.ZodType<
  JobPostings,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string().optional(),
  title: z.string().optional(),
  location: z.string().optional(),
  date_posted: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  company_name: z.string().optional(),
  company_url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "date_posted": "datePosted",
    "company_name": "companyName",
    "company_url": "companyUrl",
  });
});

/** @internal */
export type JobPostings$Outbound = {
  url?: string | undefined;
  title?: string | undefined;
  location?: string | undefined;
  date_posted?: string | undefined;
  company_name?: string | undefined;
  company_url?: string | undefined;
};

/** @internal */
export const JobPostings$outboundSchema: z.ZodType<
  JobPostings$Outbound,
  z.ZodTypeDef,
  JobPostings
> = z.object({
  url: z.string().optional(),
  title: z.string().optional(),
  location: z.string().optional(),
  datePosted: z.date().transform(v => v.toISOString()).optional(),
  companyName: z.string().optional(),
  companyUrl: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    datePosted: "date_posted",
    companyName: "company_name",
    companyUrl: "company_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobPostings$ {
  /** @deprecated use `JobPostings$inboundSchema` instead. */
  export const inboundSchema = JobPostings$inboundSchema;
  /** @deprecated use `JobPostings$outboundSchema` instead. */
  export const outboundSchema = JobPostings$outboundSchema;
  /** @deprecated use `JobPostings$Outbound` instead. */
  export type Outbound = JobPostings$Outbound;
}

/** @internal */
export const SearchJobPostingsResponseBody$inboundSchema: z.ZodType<
  SearchJobPostingsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  job_postings: z.array(z.lazy(() => JobPostings$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "job_postings": "jobPostings",
  });
});

/** @internal */
export type SearchJobPostingsResponseBody$Outbound = {
  job_postings?: Array<JobPostings$Outbound> | undefined;
};

/** @internal */
export const SearchJobPostingsResponseBody$outboundSchema: z.ZodType<
  SearchJobPostingsResponseBody$Outbound,
  z.ZodTypeDef,
  SearchJobPostingsResponseBody
> = z.object({
  jobPostings: z.array(z.lazy(() => JobPostings$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    jobPostings: "job_postings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchJobPostingsResponseBody$ {
  /** @deprecated use `SearchJobPostingsResponseBody$inboundSchema` instead. */
  export const inboundSchema = SearchJobPostingsResponseBody$inboundSchema;
  /** @deprecated use `SearchJobPostingsResponseBody$outboundSchema` instead. */
  export const outboundSchema = SearchJobPostingsResponseBody$outboundSchema;
  /** @deprecated use `SearchJobPostingsResponseBody$Outbound` instead. */
  export type Outbound = SearchJobPostingsResponseBody$Outbound;
}
