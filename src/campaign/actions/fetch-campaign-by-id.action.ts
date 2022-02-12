import { TFilter, TInput, TStore } from "../../filter/types/index.ts";

const fetchCampaignByIdAction: TFilter<Campaign> = {
  callback: (input: TInput, _store: TStore<undefined>) => {
    const { campaignId } = input;
    const campaign: Campaign = {
      id: campaignId,
      name: "Discount 1000 Bath",
      start: new Date("2021-01-01"),
      end: new Date("2022-01-31"),
    };
    return {
      next: true,
      body: {
        code: 200,
        message: "Successful",
      },
      emit: campaign,
    };
  },
};

export type Campaign = {
  id: number;
  name: string;
  start: Date;
  end: Date;
};

export default fetchCampaignByIdAction;
