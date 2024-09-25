import { View, Text, Image,StyleSheet } from 'react-native'

import React from 'react'
const Splash = () => {
  return (
    <View style={{flex:1,backgroundColor: '#fff'}}>
      <Image source={require('../assets/images/Logo.jpg')} style={styles.logo} />
      <Text style={styles.gdg} > Google Developer Groups on Campus </Text>
      <Text style={styles.vnr} > VNRVJIET </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 205, 
    height: 100, 
    marginTop: 351, 
    marginLeft: 90, 
    
  },
  gdg: {
    width:430,
    height:40,
    marginLeft:40,
    marginTop:20,
    fontWeight: 'bold',
    fontSize:18,
  },
  vnr: {
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize:15,
  }
});

export default Splash