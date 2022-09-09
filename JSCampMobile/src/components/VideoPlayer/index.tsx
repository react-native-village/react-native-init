import React, { useRef } from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import Video from 'react-native-video-controls'
import { VideoProperties } from 'react-native-video'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

interface VideoPlayerT extends VideoProperties {
  viewStyle: StyleProp<ViewStyle>
}

const VideoPlayer = ({ style, viewStyle, ...VideoProps }: VideoPlayerT) => {
  const playerRef = useRef<Video>(null)
  return (
    <Video
      style={[styles.container, viewStyle]}
      ignoreSilentSwitch="ignore"
      ref={playerRef}
      disableFullscreen
      disableBack
      {...VideoProps}
    />
  )
}

export { VideoPlayer }
