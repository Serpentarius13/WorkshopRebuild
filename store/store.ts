import { proxy } from "valtio";

export const store = proxy({
  modalOpenState: false,
  openModal: () => {
    store.modalOpenState = true;
  },
  closeModal: () => {
    store.modalOpenState = false;
  },
  toggleModal: () => {
    store.modalOpenState = !store.modalOpenState;
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
