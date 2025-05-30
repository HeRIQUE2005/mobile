import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CreateUser from "../Page/Inicio/CreateUser"

const Stack = createNativeStackNavigator()

export default function NoAuth() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='CreateUser'
                component={CreateUser}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}