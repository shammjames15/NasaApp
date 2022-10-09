import * as  React from "react";
import {View,Button} from "react-native";
import {  TextInput} from 'react-native-paper';


const FirstPage = ({ navigation }: any) => {
    const { useState, useRef } = React;
    const [ asteroidName, setAsteroidName] = useState("")

    
    const handleButton = () => {
        navigation.push('Asteroid', { asteroidName })
    }

    const handleButtons = () => {
        navigation.push('ThirdPage' )
    }
   
   const handleChange=(text:any) => {
    setAsteroidName(text)
   }
    return (
        <View style={{flex: 1, justifyContent: "center", width: "55%", alignSelf: "center"}}>
      <TextInput
      label="Enter Asteroid"
      value={asteroidName}
      onChangeText={text =>handleChange(text)}
      mode="outlined"
    
    /><View style={{margin:10,width:150,alignSelf: "center"}}>
    <Button onPress={handleButton} disabled={!asteroidName} title="submit" color="blue" />
    </View>
    <View>
    <Button onPress={handleButtons}  title="Random Asteroid" color="blue" />
    </View>
   
    </View>
    );
};
export default FirstPage;
