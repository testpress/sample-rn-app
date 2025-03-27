import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>


      <Button
        title="Play DRM"
        onPress={() => navigation.navigate('Player', {
          videoId: '3G2p5NdMaRu',
          accessToken: '328f6f1c-c188-4c3f-8e38-345c9aaa1a51',
          enableDownload: true,
          autoPlay: false,
        })}
      />


      <Button
        title="Play Non-DRM"
        onPress={() => navigation.navigate('Player', {
          videoId: 'BEArYFdaFbt',
          accessToken: 'e6a1b485-daad-42eb-8cf2-6b6e51631092',
          enableDownload: true,
          autoPlay: true,
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