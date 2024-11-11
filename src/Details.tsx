import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import { RootStackParamList } from "../App";

type ProdProps = NativeStackScreenProps<RootStackParamList, "Details">

export default function Details({ route }: ProdProps) {
    const { product } = route.params;
    return (
        <ScrollView style={styles.container}>
           
                <View><Image source={{ uri: `${product.image}` }} height={300} /></View>
                <View style={{ padding: 20 }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        marginBottom: 30
                    }}>
                        <Text style={{ fontWeight: 500, fontSize: 18, color: "#252525" }}>⭐{product.rating.rate}</Text>
                        <Text style={{fontWeight:900, fontSize:30, color: "#2c2c2c"}}>Rs. {product.price}</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 900, fontSize: 30, color: "#2c2c2c" }}>{product.title}</Text>
                    </View>
                    <Text style={{fontWeight: 800, color:"#595959"}}>{product.description}</Text>
                    <Pressable>
                        <View style={styles.addToCartBtn}>
                            <Text style={{color:"white", fontWeight: 900, fontSize: 25}}>Buy Now</Text>
                        </View>
                    </Pressable>
                </View>
                    
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    addToCartBtn: {
        backgroundColor: "#202020",
        justifyContent: "center", 
        alignItems: "center",     
        height: 50,                
        borderRadius: 10,   
        padding: 5 ,
        marginTop: 20
    }
})