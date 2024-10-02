import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/Login";
import Registrar from "./Screens/Registrar";
import Home from "./Screens/Home";
import Dashboard from "./Screens/Dashboard";
import Perfil from "./Screens/Perfil";
import Configuracoes from "./Screens/Configuracoes";
import EsqueceuSenha from "./Screens/EsqueceuSenha";
import NovoItem from "./Screens/NovoItem";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Registrar} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
        <Stack.Screen name="NovoItem" component={NovoItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
