import { TextInput, View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainers}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        keyboardAppearance="default"
        autoCapitalize="none"
      />
      <View style={styles.button_alinement}>
        <View>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainers: {
    // flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
    borderRadius: 8,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#4e0329",
    elevation: 4,
    shadowRadius: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  button_alinement: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default StartGameScreen;
