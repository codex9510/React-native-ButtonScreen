import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = function () {

    
    const friends = [

      

        { name: "name #1", age: 20 },
        { name: "name #2", age: 21 },
        { name: "name #3", age: 22 },
        { name: "name #4", age: 23 },
        { name: "name #5", age: 24 },
        { name: "name #6", age: 25 },
        { name: "name #7", age: 26 },
        { name: "name #8", age: 27 },
        { name: "name #9", age: 28 },


    ];
    return (
        
    
        <FlatList
            //horizontal
            //showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textStyle}>
                        {item.name} - Age {item.age}
                    </Text>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 60
    }
});

export default ListScreen;