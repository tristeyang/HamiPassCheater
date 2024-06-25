import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Title from "./components/Title";
import Colors from "./constants/Colors";
import Cheater from "./components/Cheater";

export default function App() {

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/matrix.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView>
          <Title>Hami Pass Cheater</Title>
          <Cheater appID={"C00006P00164I"}>Dr. eye</Cheater>
          <Cheater appID={"C00006P00245I"}>Dr. eye 日語</Cheater>
          <Cheater appID={"C00006P00272I"}>算算</Cheater>
          <Cheater appID={"C00001P00226A"}>LiTV+</Cheater>
          <Cheater appID={"C00001P00208I"}>catchplay+</Cheater>
          <Cheater appID={"C00004P00152I"}>kono</Cheater>

        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.35,
  },
});
