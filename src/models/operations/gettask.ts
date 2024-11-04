/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GetTaskRequestBody = {
  /**
   * The ID of the task to retrieve
   */
  taskId: string;
};

/**
 * GetTask API successful response
 */
export type GetTaskResponseBody = {
  task?: components.NavigatorTask | undefined;
};

/** @internal */
export const GetTaskRequestBody$inboundSchema: z.ZodType<
  GetTaskRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  task_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "task_id": "taskId",
  });
});

/** @internal */
export type GetTaskRequestBody$Outbound = {
  task_id: string;
};

/** @internal */
export const GetTaskRequestBody$outboundSchema: z.ZodType<
  GetTaskRequestBody$Outbound,
  z.ZodTypeDef,
  GetTaskRequestBody
> = z.object({
  taskId: z.string(),
}).transform((v) => {
  return remap$(v, {
    taskId: "task_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTaskRequestBody$ {
  /** @deprecated use `GetTaskRequestBody$inboundSchema` instead. */
  export const inboundSchema = GetTaskRequestBody$inboundSchema;
  /** @deprecated use `GetTaskRequestBody$outboundSchema` instead. */
  export const outboundSchema = GetTaskRequestBody$outboundSchema;
  /** @deprecated use `GetTaskRequestBody$Outbound` instead. */
  export type Outbound = GetTaskRequestBody$Outbound;
}

/** @internal */
export const GetTaskResponseBody$inboundSchema: z.ZodType<
  GetTaskResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  task: components.NavigatorTask$inboundSchema.optional(),
});

/** @internal */
export type GetTaskResponseBody$Outbound = {
  task?: components.NavigatorTask$Outbound | undefined;
};

/** @internal */
export const GetTaskResponseBody$outboundSchema: z.ZodType<
  GetTaskResponseBody$Outbound,
  z.ZodTypeDef,
  GetTaskResponseBody
> = z.object({
  task: components.NavigatorTask$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTaskResponseBody$ {
  /** @deprecated use `GetTaskResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetTaskResponseBody$inboundSchema;
  /** @deprecated use `GetTaskResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetTaskResponseBody$outboundSchema;
  /** @deprecated use `GetTaskResponseBody$Outbound` instead. */
  export type Outbound = GetTaskResponseBody$Outbound;
}
