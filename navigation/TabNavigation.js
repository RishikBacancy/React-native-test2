import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Option2 from "../screens/Option2";
import Option3 from "../screens/Option3";
import StackNavigators from "./StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"
import Option1 from "../screens/Option1";

const Tab = createBottomTabNavigator();

const TabNavigators = () =>
{
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName="first"
                screenOptions={({ route })=>({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName= "Home";
            
                        if (route.name === 'first') {
                          iconName = 'ios-home';
                        } else if (route.name === 'second') {
                          iconName = 'ios-list';
                        } else if (route.name === 'third') {
                          iconName = 'ios-call';
                        }
            
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    }
                })}>
                <Tab.Screen name="first" component={StackNavigators}/>
                <Tab.Screen name="second" component={Option2}/>
                <Tab.Screen name="third" component={Option3}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigators;