import React, {useEffect} from 'react';
import { View, Text, Pressable } from 'react-native';
import {useAppDispatch} from 'src/redux/hooks';
import styles from 'src/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { Theme } from "src/theme/constants";

const Header = ({navigation, route, options, back, isTabbed = false}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  return (
    <View>
      {isTabbed ? 
        <View style={{justifyContent: 'center', alignItems: 'center', width:270}}>
          <Text style={[styles.headerTitle,{textAlign:'center'}]}>MPTest</Text>
        </View>
      :
        <View style={[styles.headerContainer, {paddingTop:insets && insets.top ? insets.top : 0}]}>
          {options?.isHideBackBtn ? <View style={styles.headerBackBtnContainer} /> :
            <Pressable style={styles.headerBackBtnContainer}
              onPress={() => navigation.pop()}>
              <Icon name={"arrow-back"} size={30} color={Theme.colors.common.white} />
            </Pressable>
          }
          {options?.isHideTitle ? <View style={styles.headerTitleContainer} /> :
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>{options?.title ? options.title : route?.name ? route?.name: ''}</Text>
            </View>
          }
        </View>
      }
    </View>
  );
};
export default Header;