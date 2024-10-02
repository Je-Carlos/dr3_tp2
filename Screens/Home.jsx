import * as React from "react";
import { View, Text } from "react-native";
import IconButtonComponent from "../components/IconButtonComponent";
import CardComponent from "../components/CardComponent";
import ListComponent from "../components/ListComponent";
import ProgressBarComponent from "../components/ProgressBarComponent";
import RadioButtonComponent from "../components/RadioButtonComponent";
import SnackbarComponent from "../components/SnackbarComponent";
import TabComponent from "../components/TabComponent";
import MenuComponent from "../components/MenuComponent";

export default function Home() {
  return (
    <View>
      <Text>Tela de Home</Text>
      <CardComponent />
      <IconButtonComponent icon="star" onPress={() => console.log("Curtiu!")} />
      <ListComponent />
      <ProgressBarComponent progress={0.5} />
      <RadioButtonComponent />
      <SnackbarComponent />
      <TabComponent />
      <MenuComponent />
    </View>
  );
}
