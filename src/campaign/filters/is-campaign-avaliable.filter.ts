import { ActionName } from "../../../constants.ts";
import { TFilter, TInput, TStore } from "../../filter/types/index.ts";
import { Campaign } from "../actions/fetch-campaign-by-id.action.ts";

const isCampaignAvaliableFilter: TFilter<never> = {
  required: [ActionName.FetchCampaignById],
  callback: (_input: TInput, store: TStore<Campaign>) => {
    let next = true;
    let body = {
      code: 200,
      message: "Successful",
    };
    const submitDate = new Date("2022-01-01");
    const { start: campaignStart, end: campaignEnd } = store;
    const isSubmitDateGtCampaignStart =
      submitDate.getTime() > campaignStart.getTime();
    const isSubmitDateLtCampaignEnd =
      submitDate.getTime() < campaignEnd.getTime();
    const isSubmitDateOnPeriod = isSubmitDateGtCampaignStart &&
      isSubmitDateLtCampaignEnd;

    if (!isSubmitDateOnPeriod) {
      next = false;
      body = {
        code: 401,
        message: "Fail",
      };
    }

    return {
      next,
      body,
    };
  },
};

export default isCampaignAvaliableFilter;