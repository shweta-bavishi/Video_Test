import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
//Icons
import { Icon } from 'react-native-elements';
import Orientation from 'react-native-orientation';
import styled from "styled-components/native";
//Navigation
import { NavigationActions } from "react-navigation";
const ScreenHeaderNameWrapper = styled.View`
  align-items: flex-start
  paddingLeft: 20
  justify-content: flex-start;
`;

export default class Videos extends React.Component {

  state = {
    mute: false,
    paused: false,
  }
  _renderHeaderName = () => {
    return (
      <ScreenHeaderNameWrapper>
        <TouchableOpacity
        onPress={() => {
          this.props.navigation.dispatch(NavigationActions.back());
        }}>
          <Icon name= 'ios-arrow-round-back' type= 'ionicon' size={30}/>
        </TouchableOpacity>
      </ScreenHeaderNameWrapper>
    );
  };
  handlePlayAndPause = () => {
    this.setState((prevState) => ({
       paused: !prevState.paused
    }));
  }

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,
    }));
  }
  componentWillMount() {
    const initial = Orientation.getInitialOrientation();
  }
  componentDidMount() {
    Orientation.lockToLandscape();
  }
  componentWillUnmount() {
    Orientation.lockToPortrait();
  }
  render() {
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
      {this._renderHeaderName()}
      <Video
          source={{ uri: this.props.navigation.state.params.data.video_url }}
          resizeMode="cover"
          paused={this.state.paused}
          style={{ width, height: 300 }}
          muted={this.state.mute}
        />
        <View style={styles.controlBar}>
        <Icon
              name={this.state.mute ? "volume-off" : "volume-up"}
              size={45}
              type='octicons'
              color="white"
              onPress={this.handleVolume}
            />
            <Icon
              name={this.state.paused ? "play-arrow" : "pause"}
              size={45}
              type='ionicons'
              color="white"
              onPress={this.handlePlayAndPause}
            />
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }

});
