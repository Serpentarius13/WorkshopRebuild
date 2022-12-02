import { proxy } from "valtio";

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
