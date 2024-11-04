/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Server error response
 */
export type ServerErrorData = {
  /**
   * Error message string
   */
  message?: string | undefined;
};

/**
 * Server error response
 */
export class ServerError extends Error {
  /** The original data that was passed to this error instance. */
  data$: ServerErrorData;

  constructor(err: ServerErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.name = "ServerError";
  }
}

/** @internal */
export const ServerError$inboundSchema: z.ZodType<
  ServerError,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string().optional(),
})
  .transform((v) => {
    return new ServerError(v);
  });

/** @internal */
export type ServerError$Outbound = {
  message?: string | undefined;
};

/** @internal */
export const ServerError$outboundSchema: z.ZodType<
  ServerError$Outbound,
  z.ZodTypeDef,
  ServerError
> = z.instanceof(ServerError)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string().optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServerError$ {
  /** @deprecated use `ServerError$inboundSchema` instead. */
  export const inboundSchema = ServerError$inboundSchema;
  /** @deprecated use `ServerError$outboundSchema` instead. */
  export const outboundSchema = ServerError$outboundSchema;
  /** @deprecated use `ServerError$Outbound` instead. */
  export type Outbound = ServerError$Outbound;
}
