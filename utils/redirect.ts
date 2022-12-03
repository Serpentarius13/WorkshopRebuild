import { QueryNames } from "../components/modalOver";
import { userStore, useZustandStore } from "../store/store";

type Redirect = (type: QueryNames, returnings: any) => Promise<string>;

export const RedirectFunction: Redirect = async (type, returnings) => {
  console.log("STORE", userStore);
  const { login } = userStore;
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
