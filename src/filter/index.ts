import { ActionName, FilterName } from "../../constants.ts";
import fetchCampaignByIdAction from "../campaign/actions/fetch-campaign-by-id.action.ts";
import isCampaignAvaliableFilter from "../campaign/filters/is-campaign-avaliable.filter.ts";
import { TInput } from "./types/index.ts";

const filter = async () => {
  const filters$ = [
    {
      name: ActionName.FetchCampaignById,
      value: fetchCampaignByIdAction,
    },
    {
      name: FilterName.IsCampaignAvaliable,
      value: isCampaignAvaliableFilter,
    },
  ];

  const input: TInput = {
    policyNumber: "pno-1234",
    campaignId: 1,
  };
  let store = {};
  let code = 200;
  let message = "Successful";

  for (const filter of filters$) {
    const result = await filter.value.callback(input, store);

    console.log("Step:", filter.name, result.body?.code);

    if (!result.next) {
      if (result.body) {
        code = result.body.code;
        message = result.body.message;
        break;
      }
    }

    if (result.emit) {
      store = { ...store, ...result.emit };
    }
  }

  return {
    code,
    message,
  };
};

export default filter;
