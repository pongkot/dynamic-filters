import { ActionName, FilterName } from "../../constants.ts";
import fetchCampaignByIdAction from "../campaign/actions/fetch-campaign-by-id.action.ts";
import isCampaignAvaliableFilter from "../campaign/filters/is-campaign-avaliable.filter.ts";
import { TInput } from "./types/index.ts";

const filter = () => {
  const filters = new Map();

  filters.set(ActionName.FetchCampaignById, fetchCampaignByIdAction);
  filters.set(FilterName.IsCampaignAvaliable, isCampaignAvaliableFilter);

  const input: TInput = {
    policyNumber: "pno-1234",
    campaignId: 1,
  };
  let store = {};
  let code = 200;
  let message = "Successful";

  filters.forEach((filter) => {
    const { next, body, emit } = filter.callback(input, store);

    if (!next) {
      code = body.code;
      message = body.message;
      return;
    }

    if (emit) {
      store = { ...store, ...emit };
    }
  });

  return {
    code,
    message,
  };
};

export default filter;
