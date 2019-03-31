import React from 'react';
import { Text } from 'react-native';

interface IProps {
  style: Object
}

export default function (props: IProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
