import React from 'react';
import { Icon } from 'expo';
import Colors from '../../constants/colors';

interface IProps {
  name: string,
  focused: boolean
}

export default function(props: IProps) {
    return (
      <Icon.Ionicons
        name={props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
}