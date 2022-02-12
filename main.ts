import filter from "./src/filter/index.ts";

const main = async () => {
  // Assume filter set query from database by campaign id
  const filterSetA = [
    "fetchCampaignById",
    "isCampaignAvaliable",
    "isCodeOutOfStock",
  ];
  console.log('filterSetA', filterSetA)
  const result = await filter();
  console.log("result", result);
};

main();
