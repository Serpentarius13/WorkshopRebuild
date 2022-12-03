import { proxy } from "valtio";
import { client } from "../apollo-client";
import { getUser } from "../queries/queries";
import { getToken, removeToken, setToken } from "../utils/cookies";

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

import create from "zustand";
import { persist } from "zustand/middleware";

export const useZustandStore = create<any>()(
  persist((set, get) => ({
    currentUser: null,
    login: async (token = "") => {
      try {
        setToken(token);
        console.log("GETTING USER");
        const { data } = await client.query({ query: getUser });

        set({ currentUser: data.getUser });

        console.log(get().currentUser, "USER USER USER");
      } catch (err) {
        return;
      }
    },
    logout: () => {
      removeToken();
      set({ currentUser: null });
      return;
    },
  }))
);
