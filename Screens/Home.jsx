import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Button, Appbar, Avatar, Headline } from "react-native-paper";
import SafeAreaViewAndroid from "../Components/SafeAreaViewAndroid";

const Main = ({ navigation, title }) => {
  return (
    <View>
      <Appbar style={{ backgroundColor: "white" }}>
        <Appbar.Action icon="react" color={"#86A8E7"} />
        <Appbar.Content
          title="React Native"
          titleStyle={{ color: "#B39CD0" }}
          subtitle="ES7"
          subtitleStyle={{ color: "#4B4453" }}
        />
        <Appbar.Action icon="menu" color={"#4B4453"} />
      </Appbar>
      {/* <Avatar.Icon icon="angular" color="#FF6F91" /> */}
      <TouchableOpacity>
        <Avatar.Image
          source={{
            uri: "https://yt3.ggpht.com/nBQdQ0Z-Ja20-y2zKUxssX4wyA9iz5xjzP-ymMdZaDQ5DyQ2PEfSjSnoykunXkrWlQlG_TDuXf4=s88-c-k-c0x00ffffff-no-rj-mo",
          }}
          size={80}
          style={{ alignSelf: "center", marginTop: 30 }}
        />
      </TouchableOpacity>

      <Headline style={{ textAlign: "center", marginVertical: 20 }}>
        About Me
      </Headline>
      <Text
        style={{
          textAlign: "center",
          width: "70%",
          alignSelf: "center",
          marginTop: 10,
          fontSize: 16,
        }}
      >
        Hey! i'm Abhishek Kuntare , i'm Full Stack Web Developer Based in
        Amravati
      </Text>
      <Button
        color="white"
        style={{
          backgroundColor: "black",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 10,
          width: 150,
          marginTop: 30,
        }}
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </Button>
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaViewAndroid
      Component={Main}
      navigation={navigation}
      title="Home"
    />
  );
};

export default Home;
