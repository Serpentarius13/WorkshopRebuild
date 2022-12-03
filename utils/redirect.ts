import { QueryNames } from "../components/modalOver";
import { useZustandStore } from "../store/store";

type Redirect = (type: QueryNames, returnings: any, login: (string) => void) => Promise<string>;

export const RedirectFunction: Redirect = async (type, returnings, login) => {
  switch (type) {
    case QueryNames.NEW_DREAM:
      const { _id } = returnings;
      return `/dreams/${_id}`;
    case QueryNames.SIGN_UP || QueryNames.SIGN_IN:
      await login(returnings);
      return `/personal/`;
    default:
      return "/";
  }
};
