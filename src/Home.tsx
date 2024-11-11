import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Alert, StyleSheet, ScrollView, FlatList, Image, Pressable } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App";

type rating = {
    rate: number,
    count: number
}
type prodData = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: rating
}

type HomeNavigationProp = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function Home({ navigation }: HomeNavigationProp) {
    const [data, setData] = useState<prodData[] | []>([]);
    // const navigation = useNavigation<HomeNavigationProp>();
    useEffect(() => {
        const getDataOfProd = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            if (response.ok) {
                const data = await response.json();
                setData(data);
            }
            else {
                Alert.alert("Something went wrong");
            }
        }

        getDataOfProd();
    }, [])

    const Card = ({ item }: { item: prodData }) => (
        <Pressable onPress={() => navigation.navigate("Details", { product: item })}>
            <View style={styles.card}>
                <Image source={{ uri: `${item.image}` }} style={styles.prodImg} />
                <View style={styles.proddetail}>
                    <View style={styles.rateCate}>
                        <Text style={{fontWeight: 900}}>⭐ {item.rating.rate}</Text>
                        <Text style={{ color:"#a9a9a9", fontWeight:400}}>{item.category}</Text>
                    </View>
                    <Text>{item.title}</Text>
                            <Text style={{fontSize:30, fontWeight: 800}}>Rs.{item.price}</Text>
                    <Pressable onPress={() => navigation.navigate("Details", { product: item })}>
                        <View style={styles.addToCartBtn}>
                            <Text style={{color:"black", fontWeight: 800, fontSize: 25}}>🛒 Add to Cart</Text>
                        </View>
                    </Pressable>
                    
                </View>

            </View>
        </Pressable>
    );

    return (
        <View>
            <FlatList
                data={data}
                renderItem={Card}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 20,
        
        borderWidth: 0,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        backgroundColor: "white",
        borderRadius: 20,
        // height: 400,

    },
    prodImg: {
        height: 300,
        width: 270,
        marginBottom: 10,
        margin:"auto",
    },
    proddetail:{
        padding: 5,
        margin: "auto",
        width:270
    },
    rateCate: {
        flexDirection: "row",
        justifyContent:"space-between",
        flexWrap:"wrap"
    },
    addToCartBtn: {
        backgroundColor: "#d3fcdc",
        justifyContent: "center", 
        alignItems: "center",     
        height: 50,                
        borderRadius: 10,   
        padding: 5 ,
        marginTop: 10,
        borderWidth: 2,
        borderColor: "#6dff8d"
    }
})