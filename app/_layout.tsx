import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Tabs (main app) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Stack screen */}
      <Stack.Screen name="about" options={{ title: "About" }} />
    </Stack>
  );
}