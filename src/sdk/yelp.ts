/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { yelpGet } from "../funcs/yelpGet.js";
import { yelpGetReviews } from "../funcs/yelpGetReviews.js";
import { yelpSearchBusinesses } from "../funcs/yelpSearchBusinesses.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Yelp extends ClientSDK {
  /**
   * Get business details from Yelp
   *
   * @remarks
   * Get business details from Yelp for a given business ID
   */
  async get(
    request: operations.GetBusinessRequestBody,
    options?: RequestOptions,
  ): Promise<operations.GetBusinessResponseBody> {
    return unwrapAsync(yelpGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Yelp reviews for a business
   *
   * @remarks
   * Get a list of reviews on Yelp for a given business ID
   */
  async getReviews(
    request: operations.GetBusinessReviewsRequestBody,
    options?: RequestOptions,
  ): Promise<operations.GetBusinessReviewsResponseBody> {
    return unwrapAsync(yelpGetReviews(
      this,
      request,
      options,
    ));
  }

  /**
   * Search for businesses on Yelp
   *
   * @remarks
   * Search for businesses on Yelp given a query, location, and other criteria
   */
  async searchBusinesses(
    request: operations.SearchBusinessesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.SearchBusinessesResponseBody> {
    return unwrapAsync(yelpSearchBusinesses(
      this,
      request,
      options,
    ));
  }
}
