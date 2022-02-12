import { ActionName, FilterName } from "../../../constants.ts";

export type TInput = {
  policyNumber: string;
  campaignId: number;
  mobile?: string;
};

export type TStore<T> = T;

export type TFilter<T> = {
  required?: Array<ActionName | FilterName>;
  // deno-lint-ignore no-explicit-any
  callback: (input: TInput, store: any) => {
    next: boolean;
    body?: {
      code: number;
      message: string;
    };
    emit?: T;
  };
};
