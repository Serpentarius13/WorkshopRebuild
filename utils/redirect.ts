import { QueryNames } from "../components/modalOver";

export const RedirectFunction = (type: QueryNames, returnings: any) => {
  switch (type) {
    case QueryNames.NEW_DREAM:
      const { _id } = returnings;
      return `/dreams/${_id}`;
    case QueryNames.SIGN_UP || QueryNames.SIGN_IN:
      const { token, _id: userId } = returnings;
      return `/personal/${userId}`;
    default:
      return;
  }
};
