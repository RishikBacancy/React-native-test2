import React from "react";
import { View, Text, StyleSheet} from "react-native";

const Card = props => 
{
    const bgColor = props.bgColor;

    return(
        <View style={styles.cardContainer}>
            <Text style={styles.textWrap} >{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer:{
        height:50,
        width:"100%",
        marginVertical:7,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    },
    textWrap:{
        fontSize:18,
        fontWeight:"bold",
    }
});

export default Card;