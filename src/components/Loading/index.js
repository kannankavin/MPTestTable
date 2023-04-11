import React from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native'
import {Theme} from 'src/theme/constants';

const Loading = () => {
  return (
    <View style={{
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height}}>
      <ActivityIndicator size="large" color={Theme.colors.common.paleGreen} />
    </View>
  );
};

export default Loading;
