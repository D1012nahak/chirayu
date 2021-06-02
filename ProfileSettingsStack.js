import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Theme } from "../constants";
// import Profile from "../modules/profile/screens/Profile";
import ProfileSettingsTab from "../navigation/ProfileSettingsTab"
import ProfileButton from "../components/ProfileButton"
const Stack = createStackNavigator();

export default function ProfileSettingsStack(props) {
	return (
		<Stack.Navigator>
		
			<Stack.Screen
				name="Profile Settings"
				
				component={ProfileSettingsTab}
				
				options={{
					title: "Profile Settings",
					headerTintColor: Theme.colors.white,
					headerStyle: {
						backgroundColor: Theme.colors.primary,
					},
					headerTitleStyle: {
						fontFamily: "Voltaire-Regular",
					},
					headerLeft: () => (
						<Ionicons
							name="md-menu"
							size={25}
							color={Theme.colors.white}
							style={{ width: 25, height: 25, marginLeft: 10 }}
							onPress={() => props.navigation.toggleDrawer()}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
}
