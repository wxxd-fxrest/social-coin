import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import AuthAfterNav from './navigators/AuthAfterNav';
import AuthBeforeNav from './navigators/AuthBeforeNav';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient;

export default function App() {
    const [isAuthentication, setIsAuthentication] = useState(false); 

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if(user) {
                setIsAuthentication(true);
            } else {
                setIsAuthentication(false);
            }
        })
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                {isAuthentication ? <AuthAfterNav /> : <AuthBeforeNav />}
            </NavigationContainer>
        </QueryClientProvider>
    );
}; 
