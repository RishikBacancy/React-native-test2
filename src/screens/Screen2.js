import React, {useState} from "react";
import { View, StyleSheet, FlatList, RefreshControl } from "react-native";
import { COUNTRY } from "../data/dummy-data";
import Card from "../components/Card";

const Screen2 = () =>
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
        <View style={styles.screen}>
            <FlatList 
                data={COUNTRY}
                keyExtractor={(item,index)=>item.id}
                renderItem={rendrStyle}
                style={styles.flatListContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresing}
                    />
                }
            />
        </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  flatListContainer:{
    width:"100%",
    paddingVertical:10,
    paddingHorizontal:20,
    marginBottom:10,
  },
});

export default Screen2;