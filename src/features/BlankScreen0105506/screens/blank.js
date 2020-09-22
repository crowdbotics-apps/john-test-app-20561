import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={this.props.themedStyle.View_1}>
      <View style={this.props.themedStyle.View_10}>
        <Text style={this.props.themedStyle.Text_9}>lens</Text>
        <Text style={this.props.themedStyle.Text_44}>Birds Near Me</Text>
      </View>
      <View style={this.props.themedStyle.View_5}>
        <View style={this.props.themedStyle.View_6}>
          <View style={this.props.themedStyle.View_11}>
            <View style={this.props.themedStyle.View_14}>
              <Image
                resizeMode="cover"
                source={{
                  uri:
                    "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/vincent-van-zalinge-44090-unsplash.jpg"
                }}
                style={this.props.themedStyle.Image_17}
              />
            </View>
            <View style={this.props.themedStyle.View_12}>
              <Image
                resizeMode="cover"
                source={{
                  uri:
                    "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/scott-johnson-522639-unsplash.jpg"
                }}
                style={this.props.themedStyle.Image_15}
              />
            </View>
            <View style={this.props.themedStyle.View_13}>
              <Image
                resizeMode="cover"
                source={{
                  uri:
                    "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/philip-marsh-422399-unsplash.jpg"
                }}
                style={this.props.themedStyle.Image_16}
              />
            </View>
          </View>
          <View style={this.props.themedStyle.View_18}>
            <View style={this.props.themedStyle.View_14}>
              <Image
                resizeMode="cover"
                source={{
                  uri:
                    "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/anders-nord-459835-unsplash.jpg"
                }}
                style={this.props.themedStyle.Image_17}
              />
            </View>
            <View style={this.props.themedStyle.View_12}>
              <Image
                resizeMode="cover"
                source={{
                  uri:
                    "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/hugo-kemmel-276408-unsplash.jpg"
                }}
                style={this.props.themedStyle.Image_15}
              />
            </View>
            <View style={this.props.themedStyle.View_13}>
              <Image
                resizeMode="cover"
                source={{
                  uri:
                    "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/hakon-helberg-99985-unsplash_iazWmL4.jpg"
                }}
                style={this.props.themedStyle.Image_16}
              />
            </View>
          </View>
          <View style={this.props.themedStyle.View_19}>
            <View style={this.props.themedStyle.View_14}>
              <Image
                resizeMode="cover"
                source={{
                  uri:
                    "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/alfred-leung-332452-unsplash.jpg"
                }}
                style={this.props.themedStyle.Image_17}
              />
            </View>
            <View style={this.props.themedStyle.View_12}>
              <Image
                resizeMode="cover"
                source={{
                  uri:
                    "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/joe-ridley-beth-martin-48011-unsplash.jpg"
                }}
                style={this.props.themedStyle.Image_15}
              />
            </View>
            <View style={this.props.themedStyle.View_13}>
              <Image
                resizeMode="cover"
                source={{
                  uri:
                    "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/richard-lee-518621-unsplash.jpg"
                }}
                style={this.props.themedStyle.Image_16}
              />
            </View>
          </View>
          <View style={this.props.themedStyle.View_20}>
            <Image
              resizeMode="contain"
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/Vector_4.png"
              }}
              style={this.props.themedStyle.Image_23}
            />
            <Image
              resizeMode="contain"
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/Subtract.png"
              }}
              style={this.props.themedStyle.Image_24}
            />
            <Image
              resizeMode="contain"
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/Vector_5.png"
              }}
              style={this.props.themedStyle.Image_25}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  View_1: {
    width: "100%",
    height: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  View_10: {
    width: "100%",
    height: 20,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Text_9: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 15,
    marginBottom: 12,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 7,
    overflow: "hidden",
    alignSelf: "center",
    fontSize: 19,
    color: "#2c038c",
    backgroundColor: "#ffffff",
    fontFamily: "OpenSans-Bold",
    borderColor: "#2c038c",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 2,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  Text_44: {
    marginLeft: 10,
    marginRight: 0,
    marginTop: 16,
    marginBottom: 5,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 3,
    paddingBottom: 3,
    overflow: "visible",
    alignSelf: "center",
    fontSize: 15,
    color: "#2c038c",
    backgroundColor: "#ffffff",
    fontFamily: "Montserrat-Bold",
    borderColor: "#2c038c",
    borderStyle: "solid",
    borderRadius: 5,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  View_5: {
    width: "100%",
    height: "50%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: -80,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  View_6: {
    width: "100%",
    height: 100,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    overflow: "hidden",
    alignSelf: "flex-start",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  View_11: {
    width: "100%",
    height: 100,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 11,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  View_14: {
    width: 60,
    height: 105,
    marginLeft: 8,
    marginRight: 4,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Image_17: {
    width: "100%",
    height: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    alignSelf: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  View_12: {
    width: 60,
    height: 105,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Image_15: {
    width: "100%",
    height: 105,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  View_13: {
    width: 60,
    height: 105,
    marginLeft: 4,
    marginRight: 8,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Image_16: {
    width: "100%",
    height: 105,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  View_18: {
    width: "100%",
    height: 100,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 11,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  View_14: {
    width: 60,
    height: 100,
    marginLeft: 8,
    marginRight: 4,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Image_17: {
    width: "100%",
    height: 105,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  View_12: {
    width: 60,
    height: 100,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Image_15: {
    width: "100%",
    height: 105,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  View_13: {
    width: 60,
    height: 100,
    marginLeft: 4,
    marginRight: 8,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Image_16: {
    width: "100%",
    height: 105,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  View_19: {
    width: "100%",
    height: 100,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  View_14: {
    width: 60,
    height: 100,
    marginLeft: 8,
    marginRight: 4,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Image_17: {
    width: "100%",
    height: 105,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    alignSelf: "flex-start",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  View_12: {
    width: 60,
    height: 100,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Image_15: {
    width: "100%",
    height: 105,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  View_13: {
    width: 60,
    height: 100,
    marginLeft: 4,
    marginRight: 8,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Image_16: {
    width: "100%",
    height: 105,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  View_20: {
    width: "100%",
    height: 25,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 26,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    alignSelf: "flex-end",
    fontSize: 12,
    color: "#ffffff",
    backgroundColor: "#2c038c",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "stretch",
    alignContent: "space-between",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Image_23: {
    width: "100%",
    height: 25,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    alignSelf: "center",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  Image_24: {
    width: "100%",
    height: 25,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    alignSelf: "center",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0
  },
  Image_25: {
    width: "100%",
    height: 25,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    alignSelf: "center",
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: 1
  }
}))
