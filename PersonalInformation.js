import React, { useState } from "react";
import { View, Picker, StyleSheet,Text,TouchableOpacity,TextInput, ScrollView} from "react-native";


const PersonalInformation = () => {
  const [selectedValue, setSelectedValue] = useState("dr");

  const [text, onChangeText] = React.useState();
  const [text1, onChangeText1] = React.useState();
  const [text2, onChangeText2] = React.useState();
  const [number1, onChangeNumber1] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [text3, onChangeText3] = React.useState();
  return (
    // 
    <View style={styles.container}>
        <ScrollView>
        
        <Text>Your Details</Text>
        
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Mr." value="mr" />
        <Picker.Item label="Mrs." value="mrs" />
        <Picker.Item label="Dr." value="dr" />
        <Picker.Item label="Prof." value="prof" />
        <Picker.Item label="Phd" value="phd" />
        <Picker.Item label="MBBS" value="mbbs" />
      </Picker>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="First name"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={text1}
        placeholder="Middle name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="Starting Price"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Personal Mobile Number"
        keyboardType="number-pad"
      />
      
      <TextInput
        multiline={true}
        // numberOfLines={true}
        style={styles.input}
        onChangeText={onChangeText3}
        value={text3}
        placeholder="Short Description"
      />
      <Text>Booking phone numbers</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
    // alignItems: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});

export default PersonalInformation;
