import { QueryNames } from "../components/modalOver";
import { userStore } from "../store/store";

type Redirect = (type: QueryNames, returnings: any) => Promise<string>;

export const RedirectFunction: Redirect = async (type, returnings) => {
  const { login } = userStore;

  switch (type) {
    case QueryNames.NEW_DREAM:
      const { _id } = returnings;
      return `/dream/${_id}`;
    case QueryNames.SIGN_UP || QueryNames.SIGN_IN:
      await login(returnings);
      return window.location.pathname;
    default:
      return window.location.pathname;
  }
};
