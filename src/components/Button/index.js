import React from 'react';
import { Text, Pressable } from 'react-native'
import styles from 'src/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Theme} from 'src/theme/constants';

const Button = ({
  label,
  onPress,
  className = styles.btnViewContainer,
  color = Theme.colors.common.white,
}) => {
  return (
    <Pressable style={className} onPress={onPress}>
        <Text style={styles.btnText16White}>
          {label}
        </Text>
    </Pressable>
  );
};

export default Button;
