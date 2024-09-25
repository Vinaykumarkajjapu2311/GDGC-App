import { View, Text, SafeAreaView,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      <View style={styles.profilepic}>
      <Image source={require('../assets/images/profile.jpg')}  />
      </View>

      <Text style={[styles.username,{marginBottom:50}]}> Welcome UserName</Text>
      <View style={{gap:15}}>
      <TouchableOpacity
              style={styles.buttonSection}>
              <View style={styles.buttonArea}>
              <Image
                  source={require('../assets/images/l1.jpg')}
                  style={[styles.img,{marginLeft:5}]}
                />
                <Text style={styles.buttonName}>ML Expert</Text>
                <Image
                  source={require('../assets/images/r.jpg')}
                  style={[styles.img,{marginRight: 5}]}
                />
              </View>
       </TouchableOpacity>

       <TouchableOpacity
              style={styles.buttonSection}>
              <View style={styles.buttonArea}>
              <Image
                  source={require('../assets/images/l2.jpg')}
                  style={[styles.img,{marginLeft:5}]}
                />
                <Text style={styles.buttonName}>+9100000000</Text>
                <Image
                  source={require('../assets/images/r.jpg')}
                  style={[styles.img,{marginRight: 5}]}
                />
              </View>
       </TouchableOpacity>

       <TouchableOpacity
              style={styles.buttonSection}>
              <View style={styles.buttonArea}>
              <Image
                  source={require('../assets/images/l3.jpg')}
                  style={[styles.img,{marginLeft:5}]}
                />
                <Text style={styles.buttonName}>My Recent Activities</Text>
                <Image
                  source={require('../assets/images/r3.jpg')}
                  style={[styles.img,{marginRight: 5}]}
                />
              </View>
       </TouchableOpacity>
       </View>
       <View style={{flex:1,flexDirection: 'row',alignItems: 'center',justifyContent: 'center',marginTop:60}}>
       <Image source={require('../assets/images/LinkedIn.jpg')}  style={{width:35}}/>
       <Image source={require('../assets/images/Instagram.jpg')}/>
       </View>
       <View style={{marginTop:200}}>
       <TouchableOpacity  style={[styles.submit,{width:136,marginLeft:148,marginBottom:20,backgroundColor:'#d9d9d9'}]} onPress={() => navigation.navigate('Splash')}>
                  <Text style={{color:'#000',fontWeight:'bold'}}>Logout</Text>
      </TouchableOpacity>

      
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  profilepic: {
  alignItems: 'center',
  marginTop:120,
  marginBottom:13
  },
  buttonSection: {
    marginLeft: 15,
    marginRight:30,
    alignItems: 'stretch',
    borderWidth: 0.3,
    borderBottomColor: '#000',
    borderRadius:2,
    height:41,
    alignContent: 'center',

  },
  buttonName: {
    color: '#1F2024',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign:'center',
  alignItems:'center',
    padding:10,
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  img: {
    width:28,
    height:28,
    marginTop:5,
    
  },
  username:{
    fontWeight: 'bold',
    fontSize:20,
    textAlign: 'center',
    marginBottom:30,
  },
  submit: {
    height: 'auto',
    width: 'auto',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal:20,
    borderRadius: 12,
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    padding: 10,  // Adds padding to make it easier to press
    alignItems: 'center',  // Centers the content horizontally
    flex: 1, flexDirection: 'row', 
  },
  
  text: {
    fontSize: 16,  // Adjust the font size for better readability
    fontWeight: 'bold',
    marginBottom: 10,  // Adds space between text and second image
  },
});

export default Profile