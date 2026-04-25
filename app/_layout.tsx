import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={
    {
     
     headerStyle:{backgroundColor:"blue"},headerTintColor:"white"
    }}>
    <Stack.Screen name="index" options={{title:"Home"}} />
    <Stack.Screen name="about" options={{title:"About"}} />
  </Stack>
}
