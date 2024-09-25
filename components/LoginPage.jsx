import { View, Text,SafeAreaView ,StyleSheet,Image,TextInput,Linking, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    // Assuming login success
    navigation.replace('HomeTabs'); // Navigate to the TabNavigator after login
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      
      <Image source={require('../assets/images/Logo.jpg')} style={styles.logo} />
      <Text style={styles.gdg}>Welcome</Text>
      <View>
      <TextInput style={styles.textInput} value={'Email Address'} />
      <TextInput style={styles.textInput} value={'Password'} />
      </View>
      <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password?
      </Text>
      <View>
      <TouchableOpacity  style={styles.submit} onPress={handleLogin}>
                  <Text style={{color:'#fff',fontWeight:'bold'}}>Login</Text>
      </TouchableOpacity>
      </View>
     <View style={{textAlign:'center',alignContent:'center',justifyContent:'center'}}>
      <Text style={{marginLeft:33,marginTop:30,paddingLeft:25}}>Do not have an Account?  <Text style={styles.link}
      onPress={() => Linking.openURL('http://google.com')}>
                  Register Now
      </Text></Text>
      </View>
    </View>
   
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Set the background color to white (or any color of your choice)
  },
  
  logo: {
    width: 205, 
    height: 100, 
    marginTop: 196, 
    marginLeft: 90, 
  },
  gdg: {
    textAlign:'center',
    marginTop:20,
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 1,
  },
  textInput:{
     marginHorizontal:25,padding:4,marginTop:25,borderRadius: 10,fontSize:14,height:47,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#c5c6cc',
      color:'#8f9098',
      paddingLeft:15,
  },
  link: {
  marginTop:25,
  marginLeft:33,

  fontWeight:'bold',
  textDecorationLine: 'underline'
  },
  submit: {
    height: 51,
    width: 143,
    backgroundColor: '#33af3f',
    paddingVertical: 12,
    paddingHorizontal: 16,
    
    marginLeft:126,
    marginTop:30,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fl:{
    display:'flex'
  }
});

export default LoginPage