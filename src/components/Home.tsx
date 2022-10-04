import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NavigationContainer } from "@react-navigation/native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLine,
} from "victory-native";

function Home() {
  const [text, setText] = useState("before call");
  const [desiredVoltage, setDesiredVoltage] = useState("0");

  return (
    <>
      <View style={styles.container}>
        <View style={{ paddingTop: 25, justifyContent: "space-evenly" }}>
          <VictoryChart
            width={350}
            minDomain={{ x: 1, y: 0 }}
            maxDomain={{ x: 5, y: 35 }}
          >
            <VictoryLine
              data={[
                { x: 1, y: 5 },
                { x: 2, y: 5.1 },
                { x: 3, y: 4.9 },
                { x: 4, y: 4.9 },
                { x: 5, y: 5.1 },
              ]}
            />
          </VictoryChart>
          <KeyboardAwareScrollView>
            <TextInput
              style={styles.input}
              onChangeText={(t) => setDesiredVoltage(t)}
              placeholder="desired mV"
              textAlign="center"
              keyboardType="numeric"
              maxLength={5}
            />
            <Button
              onPress={() =>
                console.log(`desired voltage is: ${desiredVoltage}`)
              }
              title="Set Voltage ⚡"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </KeyboardAwareScrollView>
        </View>
      </View>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    flex: 1,
    width: "100%",
    borderWidth: 1,
    padding: 10,
  },
});
