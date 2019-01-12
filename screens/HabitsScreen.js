import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Touchable from 'react-native-platform-touchable';
import styled from 'styled-components/native';
import { WebBrowser } from 'expo';

export default class HabitsScreen extends React.Component {
  static navigationOptions = {
    title: 'Habits',
  };

  render() {
    return (
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
    );
  }

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://xvideos.com'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
