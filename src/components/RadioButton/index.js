import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import styles from 'src/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Theme} from 'src/theme/constants';

const RadioButton = ({
  label,
  id,
  name = 'ellipse-outline',
  color = Theme.colors.common.black,
  onPress,
}) => {

  const callBackFunction = () => {
    onPress(id);
  };

  return (
    //square-outline ios-checkbox-outline
    <TouchableOpacity style={styles.chkViewContainer} onPress={callBackFunction}>
      <Icon name={name} size={30} color={color} />
      <Text style={styles.Text16}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
