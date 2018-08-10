import React, { Component } from "react";
import {
  Image,
  View,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";


//CommonItems
import { Card, CardSection } from '../../../Common';

// Components
import ListCircleIcon from "../../../Components/ListCircleIcon";

import UserApi from '../../../services/UserApi'

// Theme
import styled from "styled-components/native";
import {
  ScreenWrapper,
  H2,
  H5,
  ScreenPadder
} from "../../../Themes/Global";

const ScreenHeaderNameWrapper = styled.View`
  flex-direction: row
  align-items: center
  justify-content: space-between
  padding-top: 5%;
`;
var VIDEO_LIST = [];
const VIDEO_LIST1 = [
  {
              "title": "video small",
              "thumbnail_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
              "video_url": "https://www.w3schools.com/htmL/mov_bbb.mp4"
          },
          {
              "title": "video medium",
              "thumbnail_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
              "video_url": "http://techslides.com/demos/sample-videos/small.mp4"
          },
          {
              "title": "video medium & long",
              "thumbnail_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
              "video_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
          },
          {
              "title": "video big",
              "thumbnail_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
              "video_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
          },
          {
              "title": "video small",
              "thumbnail_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
              "video_url": "https://www.w3schools.com/htmL/mov_bbb.mp4"
          },
          {
              "title": "video medium",
              "thumbnail_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
              "video_url": "http://techslides.com/demos/sample-videos/small.mp4"
          },
          {
              "title": "video medium & long",
              "thumbnail_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
              "video_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
          },
          {
              "title": "video big",
              "thumbnail_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
              "video_url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
          }
];

class DashboardScreen extends Component {

  getList = async () => {
      const json = await UserApi.getList();
      if (json === undefined) {
        console.log("Undefined JSON")
      } else if (json.error) {
        console.log("Error")
      } else {
        return json.videos;
  };
}

  componentDidMount(){
    VIDEO_LIST = this.getList();
    console.log(VIDEO_LIST);
}
  _navigate = data => {
    this.props.navigation.navigate(data, { data: data });
  };

  render() {
    return (
      <ScrollView>
        <ScreenWrapper style={{marginTop:10}}>
          <ScreenPadder>
            {VIDEO_LIST.map((data, index) => {
              return (
                <ListCircleIcon
                  key={index}
                  name={data.title}
                  description={data.thumbnail_url}
                  onPress={() => {
                    this._navigate(data.video_url);
                  }}
                />
              );
            })}
          </ScreenPadder>
        </ScreenWrapper>
      </ScrollView>
    );
  }
}

export default DashboardScreen;

const styles = StyleSheet.create({
  blockStyle:{
    paddingBottom: 50,
    borderBottomWidth: 0,
    width:(Dimensions.get('window').width/2)-20,
    height:Dimensions.get('window').height/4,
    padding:15
  },
  columnStyle:{
    borderBottomWidth: 0,
  }
});
