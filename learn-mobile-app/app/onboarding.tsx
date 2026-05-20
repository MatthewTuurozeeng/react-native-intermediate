import React from "react";
import { StyleSheet } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  const handlePress = () => {
    toggleHasOnboarded();
    router.replace("/");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colorWhite,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <LinearGradient 
    start={{x:0, y: 0}}
    end={{x:1, y: 1}}
    colors={[theme.colorAppleGreen, theme.colorLimeGreen, theme.colorGreen]}
    
    style={styles.container}>
        <StatusBar style="light" />
        <PlantlyButton title="Let me in!" onPress={handlePress} />
    </LinearGradient>
  );
}
