import { ActionName } from "../../../constants.ts";
import { TFilter, TInput } from "../../filter/types/index.ts";
import { Campaign } from "../actions/fetch-campaign-by-id.action.ts";

const isCampaignAvaliableFilter: TFilter<undefined> = {
  required: [ActionName.FetchCampaignById],
  callback: (_input: TInput, store: { campaign: Campaign }) => {
    let next = true;
    let body = {
      code: 200,
      message: "Successful",
    };
    const submitDate = new Date();
    const { campaign: { start, end } } = store;
    const isSubmitDateGtCampaignStart = submitDate.getTime() > start.getTime();
    const isSubmitDateLtCampaignEnd = submitDate.getTime() < end.getTime();
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
