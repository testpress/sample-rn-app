import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  NativeModules,
  Button,
  NativeEventEmitter,
} from 'react-native';
import TpStreamsPlayerView from 'react-native-tpstreams';
import { useFocusEffect } from '@react-navigation/native';

const { Tpstreams } = NativeModules;
const eventEmitter = new NativeEventEmitter(Tpstreams);

const PlayerScreen = ({ route }) => {
  const { videoId, accessToken, enableDownload, autoPlay, downloadMetadata } = route.params;
  const [isMounted, setIsMounted] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      setIsMounted(true);
      return () => {
        setIsMounted(false);
      };
    }, [])
  );

  useEffect(() => {
    const eventListeners = [
      'onPlaybackStateChanged',
      'onAccessTokenExpired',
      'onMarkerCallback',
      'onDeviceInfoChanged',
      'onFullScreenChanged',
      'onIsLoadingChanged',
      'onIsPlayingChanged',
      'onPlayerError',
      'onSeekBackIncrementChanged',
      'onSeekForwardIncrementChanged',
    ].map((event) =>
      eventEmitter.addListener(event, (data) => {
        console.log(`${event}:`, data);
      })
    );

    return () => {
      eventListeners.forEach((sub) => sub.remove());
    };
  }, []);

  return (
    <View style={styles.container}>
      {isMounted && (
        <TpStreamsPlayerView
          videoId={videoId}
          accessToken={accessToken}
          enableDownload={enableDownload}
          autoPlay={autoPlay}
          downloadMetadata={downloadMetadata}
          style={styles.player}
        />
      )}

      <View style={styles.buttonContainer}>
        {[
          { title: 'Play', action: () => Tpstreams.play() },
          { title: 'Pause', action: () => Tpstreams.pause() },
          { title: 'Seek to 10s', action: () => Tpstreams.seekTo(10000) },
          { title: 'Release', action: () => Tpstreams.release() },
          { title: 'Get Current Time', action: () => Tpstreams.getCurrentTime().then(console.log) },
          { title: 'Get Duration', action: () => Tpstreams.getDuration().then(console.log) },
          { title: 'Speed 1.5x', action: () => Tpstreams.setPlaybackSpeed(1.5) },
          { title: 'Speed 1x', action: () => Tpstreams.setPlaybackSpeed(1.0) },
          { title: 'Get Buffered Time', action: () => Tpstreams.getBufferedTime().then(console.log) },
          { title: 'Get Playback State', action: () => Tpstreams.getPlaybackState().then(console.log) },
          { title: 'Get Playback Speed', action: () => Tpstreams.getPlaybackSpeed().then(console.log) },
        ].map((btn, index) => (
          <View key={index} style={styles.buttonWrapper}>
            <Button title={btn.title} onPress={btn.action} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  player: {
    width: '100%',
    height: 300,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '90%',
  },
  buttonWrapper: {
    flexBasis: '45%',
    margin: 5,
  },
});

export default PlayerScreen;