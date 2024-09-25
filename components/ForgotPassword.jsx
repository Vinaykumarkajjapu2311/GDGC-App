import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity,Linking} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 

const ForgotPassword = () => {
  const navigation = useNavigation(); 

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require('../assets/images/Logo.jpg')} style={styles.logo} />

        <View>
          <Text style={{ marginLeft: 35, paddingTop: 50, fontWeight: 'bold' }}>Enter Email Address</Text>
          <TextInput style={styles.textInput} value={'name@email.com'} />

          <TouchableOpacity style={styles.submit}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Send</Text>
          </TouchableOpacity>
        </View>

        {/* Navigate back to LoginPage when clicked */}
        <View style={styles.text}>
          <Text onPress={() => navigation.navigate('Login')}> 
            Back to <Text style={{ fontWeight: 'bold' }}>login</Text>
          </Text>
        </View>

        <View style={{ textAlign: 'center', alignContent: 'center', justifyContent: 'center' }}>
          <Text style={{ marginLeft: 33, marginTop: 30, paddingLeft: 25 }}>
            Do not have an Account?{' '}
            <Text style={styles.link} onPress={() => Linking.openURL('http://google.com')}>
              Register Now
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Set the background color to white (or any color of your choice)
  },
  logo: {
    width: 205, 
    height: 100, 
    marginTop: 135,
    marginBottom: 20, 
    marginLeft: 90, 
  },
  
  textInput:{
    marginHorizontal:25,padding:4,marginTop:10,borderRadius: 10,fontSize:14,height:47,
     borderRadius: 10,
     borderWidth: 1,
     borderColor: '#c5c6cc',
     color:'#8f9098',
     paddingLeft:15,
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
text:{
  alignItems: 'center',
  marginTop:30
},
link: {
  marginTop:25,
  marginLeft:33,
  fontWeight:'bold',
  textDecorationLine: 'underline'
  },
});
export default ForgotPassword