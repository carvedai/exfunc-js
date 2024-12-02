/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { linkedinGetCompany } from "../funcs/linkedinGetCompany.js";
import { linkedinGetJobPosting } from "../funcs/linkedinGetJobPosting.js";
import { linkedinGetPerson } from "../funcs/linkedinGetPerson.js";
import { linkedinSearchCompanies } from "../funcs/linkedinSearchCompanies.js";
import { linkedinSearchJobPostings } from "../funcs/linkedinSearchJobPostings.js";
import { linkedinSearchPeople } from "../funcs/linkedinSearchPeople.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Linkedin extends ClientSDK {
  /**
   * Get LinkedIn company info
   *
   * @remarks
   * Get LinkedIn company info from either a LinkedIn company url or company website url. Only one is required.
   */
  async getCompany(
    request: operations.GetCompanyRequestBody,
    options?: RequestOptions,
  ): Promise<operations.GetCompanyResponseBody> {
    return unwrapAsync(linkedinGetCompany(
      this,
      request,
      options,
    ));
  }

  /**
   * Get LinkedIn job posting info
   *
   * @remarks
   * Get LinkedIn job posting info from a LinkedIn job posting url
   */
  async getJobPosting(
    request: operations.GetJobPostingRequestBody,
    options?: RequestOptions,
  ): Promise<operations.GetJobPostingResponseBody> {
    return unwrapAsync(linkedinGetJobPosting(
      this,
      request,
      options,
    ));
  }

  /**
   * Get LinkedIn person profile info
   *
   * @remarks
   * Get LinkedIn person profile info from a LinkedIn person profile url
   */
  async getPerson(
    request: operations.GetPersonRequestBody,
    options?: RequestOptions,
  ): Promise<operations.GetPersonResponseBody> {
    return unwrapAsync(linkedinGetPerson(
      this,
      request,
      options,
    ));
  }

  /**
   * Search for LinkedIn companies
   *
   * @remarks
   * Search for companies on LinkedIn for a given name, locations, and other criteria
   */
  async searchCompanies(
    request: operations.SearchCompaniesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.SearchCompaniesResponseBody> {
    return unwrapAsync(linkedinSearchCompanies(
      this,
      request,
      options,
    ));
  }

  /**
   * Search for LinkedIn job postings
   *
   * @remarks
   * Search for job postings on LinkedIn for a given keywords, location, and other criteria
   */
  async searchJobPostings(
    request: operations.SearchJobPostingsRequestBody,
    options?: RequestOptions,
  ): Promise<operations.SearchJobPostingsResponseBody> {
    return unwrapAsync(linkedinSearchJobPostings(
      this,
      request,
      options,
    ));
  }

  /**
   * Search for LinkedIn people
   *
   * @remarks
   * Search for people on LinkedIn for a given keywords, locations, and other criteria
   */
  async searchPeople(
    request: operations.SearchPeopleRequestBody,
    options?: RequestOptions,
  ): Promise<operations.SearchPeopleResponseBody> {
    return unwrapAsync(linkedinSearchPeople(
      this,
      request,
      options,
    ));
  }
}
