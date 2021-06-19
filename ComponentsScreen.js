import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//the below Text style is an element// other ways of styling is to write the 
//style inside the style element//
//for ex <Text style = {{fontSize: 3}}> insted of writing the const styles below
const ComponentsScreen = function () {

    const name = "Manaf";

    return (

        <View>
            <Text style={styles.textStyle}> Components Screen!</Text>
            <Text style={styles.subHeaderStyle}> My name is {name}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }

});


export default ComponentsScreen;



