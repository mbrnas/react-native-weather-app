import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
  } from 'react-native';
  
  
  function DetailsScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Click on the images to find out what each symbol means!
        </Text>
        <View style={styles.infoImages}>
        
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                'Sun Symbol',
                'The sunny symbol in our application represents sunny weather, and it is shown everywhere, where the weather is nice and sunny!',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
              )
            }>
            <Image
              style={styles.imageInfo}
              source={require('../assets/infoImages/icons8-sun-100.png')}
            />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() =>
              Alert.alert(
                'Cloudy Symbol',
                'The cloudy symbol in our application represents cloudy weather, and it is shown everywhere, where the weather has clouds present, with no rain or snow or sun!',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
              )
            }>
            <Image
              style={styles.imageInfo}
              source={require('../assets/infoImages/icons8-sun-100.png')}
            />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => Alert.alert(
                'Rainy Symbol',
                'The rainy symbol in our application represents rainy weather, and it is shown everywhere, where the weather has rain present!',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
              )
            }>
            <Image
              style={styles.imageInfo}
              source={require('../assets/infoImages/icons8-sun-100.png')}
            />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => Alert.alert(
                'Snowy Symbol',
                'The snowy symbol in our application represents snow and weather where it snows!',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
              )
            }>
            <Image
              style={styles.imageInfo}
              source={require('../assets/infoImages/icons8-sun-100.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 20,
      padding: 20,
      textAlign: 'center',
    },
    image: {
      height: 30,
      width: 30,
    },
    infoImages: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70,
      padding: 40
    },
    navbar: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 35,
      width: '100%',
      position: 'absolute',
      bottom: 0,
    },
  });
  
  export default DetailsScreen;
  