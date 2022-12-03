import { proxy, subscribe } from "valtio";
import { client } from "../apollo-client";
import { getUser } from "../queries/queries";
import { getToken, removeToken, setToken } from "../utils/cookies";

import * as build from "gql-query-builder";

interface Store {
  modalOpenState: boolean | ModalTypes;
  circleOpenState: boolean;
  openModal: (type: ModalTypes) => void;
  closeModal: () => void;
  toggleCircle: () => void;
}

export enum ModalTypes {
  CREATE_DREAM = "CREATE_DREAM",
  LOGIN = "LOGIN",
  SIGNUP = "SIGN_UP",
}

export const store = proxy<Store>({
  modalOpenState: false,
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
      if (token) setToken(token);
      const { data } = await client.query({ query: getUser });
      userStore.currentUser = data.getUser;
    } catch (err) {
      userStore.logout();
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

subscribe(userStore, () => {
  localStorage.setItem("user", JSON.stringify(userStore.currentUser));
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
