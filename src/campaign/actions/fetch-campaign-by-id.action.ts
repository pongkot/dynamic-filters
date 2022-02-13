import { TFilter, TInput } from "../../filter/types/index.ts";
import { getCampaignById } from "../campaign.repository.ts";

const fetchCampaignByIdAction: TFilter<{ campaign: Campaign }> = {
  callback: async (input: TInput, _store: null) => {
    const { campaignId } = input;
    let next = true;
    let code = 200;
    let message = "Successful";
    let campaign = {} as Campaign;

    try {
      campaign = await getCampaignById(campaignId);
    } catch (error: unknown) {
      if (error instanceof Error) {
        next = false;
        code = 400;
        message = error.message;
      }
    }

    return {
      next,
      body: {
        code,
        message,
      },
      emit: { campaign },
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
