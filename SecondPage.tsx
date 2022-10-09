import * as React from "react";
import {Image, Text, SafeAreaView,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";



const SecondPage = ({ route, navigation }: any) => {
    const { asteroidName } = route.params
    const { useLayoutEffect, useState } = React;
    const [asteroidDe, setAsteroidDe] = useState({
        "id": "" ,"name":"" ,"nasa_jpl_url":"https://" ,"is_potentially_hazardous_asteroid":""
    })

    const [wrongAsteroid, setWrongAsteroid] = useState(false);

    
    useLayoutEffect(() => {
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidName}?api_key=WeXXjAjjM0VW1dStwYUAV23ah0fzxnDffkCBkGTr`)
            .then((response) => {
                console.log(response.data)
                setAsteroidDe(response.data)
            
            })

            .catch((error) => {
                setWrongAsteroid(true)
            })
    }, [])

    // const [title] = useState("");

    // const styles = StyleSheet.create({
    //     button: {
    //         backgroundColor:"#6600ff", 
    //         marginTop:45, 
    //         borderRadius:5, 
    //         width:300, 
    //         justifyContent: "center", 
    //         alignSelf: "center"
    //     },
    //     text: {
    //         fontSize: 16,
    //         lineHeight: 30,
    //         fontWeight: 'bold',
    //         letterSpacing: 0.25,
    //         color: 'white',
    //         left:20
    //       },
    //   });
    return (
        <SafeAreaView style={{flex: 1, width: "90%", alignSelf: "center"}}>
        <Text style={{fontWeight:"bold", fontSize:25, alignSelf: "center", color:"black"}}>About asteroid</Text>
        <Text style={{fontSize:20,padding:15,marginTop:20}}>id : {asteroidDe?.id}</Text>
        <Text style={{fontSize:20,padding:15}}>Name : {asteroidDe?.name}</Text>
        <Text style={{fontSize:20,padding:15}}>Nasa JPL URL : {asteroidDe?.nasa_jpl_url}</Text>
        <Text style={{fontSize:20,padding:15}}>Is Potentially hazardous Asteroid : {asteroidDe?.is_potentially_hazardous_asteroid.toString()}</Text>
    
  {/* <TouchableOpacity style={styles.button} onPress={() => { navigation.push('Weather', { capital: countryDe.capital }) }} >
    <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>  */}
    </SafeAreaView>
    );
};
export default SecondPage;
