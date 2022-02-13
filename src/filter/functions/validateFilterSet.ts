import filterRegister from "../filter.register.ts";
import isIn from "../../common/functions/isIn.ts";

const validateFilterSet = (
  filterSet: Array<string>,
  filterControl = filterRegister,
): boolean => {
  const filterControlNameList = filterControl.map((filter) => filter.name);
  for (const filterStep of filterControlNameList) {
    if (!isIn(filterStep, filterControlNameList)) {
      throw new Error(`Invalid filter set, ${filterSet} is invalid.`);
    }
  }
  return true;
};

export default validateFilterSet;
