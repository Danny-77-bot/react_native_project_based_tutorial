// import { Link } from "expo-router";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function About() {
    const route=useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        This is the About Screen
      </Text>

      {/* <Link href="/">
        <Text style={{ color: "blue" }}>
          Go Back to Home
        </Text>
      </Link> */}
      <Button title="Go Back to Home" onPress={()=>route.back()} />
    </View>
  );
}