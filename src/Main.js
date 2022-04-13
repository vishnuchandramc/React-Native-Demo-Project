import React from 'react';
import {Image, StatusBar, ScrollView, Text, TouchableOpacity, View} from 'react-native';

const Main = () => {
  return (
    <View style={{flex:1, backgroundColor:'#1d1d1f'}}>
       <StatusBar
        backgroundColor="#1d1d1f"/>
      <ScrollView>
        <View style={{paddingHorizontal:20, paddingTop:60, paddingBottom:10}}>
          <Text style={{color:'#fff', fontSize:32, fontFamily:'Inter-Bold',letterSpacing: -1}}>
            Device Info.
          </Text>
        </View>
        <View style={{padding:20}}>
          <Text style={{color:'#f0f0f0', fontSize:28, fontFamily:'Inter-SemiBold',letterSpacing: -1}}>
            Realme 3 Pro
          </Text>
        </View>
        <View style={{height:220, width:'90%', alignSelf:'center', backgroundColor:'#5856d6',borderRadius:20, marginVertical:8}}>
          <Text style={{color:'#c6c6c6', fontSize:18, fontFamily:'Inter-Medium',letterSpacing: -1, padding:20}}>Model Number</Text>
          <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
          <Text style={{color:'#c6c6c6', fontSize:38, fontFamily:'Inter-Bold',letterSpacing: -1, padding:20}}>RMX1851</Text>
            </View>
        </View>

        <View style={{height:220, width:'90%', alignSelf:'center', backgroundColor:'#007bff',borderRadius:20, marginVertical:8}}>
          <Text style={{color:'#c6c6c6', fontSize:18, fontFamily:'Inter-Medium',letterSpacing: -1, padding:20}}>Android</Text>
          <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
          <Text style={{color:'#c6c6c6', fontSize:38, fontFamily:'Inter-Bold',letterSpacing: -1, padding:20}}>Version 11</Text>
            </View>
        </View>

        <View style={{height:220, width:'90%', alignSelf:'center', backgroundColor:'#32ade6',borderRadius:20, marginVertical:8}}>
          <Text style={{color:'#c6c6c6', fontSize:18, fontFamily:'Inter-Medium',letterSpacing: -1, padding:20}}>Skin</Text>
          <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
          <Text style={{color:'#c6c6c6', fontSize:38, fontFamily:'Inter-Bold',letterSpacing: -1, padding:20}}>ColorOS</Text>
            </View>
        </View>

        <View style={{height:220, width:'90%', alignSelf:'center', backgroundColor:'#34c759',borderRadius:20, marginVertical:8}}>
          <Text style={{color:'#c6c6c6', fontSize:18, fontFamily:'Inter-Medium',letterSpacing: -1, padding:20}}>Build Number</Text>
          <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
          <Text style={{color:'#c6c6c6', fontSize:38, fontFamily:'Inter-Bold',letterSpacing: -1, padding:20}}>RMX1851_1_0.1</Text>
            </View>
        </View>
        </ScrollView>
    </View>
  );
};
export default Main;
