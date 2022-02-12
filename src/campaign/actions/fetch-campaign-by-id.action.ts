import { TFilter, TInput } from "../../filter/types/index.ts";
import { getCampaignById } from "../campaign.repository.ts";

const fetchCampaignByIdAction: TFilter<Campaign> = {
  callback: async (input: TInput, _store: null) => {
    const { campaignId } = input;
    const campaign = await getCampaignById(campaignId);
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
