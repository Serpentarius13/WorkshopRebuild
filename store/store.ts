import create from "zustand";

export const useLoadError = create<any>(
  //! ANY POTOMUSCHTO ANY
  (get, set) => ({
    loading: false,
    error: false,
    load() {
      set((state) => ({ loading: true }));
    },
    unload() {
      set((state) => ({ loading: false }));
    },
    throwError: () => set((state) => ({ error: true })),
    clearError: () => set((state) => ({ error: false })),
  })
);
