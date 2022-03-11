import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";
import { COUNTRY } from "../data/dummy-data";
import Card from "../components/Card";

const Screen2 = props =>
{
    const [refreshing, setRefreshing] = useState(false);

    const onRefresing = () =>
    {
        setRefreshing(false);
        console.log("refreshed!")
    };

    const rendrStyle = itemData => {
        return(
            <Card
                title = {itemData.item.title}
            />
        );
    };

    return(
        <FlatList 
            data={COUNTRY}
            keyExtractor={(item,index)=>item.id}
            renderItem={rendrStyle}
            style={{width:"100%", padding:10, marginBottom:10}}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresing}
                />
            }
        />
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
});

export default Screen2;