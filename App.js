import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DevicesScreen from './screens/DevicesScreen.js'
import LightsScreen from './screens/LightsScreen.js'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                shifting={true}
                activeColor="black"
                inactiveColor="gray"
                >
                <Tab.Screen name="Devices"
                    options={{
                        tabBarColor: '#4fc3f7',
                        tabBarLabel: 'Geräte',
                        tabBarIcon: ({color}) => <Icon name="light-switch" color={color} size={22} />
                    }}
                    component={DevicesScreen} />
                <Tab.Screen name="Lights"
                    options={{
                        tabBarColor: '#ffeb3b',
                        tabBarLabel: 'Lampen',
                        tabBarIcon: ({color}) => <Icon name="lightbulb-on-outline" color={color} size={22} />
                    }}
                    component={LightsScreen} />
                <Tab.Screen name="Procedures"
                    options={{
                        tabBarColor: '#aed581',
                        tabBarLabel: 'Abläufe',
                        tabBarIcon: ({color}) => <Icon name="clock-fast" color={color} size={22} />}}
                    component={LightsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
