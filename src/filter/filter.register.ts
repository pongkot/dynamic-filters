import { ActionName, FilterName } from "../../constants.ts";
import fetchCampaignByIdAction from "../campaign/actions/fetch-campaign-by-id.action.ts";
import isCampaignAvaliableFilter from "../campaign/filters/is-campaign-avaliable.filter.ts";

const filterRegister = [
  {
    name: ActionName.FetchCampaignById,
    value: fetchCampaignByIdAction,
  },
  {
    name: FilterName.IsCampaignAvaliable,
    value: isCampaignAvaliableFilter,
  },
];

export default filterRegister;
