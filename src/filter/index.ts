import getFilterByFilterSet from "./functions/getFilterByFilterSet.ts";
import validateFilterSet from "./functions/validateFilterSet.ts";
import { TInput } from "./types/index.ts";

const filter = async (input: TInput, filterSet: Array<string>) => {
  validateFilterSet(filterSet);

  let store = {};
  let code = 200;
  let message = "Successful";
  const filters = getFilterByFilterSet(filterSet);

  for (const filter of filters) {
    const result = await filter.value.callback(input, store);

    console.log("Step:", filter.name, result.body?.code);

    if (!result.next) {
      if (result.body) {
        code = result.body.code;
        message = result.body.message;
        break;
      }
    }

    if (result.emit) {
      store = { ...store, ...result.emit };
    }
  }

  return {
    code,
    message,
  };
};

export default filter;
