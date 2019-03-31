import React from 'react';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, View } from 'react-native';
import colors from '../../constants/colors';

export default class MyActionButton extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ActionButton 
          buttonColor={colors.tintColor}
          onPress={() => { console.log("hi")}}
          hideShadow
        >
          <ActionButton.Item buttonColor={colors.tintColor} title="Task" onPress={() => console.log("notes tapped!")}>
            <Icon name='square-edit-outline' style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor={colors.tintColor} title="Reward" onPress={() => {}}>
            <Icon name='medal' style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});