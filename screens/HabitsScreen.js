import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Touchable from 'react-native-platform-touchable';
import styled from 'styled-components/native';
import { WebBrowser } from 'expo';
import ActionButton from '../components/actionButton';

export default function HabitsScreen() {
  const navigationOptions = {
    title: 'Habits',
  };

  const _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://facebook.com'
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
  });

    return (
      <View style={{flex:1}}>
        <ScrollView style={styles.container}>
          <Touchable onPress={this._handleHelpPress}>
            <Text>
              Be happy
            </Text>
          </Touchable>
          <Touchable>
            <Text>
              Task 2
            </Text>
          </Touchable>
          <Touchable>
            <Text>
              Task 3
            </Text>
          </Touchable>
        </ScrollView>
        <ActionButton />
      </View>
    );
}