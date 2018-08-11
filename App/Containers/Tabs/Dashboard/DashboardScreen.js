import React, { Component } from "react";
import {
  Image,
  View,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";

import axios from 'axios';
import Orientation from 'react-native-orientation';

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

class DashboardScreen extends Component {

  state = { VIDEO_LIST: [] }

  getList = async () => {
      const json = await UserApi.getList();
      if (json === undefined) {
        console.log("Undefined JSON")
      } else if (json.error) {
        console.log("Error")
      } else {
        this.setState({ VIDEO_LIST: json.data.videos })
  };
}

  async componentDidMount(){
    this.getList();
}

  render() {
    return (
      <ScrollView>
        <ScreenWrapper style={{marginTop:10}}>
          <ScreenPadder>
          {this.state.VIDEO_LIST.map((data, index) => {
            return (
              <ListCircleIcon
                key={index}
                name={data.title}
                description={data.thumbnail_url}
                onPress={() => {
                  this.props.navigation.navigate("Videos", { data });
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
