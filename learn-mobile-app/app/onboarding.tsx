import React from "react";
import { StyleSheet, Text,  View, Platform } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import { PlantlyImage } from "@/components/PlantlyImage";


export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  const handlePress = () => {
    toggleHasOnboarded(); // Set hasFinishedOnboarding to true in the user store
    router.replace("/");
  };

  return (
    <LinearGradient  // Add a gradient background to the onboarding screen to make it more visually appealing
    start={{x:0, y: 0}}
    end={{x:1, y: 1}}
    colors={[theme.colorAppleGreen, theme.colorLimeGreen, theme.colorGreen]}
    
    style={styles.container}>
        <StatusBar style="light" /> 
        <View>
            <Text style = {styles.heading}> Welcome Plantly! </Text>
            <Text style = {styles.tagline}> Keep your plants healthy and hydrated </Text>
        </View>
        <PlantlyImage/>
        <PlantlyButton title="Let me in!" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 42,
    fontWeight: "bold",
    color: theme.colorWhite,
    marginBottom: 12,
    textAlign: "center",
  },
    tagline: {
    fontSize: 34,
    color: theme.colorWhite,
    textAlign: "center",
    fontFamily: Platform.select({
      ios: "Caveat_400Regular",
      android: "Caveat_400Regular",
      default: "Caveat_400Regular",
    }),

  },

});
