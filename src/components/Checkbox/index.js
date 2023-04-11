import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import styles from 'src/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Theme} from 'src/theme/constants';

const Checkbox = ({
  label,
  id,
  isChecked,
  onPress,
}) => {

  const callBackFunction = () => {
    onPress(id);
  };

  return (
    //square-outline ios-checkbox-outline
    <TouchableOpacity style={styles.chkViewContainer} onPress={callBackFunction}>
      <Icon name={isChecked ? "ios-checkbox-outline" : "square-outline"} size={30} color={Theme.colors.common.black} />
      <Text style={styles.Text16}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
