import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  TextInput,
  checkbox,
  Button,
  Headline,
  Checkbox,
} from "react-native-paper";
import SafeAreaViewAndroid from "../Components/SafeAreaViewAndroid";

const Main = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  return (
    <View>
      <Headline style={styles.Headline}>Register Form</Headline>
      <TextInput placeholder="Enter Your Name" style={styles.inputs} />
      <TextInput placeholder="Enter Your Email" style={styles.inputs} />
      <TextInput
        placeholder="Enter Your Password"
        secureTextEntry={true}
        style={styles.inputs}
      />
      <View
        style={{
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
          marginVertical:10
        }}
      >
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked((prev) => !prev)}
        />
        <Text style={{ color: "gray" }}>
          Please accept all Terms & Conditions
        </Text>
      </View>
      <Button
        color="white"
        style={styles.btn}
        onPress={() => console.log("Pressed")}
        disabled={checked ? false : true}
      >
        Submit
      </Button>
    </View>
  );
};
const Register = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Register;

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: "white",
    marginHorizontal: 35,
    marginVertical: 15,
  },
  Headline: {
    textAlign: "center",
    marginVertical: 20,
    color: "#845EC2",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#3F87A0",
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    width: 200,
    alignSelf: "center",
  },
});
