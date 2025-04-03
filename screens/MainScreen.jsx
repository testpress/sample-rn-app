import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>


      <Button
        title="Play DRM"
        onPress={() => navigation.navigate('Player', {
          videoId: 'AgAFNEJn3kt',
          accessToken: 'f6823b42-b88f-4935-a351-65f7d5f842d8',
          enableDownload: true,
          autoPlay: false,
          downloadMetadata: {"courseId":"1", "studentId":"123"}
        })}
      />


      <Button
        title="Play Non-DRM"
        onPress={() => navigation.navigate('Player', {
          videoId: '7RKQZj4gB2T',
          accessToken: 'd4986429-20e2-4b21-93ae-c70630a37e06',
          enableDownload: true,
          autoPlay: true,
          // downloadMetadata: {"courseId":"2", "studentId":"321"}
        })}
      />

      <Button
          title="Download List"
          onPress={() => navigation.navigate('DownloadListScreen')}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});

export default MainScreen;