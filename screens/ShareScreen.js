import React from 'react';
import { View, TouchableOpacity, Text, Share, StyleSheet } from 'react-native';

const ShareScreen = () => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Hey, check out this awesome weather app!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
    
    <Text style={styles.shareTextWrapper}>Thank you for choosing SunnyRadar, the ultimate weather app for accurate and up-to-date weather forecasts! </Text>
    <Text style={styles.shareTextWrapper}>If you're enjoying our app, why not share it with your friends and family? </Text>
  
   
      <TouchableOpacity style={styles.button} onPress={onShare}>
        <Text style={styles.buttonText}>Share this app</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20
  },
  button: {
    padding: 15,
    backgroundColor: '#2196F3',
    borderRadius: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  shareTextWrapper: {
    textAlign: 'center',
    padding: 50
  }
});

export default ShareScreen;
