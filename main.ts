import filter from "./src/filter/index.ts";

const main = async () => {
  // Assume filter set query from database by campaign id
  const filterSet = [
    "fetchCampaignById",
    "isCampaignAvaliable",
  ];
  const result = await filter({
    campaignId: 1,
    policyNumber: "6924245361678388",
    mobile: "0990209299",
  }, filterSet);
  console.log("result", result);
};

main();
