import { View, Text, Image, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import React from 'react';

const MainPage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ backgroundColor: '#e7f8e3' }}>
          <View style={styles.header}>
            <Image source={require('../assets/images/logosmall.jpg')} />
            
            <View style={styles.imageRow}>
              {/* Separate TouchableOpacity for each image */}
              <TouchableOpacity onPress={() => Linking.openURL("https://gdsc-vnrvjiet.vercel.app/events/past-events")}>
                <Image source={require('../assets/images/l3.jpg')} style={styles.smallImage} />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => console.log('Profile Image clicked')}>
                <Image source={require('../assets/images/profilesmall.jpg')} style={styles.smallImage} />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Hello, GDGC!</Text>
            <Text style={styles.subGreetingText}>Are you ready for the events?</Text>
          </View>
          
          <View style={styles.searchContainer}>
            <TextInput style={styles.textInput} value={''} placeholder='Search for an Event' />
          </View>

          <View style={styles.upcomingEventsContainer}>
            <View style={{flexDirection:'row',
    justifyContent: 'stretch',gap:100,flex:1}}>
            <Text style={styles.upcomingEventsText}>Upcoming Events                 
              
            </Text>
            <Text style={styles.link} onPress={() => navigation.navigate('ComingSoon')}> See all
              </Text>
              </View>
            <View>
              {/* Event 1 */}
              <TouchableOpacity style={styles.eventCard} onPress={() => Linking.openURL("https://gdg.community.dev/gdg-on-campus-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-and-technology-hyderabad-india/")}>
                <Text style={styles.eventTitle}>Event 1</Text>
                <Text style={styles.eventDetails}>Venue: VNR VJIET</Text>
                <Text>Date</Text>
                <TouchableOpacity style={styles.notifyButton}>
                  <Text>Notify Me</Text>
                </TouchableOpacity>
              </TouchableOpacity>

              {/* Event 2 */}
              <TouchableOpacity style={styles.eventCard} onPress={() => Linking.openURL("https://gdg.community.dev/gdg-on-campus-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-and-technology-hyderabad-india/")}>
                <Text style={styles.eventTitle}>Event 2</Text>
                <Text style={styles.eventDetails}>Venue: VNR VJIET</Text>
                <Text>Date</Text>
                <TouchableOpacity style={styles.notifyButton}>
                  <Text>Notify Me</Text>
                </TouchableOpacity>
              </TouchableOpacity>

              {/* Event 3 */}
              <TouchableOpacity style={[styles.eventCard, { marginBottom: 10 }]} onPress={() => Linking.openURL("https://gdg.community.dev/gdg-on-campus-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-and-technology-hyderabad-india/")}>
                <Text style={styles.eventTitle}>Event 3</Text>
                <Text style={styles.eventDetails}>Venue: VNR VJIET</Text>
                <Text>Date</Text>
                <TouchableOpacity style={styles.notifyButton}>
                  <Text>Notify Me</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 20
  },
  imageRow: {
    flexDirection: 'row',
    alignItems:'center' // Ensures that images are placed in a row
  },
  smallImage: {
    
    marginHorizontal: 5, // Add some space between images
  },
  greetingContainer: {
    marginTop: 10,
    paddingTop: 20,
    backgroundColor: '#33af3f',
    marginHorizontal: 20,
    paddingBottom: 35,
    borderRadius: 20,
  },
  greetingText: {
    paddingLeft: 15,
    fontSize: 35,
    fontWeight: 'bold',
   
    color: 'white',
    letterSpacing:1
  },
  subGreetingText: {
    paddingLeft: 15,
    fontSize: 20,
  
    color: 'white',
    letterSpacing:1
  },
  searchContainer: {
    marginTop: 25,
    marginHorizontal: 20,
  },
  textInput: {
    fontSize: 14,
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    color: '#8f9098',
    paddingLeft: 15,
  },
  upcomingEventsContainer: {
    marginTop: 20,
    marginLeft: 30,
  
  },
  upcomingEventsText: {
    fontWeight: 'bold',
    fontSize:22,
  },
  link: {
   
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingLeft:10,
    paddingTop:2
  },
  eventCard: {
    marginTop: 20,
    backgroundColor: '#f9f9f9',
    marginRight: 20,
    padding:20,
    borderWidth: 1,
    borderRadius: 10,
  },
  eventTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  eventDetails: {
    paddingTop: 10,
  },
  notifyButton: {
    backgroundColor: '#f9f9f9',
    alignItems: 'flex-end',
    marginTop: 10,
  },
});

export default MainPage;
