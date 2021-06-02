import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileButton from "../components/ProfileButton"
import PersonalInformation from "../components/profile/PersonalInformation"
import Experience from "../components/profile/Experience"
import Awards from "../components/profile/Awards"
import Registration from "../components/profile/Registration"
import Services from "../components/profile/Services"
import Gallery from "../components/profile/Gallery"
import PrivateLocation from "../components/profile/PrivateLocation"

const Stack = createStackNavigator();

const ProfileSettingsTab = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen
          name="Personal Details"
          component={ProfileButton}
          
        />
        <Stack.Screen name="Profiles" component={PersonalInformation} />

        <Stack.Screen
          name="Experience Education"
          component={ProfileButton}
          
        />
        <Stack.Screen name="Experience & Education" component={Experience} />

        <Stack.Screen
          name="Awards And Recognitions"
          component={ProfileButton}
          
        />
        <Stack.Screen name="Awards & Downloads" component={Awards} />

        <Stack.Screen
          name="Registration Number"
          component={ProfileButton}
          
        />
        <Stack.Screen name="Registrations" component={Registration} />

        <Stack.Screen
          name="Add Specialty"
          component={ProfileButton}
          
        />
        <Stack.Screen name="Services" component={Services} />

        <Stack.Screen
          name="Images"
          component={ProfileButton}
          
        />
        <Stack.Screen name="Gallery" component={Gallery} />

        <Stack.Screen
          name="Default location"
          component={ProfileButton}
          
        />
        <Stack.Screen name="Private Location" component={PrivateLocation} />
      </Stack.Navigator>

      
   
  );
};
export default ProfileSettingsTab

