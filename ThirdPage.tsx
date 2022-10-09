import axios from "axios";
import React from "react";
import { useState, useLayoutEffect } from "react";
import { Image, Text, SafeAreaView } from "react-native";

const ThirdPage = ({  route }: any) => {


                  
    const [asteroidDe, setAsteroidDe] = useState({
        "id": "" ,"name":"" ,"nasa_jpl_url":"https://" ,"is_potentially_hazardous_asteroid":""
    })

    useLayoutEffect(() => {
        axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=WeXXjAjjM0VW1dStwYUAV23ah0fzxnDffkCBkGTr')
            .then((response) => {
                const Aster=response.data.near_earth_objects;
                const rand=Aster[Math.floor(Math.random()*Aster.length)]
                console.log(rand)
            
                setAsteroidDe(rand)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <SafeAreaView style={{flex: 1, width: "90%", alignSelf: "center"}}>
        <Text style={{fontWeight:"bold", fontSize:25, alignSelf: "center", color:"black"}}>About asteroid</Text>
        <Text style={{fontSize:20,padding:15,marginTop:20}}>id : {asteroidDe?.id}</Text>
        <Text style={{fontSize:20,padding:15}}>Name : {asteroidDe?.name}</Text>
        <Text style={{fontSize:20,padding:15}}>Nasa JPL URL : {asteroidDe?.nasa_jpl_url}</Text>
        <Text style={{fontSize:20,padding:15}}>Is Potentially hazardous Asteroid : {asteroidDe?.is_potentially_hazardous_asteroid.toString()}</Text>
        </SafeAreaView>
    );
};

export default ThirdPage;
