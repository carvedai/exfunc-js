/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as components from "../components/index.js";

/**
 * Sort the results by a specific field
 */
export const SortBy = {
  BestMatch: "best_match",
  LowestPrice: "lowest_price",
  HighestPrice: "highest_price",
} as const;
/**
 * Sort the results by a specific field
 */
export type SortBy = ClosedEnum<typeof SortBy>;

/**
 * Filter products by condition
 */
export const ProductCondition = {
  Any: "any",
  New: "new",
  Used: "used",
  Refurbished: "refurbished",
} as const;
/**
 * Filter products by condition
 */
export type ProductCondition = ClosedEnum<typeof ProductCondition>;

export type SearchProductsRequestBody = {
  /**
   * The search query for products
   */
  query: string;
  /**
   * The country code for filtering products
   */
  countryCode?: string | undefined;
  /**
   * Page number for pagination (default is 1)
   */
  page?: number | undefined;
  /**
   * Number of products to return per page (default is 10)
   */
  perPage?: number | undefined;
  /**
   * Sort the results by a specific field
   */
  sortBy?: SortBy | undefined;
  /**
   * Filter products by condition
   */
  productCondition?: ProductCondition | undefined;
};

/**
 * SearchProducts API successful response
 */
export type SearchProductsResponseBody = {
  products?: Array<components.GoogleProduct> | undefined;
};

/** @internal */
export const SortBy$inboundSchema: z.ZodNativeEnum<typeof SortBy> = z
  .nativeEnum(SortBy);

/** @internal */
export const SortBy$outboundSchema: z.ZodNativeEnum<typeof SortBy> =
  SortBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SortBy$ {
  /** @deprecated use `SortBy$inboundSchema` instead. */
  export const inboundSchema = SortBy$inboundSchema;
  /** @deprecated use `SortBy$outboundSchema` instead. */
  export const outboundSchema = SortBy$outboundSchema;
}

/** @internal */
export const ProductCondition$inboundSchema: z.ZodNativeEnum<
  typeof ProductCondition
> = z.nativeEnum(ProductCondition);

/** @internal */
export const ProductCondition$outboundSchema: z.ZodNativeEnum<
  typeof ProductCondition
> = ProductCondition$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductCondition$ {
  /** @deprecated use `ProductCondition$inboundSchema` instead. */
  export const inboundSchema = ProductCondition$inboundSchema;
  /** @deprecated use `ProductCondition$outboundSchema` instead. */
  export const outboundSchema = ProductCondition$outboundSchema;
}

/** @internal */
export const SearchProductsRequestBody$inboundSchema: z.ZodType<
  SearchProductsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string(),
  country_code: z.string().optional(),
  page: z.number().int().optional(),
  per_page: z.number().int().optional(),
  sort_by: SortBy$inboundSchema.optional(),
  product_condition: ProductCondition$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "country_code": "countryCode",
    "per_page": "perPage",
    "sort_by": "sortBy",
    "product_condition": "productCondition",
  });
});

/** @internal */
export type SearchProductsRequestBody$Outbound = {
  query: string;
  country_code?: string | undefined;
  page?: number | undefined;
  per_page?: number | undefined;
  sort_by?: string | undefined;
  product_condition?: string | undefined;
};

/** @internal */
export const SearchProductsRequestBody$outboundSchema: z.ZodType<
  SearchProductsRequestBody$Outbound,
  z.ZodTypeDef,
  SearchProductsRequestBody
> = z.object({
  query: z.string(),
  countryCode: z.string().optional(),
  page: z.number().int().optional(),
  perPage: z.number().int().optional(),
  sortBy: SortBy$outboundSchema.optional(),
  productCondition: ProductCondition$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    countryCode: "country_code",
    perPage: "per_page",
    sortBy: "sort_by",
    productCondition: "product_condition",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchProductsRequestBody$ {
  /** @deprecated use `SearchProductsRequestBody$inboundSchema` instead. */
  export const inboundSchema = SearchProductsRequestBody$inboundSchema;
  /** @deprecated use `SearchProductsRequestBody$outboundSchema` instead. */
  export const outboundSchema = SearchProductsRequestBody$outboundSchema;
  /** @deprecated use `SearchProductsRequestBody$Outbound` instead. */
  export type Outbound = SearchProductsRequestBody$Outbound;
}

/** @internal */
export const SearchProductsResponseBody$inboundSchema: z.ZodType<
  SearchProductsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  products: z.array(components.GoogleProduct$inboundSchema).optional(),
});

/** @internal */
export type SearchProductsResponseBody$Outbound = {
  products?: Array<components.GoogleProduct$Outbound> | undefined;
};

/** @internal */
export const SearchProductsResponseBody$outboundSchema: z.ZodType<
  SearchProductsResponseBody$Outbound,
  z.ZodTypeDef,
  SearchProductsResponseBody
> = z.object({
  products: z.array(components.GoogleProduct$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchProductsResponseBody$ {
  /** @deprecated use `SearchProductsResponseBody$inboundSchema` instead. */
  export const inboundSchema = SearchProductsResponseBody$inboundSchema;
  /** @deprecated use `SearchProductsResponseBody$outboundSchema` instead. */
  export const outboundSchema = SearchProductsResponseBody$outboundSchema;
  /** @deprecated use `SearchProductsResponseBody$Outbound` instead. */
  export type Outbound = SearchProductsResponseBody$Outbound;
}
