import registerFilter from "./register.filter.ts";
import { TInput } from "./types/index.ts";

const isIn = (value: string, list: Array<string>) => list.includes(value);

const filter = async (input: TInput, step: Array<string>) => {
  let store = {};
  let code = 200;
  let message = "Successful";
  const filterList = registerFilter.map((filter) => filter.name);
  const l = [];

  for (const s of step) {
    if (!isIn(s, filterList)) {
      throw new Error("Invalid step");
    }
    const [i] = registerFilter.filter((f) => f.name === s);
    l.push(i);
  }

  for (const filter of l) {
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
