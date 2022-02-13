import filterRegister from "../filter.register.ts";

const getFilterByFilterSet = (
  filterSet: Array<string>,
  filterControl = filterRegister,
) => {
  const result = [];
  for (const filterName of filterSet) {
    const [filter] = filterControl.filter((filter) =>
      filter.name === filterName
    );
    result.push(filter);
  }
  return result;
};

export default getFilterByFilterSet;
