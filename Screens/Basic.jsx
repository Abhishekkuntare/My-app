import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Button,
  Switch,
  ToastAndroid,
  SafeAreaView,
  ScrollView,
} from "react-native";

const Basic = () => {
  const [active, setActive] = useState(false);
  console.log(active);
  const showText = () => {
    ToastAndroid.show(
      "Hello their, i'm using the react native!",
      ToastAndroid.SHORT
    );
  };
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <Image
            blurRadius={10}
            source={{
              uri: "https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/hero/burj-al-arab-profile-exterior_6-4_landscape/burj-al-arab-profile-exterior_6-4_landscape__portrait.jpg?w=600",
            }}
            style={{ width: 100, height: 100 }}
          />
          <TextInput
            style={{ backgroundColor: "black", padding: 20, color: "white" }}
          />
          <Button title="click ME" onPress={showText} />

          <Switch value={active} onChange={() => setActive((prev) => !prev)} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Basic;
