import React from "react";
import {Stack} from "expo-router"


export default function RootLayout() {

    return (
    <Stack>
        <Stack.Screen
            name='(shop)'
            options={{headerShown: false, title: 'Shop'}}
        />
        <Stack.Screen
            name='category'
            options={{headerShown: true, title: 'Category'}}
        />
        <Stack.Screen
            name='product'
            options={{headerShown: true, title: 'Product'}}
        />
        <Stack.Screen
            name='cart'
            options={{presentation: "modal", title: 'Shopping Cart'}}
        />
        <Stack.Screen name='auth' options={{headerShown: true, title: 'Shop'}}/>
    </Stack>
    )
}