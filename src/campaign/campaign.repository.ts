import { Campaign } from "./actions/fetch-campaign-by-id.action.ts";

export const getCampaignById = (id: number): Promise<Campaign> => {
  id -= 1;

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

  return new Promise((resolve, reject) => {
    if (!(id > 0 && id < 4)) {
      reject(new Error("Campaign does not exist"));
    }
    resolve(campaignList[id]);
  });
};
