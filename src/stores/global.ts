import { create } from "zustand";

interface GlobalStoreType {
  isLoginOpen: boolean;
  setIsLoginOpen: (props: boolean) => void;
  isSignupOpen: boolean;
  setIsSignupOpen: (props: boolean) => void;
}

const useStore = create<GlobalStoreType>((set) => ({
  isLoginOpen: false,
  setIsLoginOpen: (props) => set({ isLoginOpen: props }),
  isSignupOpen: false,
  setIsSignupOpen: (props) => set({ isSignupOpen: props }),
}));

export const isLoginOpen = (state: GlobalStoreType) => state.isLoginOpen;
export const setIsLoginOpen = (state: GlobalStoreType) => state.setIsLoginOpen;
export const isSignupOpen = (state: GlobalStoreType) => state.isSignupOpen;
export const setIsSignupOpen = (state: GlobalStoreType) =>
  state.setIsSignupOpen;

export default useStore;
