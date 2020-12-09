import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Blog from "../component/blog";
import BlogEdit from "../component/edit";
import BlogCreate from "../component/create"
import { Container} from "native-base";
const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Container>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'purple',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                >

                    <Stack.Screen name="login" options={{ title:'Blogs' }} component={Blog} />
                    <Stack.Screen name="create" options={{ title:'Create Blog' }} component={BlogCreate} />
                    <Stack.Screen name="edit" options={{ title:'Edit Blog' }} component={BlogEdit} />
                </Stack.Navigator>
            </NavigationContainer>
        </Container>
    )
}