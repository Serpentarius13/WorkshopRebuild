import { proxy, subscribe } from "valtio";
import { client } from "../apollo-client";
import { getUser } from "../queries/queries";
import { getToken, removeToken, setToken } from "../utils/cookies";

import * as build from "gql-query-builder";

import { ModalTypes } from "./../components/modalOver";

interface Store {
  modalOpenState: boolean | ModalTypes;
  additionalVariables: any[];
  setVariables: ([]) => void;
  circleOpenState: boolean;
  openModal: (type: ModalTypes) => void;
  closeModal: () => void;
  toggleCircle: () => void;
}

export const store = proxy<Store>({
  modalOpenState: false,
  additionalVariables: [],
  setVariables: (variables) => {
    store.additionalVariables = variables;
    return;
  },
  openModal: (type) => {
    store.modalOpenState = type;
  },
  closeModal: () => {
    store.modalOpenState = false;
  },

  circleOpenState: false,
  toggleCircle: () => {
    setTimeout(() => {
      store.closeModal();

      store.circleOpenState = false;
    }, 500);
    store.circleOpenState = true;
  },
});

export const userStore = proxy<any>({
  currentUser:
    typeof window === "undefined"
      ? null
      : JSON.parse(localStorage.getItem("user") || JSON.stringify({})),
  login: async (token = null) => {
    try {
      localStorage.setItem("user", JSON.stringify(null));
      userStore.currentUser = null;
      console.log(token, 'TOKEN');
      if (token) setToken(token);
      const tokenParse = getToken();
      console.log(tokenParse, 'TOKEN GET');
      if (typeof tokenParse !== "string") return;
      const { data } = await client.query({ query: getUser });
      console.log(data);
      userStore.currentUser = data.getUser;
      localStorage.setItem("user", JSON.stringify(data.getUser));
    } catch (err) {
      console.log(err);
      return;
    }
  },
  logout: () => {
    removeToken();
    localStorage.removeItem("user");
    userStore.currentUser = null;
    return;
  },
});

// import create from "zustand";
// import { persist } from "zustand/middleware";

// export const useZustandStore = create<any>()(
//   persist((set, get) => ({
//     currentUser: null,
//     login: async (token = "") => {
//       try {
//         setToken(token);
//         console.log("GETTING USER");
//         const { data } = await client.query({ query: getUser });

//         set({ currentUser: data.getUser });

//         console.log(get().currentUser, "USER USER USER");
//       } catch (err) {
//         return;
//       }
//     },
//     logout: () => {
//       removeToken();
//       set({ currentUser: null });
//       return;
//     },
//   }))
// );
