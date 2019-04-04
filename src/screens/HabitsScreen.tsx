import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import styled from 'styled-components/native';
import { WebBrowser } from 'expo';
import { ActionButton } from '../components';
import { colors } from '../constants';

export default function HabitsScreen() {
  const navigationOptions = {
    title: 'Habits',
  };

  const _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://facebook.com'
    );
  };

    return (
      <View style={{flex:1}}>
        <MainScrollView backgroundColor={colors.mainBackground}>
          <Touchable onPress={_handleHelpPress}>
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
        </MainScrollView>
        <ActionButton />
      </View>
    );
}

const MainScrollView = styled.ScrollView<{ backgroundColor: string }>`
  flex: 1;
  padding-top: 15;
  background-color: ${({ backgroundColor }) => backgroundColor};
`