import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>this is the home screen</Text>

      <Link href="/about">
        <Text style={{ color: "blue", marginTop: 10 }}>
          Go to About Page
        </Text>
      </Link>
    </View>
  );
}