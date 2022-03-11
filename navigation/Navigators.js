import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigators from "./TabNavigation";

const Navigators = () =>
{
    return(
        <NavigationContainer>
            <TabNavigators/>
        </NavigationContainer>
    );
};


export default Navigators;