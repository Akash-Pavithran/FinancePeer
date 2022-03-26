import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

import Home from '../screens/Home';
import Feed from '../screens/Feed';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

import TabView from '../components/bottomTabs/Tab';

const HOME = require('../assets/icons/home.png');
const FEED = require('../assets/icons/feed.png');
const PROFILE = require('../assets/icons/user.png');
const EXPLORE = require('../assets/icons/explore.png');
const SETTINGS = require('../assets/icons/settings.png');

const Tab = createBottomTabNavigator();
const HomeNavigation = () => {
    const { colors } = useTheme();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                tabBarStyle: {
                    backgroundColor: colors.primary,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabView
                            focus={focused}
                            label="HOME"
                            tabIcon={HOME}
                        />
                    ),
                }}
                />
            <Tab.Screen
                name="Feed"
                component={Feed}
                 options={{
                    tabBarIcon: ({focused}) => (
                        <TabView
                            focus={focused}
                            label="FEED"
                            tabIcon={FEED}
                        />
                    ),
                }}
                />
            <Tab.Screen
                name="Explore"
                component={Explore}
                 options={{
                    tabBarIcon: ({focused}) => (
                        <TabView
                            focus={focused}
                            label="EXPLORE"
                            tabIcon={EXPLORE}
                        />
                    ),
                }}
                />
            <Tab.Screen
                name="Profile"
                component={Profile}
                 options={{
                    tabBarIcon: ({focused}) => (
                        <TabView
                            focus={focused}
                            label="PROFILE"
                            tabIcon={PROFILE}
                        />
                    ),
                }}
                />
            <Tab.Screen
                name="Settings"
                component={Settings}
                 options={{
                    tabBarIcon: ({focused}) => (
                        <TabView
                            focus={focused}
                            label="SETTINGS"
                            tabIcon={SETTINGS}
                        />
                    ),
                }}
                />
        </Tab.Navigator>
    );
};

export default HomeNavigation;
