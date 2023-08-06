import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useReducer, useRef } from "react";
import { Animated, View } from "react-native";
import styled from "styled-components/native";

const Coin = ({ symbol, index, id }) => {
    const navigation = useNavigation();

    const opacity = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.spring(opacity, {
            toValue: 1,
            useNativeDriver: true,
            delay: index * 100,
        }).start();
    }, []);

    const scale = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0.7, 1],
    });

    return (
        <CoinTouchableOpacity style={{ flex: 0.31 }} onPress={() => navigation.navigate("Detail", { symbol, id })}> 
            <Wrapper style={{ opacity, transform: [{ scale }] }}>
                <Icon source={{
                        uri: `https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
                        // 현재 해당 url api 사용 불가 
                    }}
                />
                <CoinName>{symbol}</CoinName>
            </Wrapper>
        </CoinTouchableOpacity>
    );
};

const Wrapper = styled(Animated.createAnimatedComponent(View))`
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 5px;
    align-items: center;
`;
const CoinName = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 16px;
`;

const Icon = styled.Image`
    border-radius: 20px;
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
`;

const CoinTouchableOpacity = styled.TouchableOpacity``;

export default React.memo(Coin);