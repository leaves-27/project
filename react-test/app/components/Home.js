'use strict';

import React, { Component,ListView,Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Dimensions from 'Dimensions';

const Home = (backgroundColor = '#F5FCFF') => class extends Component {
  render(){
    const { actions,assets } = this.props;

    const json = [{
      name:"宋江1",
      department:"技术部",
      phone:"18857002332",
      email:"1132661957@qq.com"
    },{
      name:"宋江2",
      department:"技术部",
      phone:"18857152332",
      email:"1132661957@qq.com"
    },{
      name:"宋江3",
      department:"技术部",
      phone:"18857002332",
      email:"1132661957@qq.com"
    }]

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    let state = {
      dataSource:ds.cloneWithRows(json),
    };

    return (
      <View style={[styles.container]}>
        <ListView
          dataSource={state.dataSource}
          
          renderRow={(rowData) =>
            <View style={styles.listview}>
              <View style={styles.leftBar} >
                <Text style={styles.text,styles.leftBarText} >{rowData.name.substring(0,1)}</Text>
              </View> 
              <View style={styles.main} >
                <Text style={styles.text,styles.mainText} >{rowData.name}</Text>
                <Text style={styles.text,styles.mainDesc} >{rowData.department}</Text>
              </View>
              <View style={styles.rightBar} >
                <Text style={styles.text} >{rowData.phone}</Text>
                <Text style={styles.text} >{rowData.email}</Text>
              </View>
            </View>
          }
        />
        <Text style={styles.text} >Push detail view</Text>
      </View>
    );
  }
}

export default Home

var styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor:"#ffffff"
  },
  listview:{
    flexDirection:'row',
    flex:1,
    height:60,
    borderColor:"#ccc",
    borderBottomWidth:1,
    borderStyle:"solid",
    paddingLeft:10,
    paddingRight:10,
  },
  leftBar:{
    width:40,
    height:40,
    borderRadius:5,
    marginTop:10,
    backgroundColor:"#00ff00",
    alignItems:"center",
    justifyContent:"center"
  },
  rightBar:{
    width:130,
    justifyContent:"center",
    paddingLeft:5,
  },
  main:{
    flex:1,
    justifyContent:"center",
    paddingLeft:5,
  },
  mainText:{
    color:"#000",
  },
  mainDesc:{
    color:"#777",
    fontSize:12,
  },
  text: {
    color: '#666',
    alignItems:"center",
    justifyContent:"center",
    fontSize:12,
  },
});
