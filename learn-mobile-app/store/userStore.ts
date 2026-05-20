import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";



//type definition for the state and actions of our user store
type UserState = {
  hasFinishedOnboarding: boolean;
  toggleHasOnboarded: () => void;
};

export const useUserStore = create(

    persist<UserState>(
    (set) => ({
      hasFinishedOnboarding: false,
      toggleHasOnboarded: () => {
        return set((state) => {
          return {
           ...state,
           hasFinishedOnboarding: !state.hasFinishedOnboarding,
         };
        });
     },
    }),
    {
      name: "plantly-user-store", // name of the item in storage
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
