import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { BLACK_COLOR } from "../color";
import Detail from "../screens/Detail";

const Nav = createNativeStackNavigator();

const AuthAfterNav = () => {
    return(
        <Nav.Navigator
            screenOptions={{
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: BLACK_COLOR,
                },
            }}>
            <Nav.Screen name="Coin" component={Home}/>
            <Nav.Screen name="Detail" component={Detail}/>
        </Nav.Navigator>
    )
};
 
export default AuthAfterNav;