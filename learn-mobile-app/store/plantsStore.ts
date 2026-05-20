import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { File, Paths } from "expo-file-system";


// type definition for a plant in our store
export type PlantType = {
  id: string;
  name: string;
  wateringFrequencyDays: number;
  lastWateredAtTimestamp?: number;
  imageUri?: string;
};

// type definition for the  state and actions of our plant store
type PlantsState = {
  nextId: number;
  plants: PlantType[];
  addPlant: (
    name: string, 
    wateringFrequencyDays: number,
    imageUri?: string,
) => Promise<void>;
  removePlant: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
};
// create the plant store using zustand and persist it with AsyncStorage so that the data is saved across app restarts
export const usePlantStore = create(
  persist<PlantsState>(
    (set) => ({ 
      plants: [],
      nextId: 1,
  addPlant: async (
    name: string,
    wateringFrequencyDays: number,
    imageUri?: string,
  ) => {
    let savedImageUri = imageUri;

    if (imageUri) {
      try {
        const fileName = `${Date.now()}-${imageUri.split("/").slice(-1)[0]}`;
        const destinationFile = new File(Paths.document, fileName);
        const sourceFile = new File(imageUri);
        await sourceFile.copy(destinationFile);
        savedImageUri = destinationFile.uri;
      } catch (error) {
        savedImageUri = imageUri;
      }
    }

    set((state) => {
      return {
        ...state,
        nextId: state.nextId + 1,
        plants: [
          {
            id: String(state.nextId),
            name,
            wateringFrequencyDays,
            imageUri: savedImageUri,
          },
          ...state.plants,
        ],
      };
    });
  },
      removePlant: (plantId: string) => {
        return set((state) => {
          return {
            ...state,
            plants: state.plants.filter((plant) => plant.id !== plantId),
          };
        });
      },
      waterPlant: (plantId: string) => {
        return set((state) => {
          return {
            ...state,
            plants: state.plants.map((plant) => {
              if (plant.id === plantId) {
                return {
                  ...plant,
                  lastWateredAtTimestamp: Date.now(),
                };
              }
              return plant;
            }),
          };
        });
      },
    }),
    {
      name: "plantly-plants-store",
      storage: createJSONStorage(() => AsyncStorage), // for persisting the store data 
    },
  ),
);