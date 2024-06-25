import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

import PrimaryButton from "./PrimaryButton";

const hamiPassServerURL =
  "https://hamifans.emome.net/HamiPass/AuthCS?" +
  "serviceId=Z014&os=iOS&device=iPhone";

function Cheater({ children, appID }) {
  const [succCount, setSuccCount] = useState(0);

  async function cheatHandler(appID) {
    console.log(hamiPassServerURL + "&appId=" + appID);
    const response = await axios.get(hamiPassServerURL + "&appId=" + appID);

    console.log("response.status: " + response.status);
    if ((response.status === 200)) {        
      setSuccCount(succCount + 1);
    }
  }

  return (
    <View style={styles.cheaterContainer}>
      <Text style={styles.labelText}>{children}</Text>
      <PrimaryButton whenPress={cheatHandler.bind(this, appID)}>
        <Ionicons name="caret-forward-outline" size={24} color="white" />
      </PrimaryButton>
      <Text style={styles.successfulText}>{succCount}</Text>
    </View>
  );
}

export default Cheater;

const styles = StyleSheet.create({
  cheaterContainer: {
    flexDirection: "row",
  },
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 15,
  },
  successfulText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    padding: 15,
  },
});
