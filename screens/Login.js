import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import { BLACK_COLOR } from "../color";

const Login = ({navigation: {navigate}}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const passwordInput = useRef();

    const onSubmitEditing = () => {
        passwordInput.current.focus();
    };

    return(
        <Container>
            <TextInput value={email} 
                placeholder="email"
                placeholderTextColor="lightgrey"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                onSubmitEditing={onSubmitEditing}
                onChangeText={(text) => setEmail(text)}/>
            <TextInput value={password} 
                ref={passwordInput}
                placeholder="password"
                placeholderTextColor="lightgrey"
                secureTextEntry
                returnKeyType="done"
                onChangeText={(text) => setPassword(text)}/>
            <Button>
                <ButtonText> Login </ButtonText>
            </Button>

            <SwitchBox>
                <Text> 
                    Don't have an account? 
                </Text>
                <JoinButton onPress={() => navigate("Join")}>
                    <JoinButtonText> Join </JoinButtonText> 
                </JoinButton>
            </SwitchBox>
        </Container>
    )
};

const Container = styled.View`
    background-color: ${BLACK_COLOR};
    flex: 1;
    align-items: center;
    color: white;
    padding: 60px 20px;
`;

const TextInput = styled.TextInput`
    width: 100%;
    padding: 10px 20px;
    border-radius: 20px;
    margin-bottom: 10px;
    font-size: 16px;
    color: white;
    background-color: rgba(255, 255, 255, 0.5);
`;

const Button = styled.TouchableOpacity`
    width: 100%;
    padding: 10px 20px;
    border-width: 1px;
    border-radius: 20px;
    border-color: rgba(255, 255, 255, 0.5);
    justify-content: center;
    align-items: center;
`;

const ButtonText = styled.Text`
    font-size: 16px;
    color: white;
`;


const SwitchBox = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 20px 0px;
    justify-content: space-between;
    align-items: center;
`;

const Text = styled.Text`
    font-size: 16px;
    text-align: center;
    color: white;
`;

const JoinButton = styled.TouchableOpacity`
    width: 35%;
    padding: 10px 20px;
    border-width: 1px;
    border-radius: 20px;
    border-color: rgba(255, 255, 255, 0.5);
    justify-content: center;
    align-items: center;
`;

const JoinButtonText = styled.Text`
    color: white;
    font-size: 16px;
`;

export default Login;