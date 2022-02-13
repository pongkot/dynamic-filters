import filter from "./src/filter/index.ts";

const main = async () => {
  // Assume client POST request
  // POST checkout/1
  const campaignId = 3;
  const policyNumber = "6924245361678388";
  const mobile = "0990209299";

  // Assume filter set query from database by campaign id (1)
  const filterSet = [
    "fetchCampaignById",
    "isCampaignAvaliable",
  ];

  // Filter process
  const result = await filter({
    campaignId,
    policyNumber,
    mobile,
  }, filterSet);

  // Assume server response JSON
  console.log("result", result);
};

main();
