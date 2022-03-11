import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Option2 from '../screens/Option2';
import Option3 from '../screens/Option3';
import StackNavigators from './StackNavigators';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigators = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName = 'First';

					if (route.name === 'First') {
						iconName = 'ios-home';
					} else if (route.name === 'Second') {
						iconName = 'ios-list';
					} else if (route.name === 'Third') {
						iconName = 'ios-call';
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				}
			})}
		>
			<Tab.Screen name="First" component={StackNavigators} />
			<Tab.Screen name="Second" component={Option2} />
			<Tab.Screen name="Third" component={Option3} />
		</Tab.Navigator>
	);
};

export default TabNavigators;
