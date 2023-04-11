import React, {useEffect,useState} from 'react';
import {View, Text, KeyboardAvoidingView, Alert, FlatList,SafeAreaView} from 'react-native';
import {useAppDispatch,useAppSelector} from 'src/redux/hooks';
import styles from 'src/styles';
import {Input, Button, Spacer, Loading} from 'src/components';
import {initTableUpdate, initTableGet} from 'src/redux/app-saga-actions';
import { Theme } from "src/theme/constants";
import {capitalize} from 'src/utils/constants';

const Login = ({navigation,route}) => {
  const [tableName, setTableName] = useState(route.params.tableName);
  const [uniqueColumn, setUniqueColumn] = useState(route.params.uniqueColumn);
  const [columnName, setColumnName] = useState(route.params.columnName);
  const [id, setId] = useState('');
  const [updateColumn, setUpdateColumn] = useState([]);
  const [data,setData] = useState([{
    'id':1,
    'table_name': 'Employee',
    'column_name': 'employee_name',
    'unique_column': 'kavin',
  },{
    'id':2,
    'table_name': 'Employee',
    'column_name': 'employee_name',
    'unique_column': 'Roberrt',
  }])
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initTableGet(
      {
        "table_name": route.params.tableName,
        "column_name": route.params.columnName,
        "unique_column": route.params.uniqueColumn,
        "onSuccess": onSuccessGet,
      }
    ));
  }, []);

  const ColumnUpdate = (txt) => {
    const temp = [...updateColumn];
    if (temp.findIndex((element)=>element[id]) > -1) {
      temp.splice(temp.findIndex((element)=>element[id]), 1); 
    }
    const obj = [];
    obj.push({[id]: txt});
    const tempupdate = temp.concat(obj);
    setUpdateColumn(tempupdate);
    console.log(updateColumn, txt)
  }

  const setCurrentId = (id) =>{
    setId(id);
  }

  onSuccess = (resp) =>{
    setLoading(false);
    if(resp.status){
      //updated successfully
    }
  }

  const onSuccessGet = () =>{
    //update the data here
  }

  const renderItem = ({ item }) => {
    let t = '';
    if (updateColumn.findIndex((element)=>element[item.id]) > -1) {
      t = updateColumn[updateColumn.findIndex((element)=>element[id])];
    }
    return (
      <View key={item.id} style={styles.FlatListItemSM}>
        <View style={styles.rowContainer}>
          <Text style={[styles.Txt14N,{flex:0.5,flexWrap: 'wrap',color: Theme.colors.text.black}]}>{item.table_name}</Text>
          <Text style={[styles.Txt14N,{flex:0.5,flexWrap: 'wrap',color: Theme.colors.text.black}]}>{item.column_name}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={[styles.Txt14N,{flex:0.5,flexWrap: 'wrap',color: Theme.colors.text.black}]}>{item.unique_column}</Text>
          <View style={{flex:0.5}}><Input placeholder={'Enter data to update'} value={t} onFocus={()=>setCurrentId(item.id)} editable={true} onChangeText={(txt)=>ColumnUpdate(txt)} maxLength={100}/></View>
        </View>
      </View>
    )
  };

  const submit = () => {
    const updateData = [];
    data.forEach( (item, index) => {
      if (updateColumn.findIndex((element)=>element[item.id]) > -1) {
        updateData.push({
          'id':item.id,
          'table_name': item.table_name,
          'column_name': item.column_name,
          'unique_column': updateColumn[updateColumn.findIndex((element)=>element[id])],
        })
      }
    });
    if(updateData.length){
      dispatch(initTableUpdate(
        {
          "param": updateData,
          "onSuccess": onSuccess,
        }
      ));
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
    <SafeAreaView style={styles.viewContainer}>
      <View style={{flex:0.9}}>
        <Spacer height={10} />
          <Text style={styles.Txt16BCenter}>{'Columns'}</Text>
          {data.length ?
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
          : 
            loading === false ? <View style={styles.viewContainer}><Text style={[styles.Txt16N,{textAlign:'center'}]}>No columns found</Text></View>:null
          }
        <Spacer height={10} />
      </View>
      <View style={{flex:0.1}}>
        <Button label={'Update'} onPress={submit} />
      </View>
      {loading && <Loading />}
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;