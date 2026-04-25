import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Menu() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Menu Screen (Tab)</Text>

      <Button
        title="Go to About Screen"
        onPress={() => router.push("/about")}
      />
    </View>
  );
}