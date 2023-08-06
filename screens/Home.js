import React, { useEffect, useState } from "react";
import {auth, signOut} from '@react-native-firebase/auth';
import { styled } from "styled-components";
import { BLACK_COLOR } from "../color";
import { useQuery } from "react-query";
import { ActivityIndicator, FlatList, View } from "react-native";
import { coins } from "../api";
import Coin from "../components/Coin";

const Home = () => {
    const { isLoading, data } = useQuery("coins", coins);
    const [cleanData, setCleanData] = useState([]);

    useEffect(() => {
        if(data) {
            setCleanData(data.filter((coin) => 
            coin.rank != 0 
            && 
            coin.is_active && !coin.is_new));
        }
    }, [data]);

    if (isLoading) {
        return (
            <Loader>
                <ActivityIndicator color="white" />
            </Loader>
        );
    }
    
    return(
        <Container>
            <List data={cleanData}
                numColumns={3}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                }}
                renderItem={({ item, index }) => (
                    <Coin index={index} id={item.id} symbol={item.symbol} />
                )}
            />
        </Container>
    )
};

const Container = styled.View`
    background-color: ${BLACK_COLOR};
    flex: 1;
`;

const Loader = styled.View`
    background-color: ${BLACK_COLOR};
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const List = styled.FlatList`
    padding: 20px 10px;
    width: 100%;
`;
const Button = styled.TouchableOpacity``;

const ButtonText = styled.Text``;


export default Home;