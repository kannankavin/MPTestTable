import React, {useEffect,useState} from 'react';
import {View, Text, KeyboardAvoidingView, Alert, FlatList,SafeAreaView} from 'react-native';
import {useAppDispatch,useAppSelector} from 'src/redux/hooks';
import styles from 'src/styles';
import {Input, Button, Spacer, Loading} from 'src/components';
import {initWebsiteAdd, initWebsiteGet} from 'src/redux/app-saga-actions';
import { Theme } from "src/theme/constants";
import {capitalize} from 'src/utils/constants';

const Login = ({navigation}) => {
  const [tableName, setTableName] = useState('');
  const [uniqueColumn, setUniqueColumn] = useState('');
  const [columnName, setColumnName] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    //trigger server call to get websites
  }, []);

  const TableName = (txt) => {
    setTableName(txt);
  }

  const UniqueColumn = (txt) => {
    setUniqueColumn(txt);
  }

  const ColumnName = (txt) => {
    setColumnName(txt);
  }

  const submit = () => {
    if(tableName.length && uniqueColumn.length && columnName.length){
      //setLoading(true); 
      navigation.navigate('updateTable',{
        tableName:tableName,
        uniqueColumn:uniqueColumn,
        columnName:columnName
      })
    } else if(tableName === ''){
      Alert.alert('','Enter table name')
    } else if(uniqueColumn === ''){
      Alert.alert('','Enter unique column field')
    }  else if(columnName === ''){
      Alert.alert('','Enter column name field')
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
    <SafeAreaView style={styles.container}>
      <View style={{flex:0.25}}>
        <Spacer height={30} />
        <Text style={styles.Txt16BCenter}>{'Table Input Screen'}</Text>
        <View style={styles.viewContainer}>
          <Input placeholder={'Table name'} value={tableName} editable={true} onChangeText={TableName} maxLength={100}/>
          <Spacer height={10} />
          <Input placeholder={'Unique Column'} value={uniqueColumn} editable={true} onChangeText={UniqueColumn} maxLength={100}/>
          <Spacer height={10} />
          <Input placeholder={'Column name'} value={columnName} editable={true} onChangeText={ColumnName} maxLength={100}/>
          <Spacer height={20} />
          <Button label={'Submit'} onPress={submit} />
        </View>
      </View>
      {loading && <Loading />}
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;