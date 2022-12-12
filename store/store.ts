import { proxy, subscribe } from "valtio";
import { client } from "../apollo-client";
import { getUser } from "../queries/queries";
import { getToken, removeToken, setToken } from "../utils/cookies";

import * as build from "gql-query-builder";

import { ModalTypes } from "./../types/enum";

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
    localStorage.removeItem("user");
    userStore.currentUser = null;
    if (token) setToken(token);
    const tokenParse = getToken();
    if (typeof tokenParse !== "string") return;
    try {
      const { data } = await client.query({ query: getUser });
      userStore.currentUser = data.getUser;
      localStorage.setItem("user", JSON.stringify(data.getUser));
    } catch (err) {
      throw new Error("Error auth");
    }
  },
  logout: () => {
    removeToken();
    localStorage.removeItem("user");
    userStore.currentUser = null;
    location.reload();
    return;
  },
});

