import registerFilter from "../register.filter.ts";

const getFilterByFilterSet = (
  filterSet: Array<string>,
  filterControl = registerFilter,
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
