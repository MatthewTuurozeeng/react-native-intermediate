import { Stack, Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";
import { theme } from "@/theme";


export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
            headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={20} style={{ marginRight: 18 }}>
                <AntDesign
                  name="plus-circle"
                  size={24}
                  color={theme.colorGreen}
                />
              </Pressable>
            </Link>
          ),
        }}
       />
      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: "",
          headerBackTitle: "",
          headerTintColor: theme.colorBlack,
        }}
      />
    </Stack>
  );
}
