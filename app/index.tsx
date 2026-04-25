
// import { Link } from "expo-router";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router=useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>this is the home screen</Text>

      {/* <Link href="/about">
        <Text style={{ color: "blue", marginTop: 10 }}>
          Go to About Page
        </Text>
      </Link> */}
      <Button title="GO to the About page" onPress={()=>router.push("/about")} />
    </View>
  );
}