import React from 'react';
import { View, Text, TextInput } from 'react-native'
import styles from 'src/styles';

const Input = ({
  value,
  label,
  keyboardType,
  placeholder,
  mask,
  testID,
  maxLength,
  errorMessage,
  isTextArea,
  theme,
  onChangetext,
  onKeyPress,
  onBlur,
  onFocus,
  placeholderTextColor,
  returnKeyType,
  showErrorImage,
  editable = true,
  textAlign = 'left',
  inputRef,
  autoCapitalize = 'words',
  multiline = false,
  secureTextEntry=false,
  ...props
}) => {
  return (
    <View>
      {label && label !== '' && (
        <View>
            <Text style={[styles.Txt16N,{marginBottom:10}]}>
              {label}
            </Text>
        </View>
      )}
      <View>
        <TextInput
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          autoCorrect={false}
          autoComplete={'off'}
          style={[styles.input,{height: multiline ? 150 : 45,textAlignVertical: multiline ? 'top': 'center'}]}
          onChangeText={()=>onChangetext}
          onFocus={onFocus}
          onKeyPress={onKeyPress}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          maxLength={maxLength}
          textAlign={textAlign}
          ref={inputRef}
          autoCapitalize={autoCapitalize}
          placeholderTextColor={placeholderTextColor}
          editable = {editable}
          {... props}
        />
      </View>
    </View>
  );
};

export default Input;
