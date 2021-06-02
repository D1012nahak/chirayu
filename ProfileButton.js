import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PersonalInformation from './profile/PersonalInformation'


export default function ProfileButton({navigation}){
    
    return(
        <View>
            <Text>Personal Details</Text>
            <Button title="+" onPress={()=>navigation.navigate("Profiles")} />
            <Text>Experience & Education</Text>
            <Button title="+" onPress={()=>navigation.navigate("Experience & Education")} />
            <Text>Awards & Downloads</Text>
            <Button title="+" onPress={()=>navigation.navigate("Awards & Downloads")} />
            <Text>Registration</Text>
            <Button title="+" onPress={()=>navigation.navigate("Registrations")} />
            <Text>Services</Text>
            <Button title="+" onPress={()=>navigation.navigate("Services")} />
            <Text>Gallery</Text>
            <Button title="+" onPress={()=>navigation.navigate("Gallery")} />
            <Text>Private Location</Text>
            <Button title="+" onPress={()=>navigation.navigate("Private Location")} />
        </View>
    )
}
