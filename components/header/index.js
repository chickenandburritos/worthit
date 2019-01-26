import React from 'react';
import { Platform, View, Text } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../TabBarIcon';
import LinksScreen from '../../screens/LinksScreen';
import HabitsScreen from '../../screens/HabitsScreen';
import colors from '../../constants/Colors';
import { Header } from "react-navigation";


const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const HabitsStack = createStackNavigator({
  Habits: HabitsScreen,
});

HabitsStack.navigationOptions = {
  tabBarLabel: 'Habits',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default createMaterialTopTabNavigator({
  HabitsStack,
  LinksStack,
}, 
{ 
  headerLeft: <View><Text>texto</Text></View>,
  tabBarOptions: {
  labelStyle: {
    fontSize: 12,
  },
  tabStyle: {
    width: 100,
  },
  style: {
    backgroundColor: colors.tabBar,
  },
}});
