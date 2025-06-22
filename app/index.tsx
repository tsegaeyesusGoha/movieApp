import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-accent-500 font-bold">Native</Text>
          <Link href="/onboarding">Onboard</Link>
          <Link href="/movie/test">test</Link>
          
    </View>

  );
}
