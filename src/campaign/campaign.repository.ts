import { Campaign } from "./actions/fetch-campaign-by-id.action.ts";

export const getCampaignById = (id: number): Promise<Campaign> => {
  const campaignList: Array<Campaign> = [
    {
      id: 1,
      name: "discount 10 bath",
      start: new Date("2022-01-01"),
      end: new Date("2022-01-31"),
    },
    {
      id: 2,
      name: "discount 20 bath",
      start: new Date("2022-02-01"),
      end: new Date("2022-02-28"),
    },
    {
      id: 3,
      name: "discount 30 bath",
      start: new Date("2022-03-01"),
      end: new Date("2022-03-31"),
    },
  ];

  return new Promise((resolve) => {
    if (id > 3 || id < 1) {
      throw new Error("campaign does not exist");
    }
    resolve(campaignList[id]);
  });
};
