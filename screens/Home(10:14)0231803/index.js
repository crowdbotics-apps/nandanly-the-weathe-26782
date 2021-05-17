import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_10_15}>
        <View style={styles.View_10_16}>
          <Text style={styles.Text_10_16}>4.5</Text>
        </View>
      </View>
      <View style={styles.View_10_21}>
        <View style={styles.View_10_22} />
        <View style={styles.View_10_23}>
          <View style={styles.View_10_24} />
          <View style={styles.View_10_25}>
            <View style={styles.View_10_26} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c14a/76dc/ac7586f2298638c0a5504d6dcf354efc"
              }}
              style={styles.ImageBackground_10_27}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c74/7061/fee3f16765b3f0d6a035f617b1910c96"
              }}
              style={styles.ImageBackground_10_28}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8f0/9ee5/10441ca6c120268ddea1981fdeec6306"
              }}
              style={styles.ImageBackground_10_29}
            />
          </View>
        </View>
        <View style={styles.View_10_30}>
          <Text style={styles.Text_10_30}>24ºC</Text>
        </View>
        <View style={styles.View_10_31}>
          <Text style={styles.Text_10_31}>06:00 AM</Text>
        </View>
        <View style={styles.View_10_185}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e8f/33ec/2b4f871439190dd42c6b18ca6b2e5a86"
            }}
            style={styles.ImageBackground_10_186}
          />
        </View>
        <View style={styles.View_10_33} />
        <View style={styles.View_10_183}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/d999/01b72c6b4b16bfe5a92d7d55cb3f1a99"
            }}
            style={styles.ImageBackground_10_184}
          />
        </View>
        <View style={styles.View_10_35}>
          <Text style={styles.Text_10_35}>26ºC</Text>
        </View>
        <View style={styles.View_10_36}>
          <Text style={styles.Text_10_36}>08:00 AM</Text>
        </View>
        <View style={styles.View_10_37} />
        <View style={styles.View_10_38} />
        <View style={styles.View_10_39}>
          <Text style={styles.Text_10_39}>23ºC</Text>
        </View>
        <View style={styles.View_10_40}>
          <Text style={styles.Text_10_40}>10:00 AM</Text>
        </View>
        <View style={styles.View_10_181}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f50/2bc0/cfe1b40ed6d8c0adc34e766a904552df"
            }}
            style={styles.ImageBackground_10_182}
          />
        </View>
      </View>
      <View style={styles.View_10_42}>
        <View style={styles.View_10_43} />
        <View style={styles.View_10_44} />
        <View style={styles.View_10_45}>
          <View style={styles.View_10_46} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d2b/d77b/3dc5add9a9dc5b6e4ed20f19b56214ad"
            }}
            style={styles.ImageBackground_10_47}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fc3/049b/26f969ae3127b9ca0c0b996dd9bb00e7"
            }}
            style={styles.ImageBackground_10_48}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6590/0259/cf62569fd23c08c8db7da02a5ef59538"
            }}
            style={styles.ImageBackground_10_49}
          />
        </View>
      </View>
      <View style={styles.View_10_50}>
        <View style={styles.View_10_51} />
        <View style={styles.View_10_52} />
        <View style={styles.View_10_53}>
          <View style={styles.View_10_54} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d2b/d77b/3dc5add9a9dc5b6e4ed20f19b56214ad"
            }}
            style={styles.ImageBackground_10_55}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fc3/049b/26f969ae3127b9ca0c0b996dd9bb00e7"
            }}
            style={styles.ImageBackground_10_56}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6590/0259/cf62569fd23c08c8db7da02a5ef59538"
            }}
            style={styles.ImageBackground_10_57}
          />
        </View>
      </View>
      <View style={styles.View_12_5}>
        <View style={styles.View_12_2}>
          <View style={styles.View_10_58}>
            <View style={styles.View_10_59} />
            <View style={styles.View_10_60}>
              <View style={styles.View_10_61} />
              <View style={styles.View_10_62}>
                <View style={styles.View_10_63} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ae5/53aa/b97352d98f851ea4d9b0b3fec1ad6113"
                  }}
                  style={styles.ImageBackground_10_64}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dadc/a7f4/e34522ba9e0f54a26e13778366d61feb"
                  }}
                  style={styles.ImageBackground_10_65}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccdf/e99e/83d4e1073c5c1c8360c8ebc2c547e15b"
                  }}
                  style={styles.ImageBackground_10_66}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_10_67}>
          <View style={styles.View_10_68}>
            <View style={styles.View_10_69}>
              <Text style={styles.Text_10_69}>23</Text>
            </View>
            <View style={styles.View_10_70}>
              <Text style={styles.Text_10_70}>º</Text>
            </View>
          </View>
          <View style={styles.View_10_71}>
            <Text style={styles.Text_10_71}>Moon Cloud Fast Wind</Text>
          </View>
        </View>
        <View style={styles.View_10_72}>
          <View style={styles.View_10_73}>
            <Text style={styles.Text_10_73}>Sunday, 8 March 2021</Text>
          </View>
        </View>
        <View style={styles.View_10_179}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d491/8433/f6fdfbaf1a44fa93d7ca3c5af598d5ba"
            }}
            style={styles.ImageBackground_10_180}
          />
        </View>
      </View>
      <View style={styles.View_10_75}>
        <View style={styles.View_10_76} />
        <View style={styles.View_10_77}>
          <View style={styles.View_11_2}>
            <Text style={styles.Text_11_2}>Nandanly</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10_110}>
        <View style={styles.View_10_111}>
          <Text style={styles.Text_10_111}>Thiruvalla</Text>
        </View>
        <View style={styles.View_10_112}>
          <Text style={styles.Text_10_112}>17.45 PM</Text>
        </View>
      </View>
      <View style={styles.View_10_113}>
        <View style={styles.View_10_114}>
          <Text style={styles.Text_10_114}>Today</Text>
        </View>
        <View style={styles.View_10_115}>
          <View style={styles.View_10_116}>
            <Text style={styles.Text_10_116}>Next 7 Days</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5271/db9f/ff2d92c935b4037317511f6446706b35"
            }}
            style={styles.ImageBackground_10_117}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10_15: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("109.86666666666667%"),
    top: hp("70.62841530054644%")
  },
  View_10_16: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_16: {
    color: "rgba(245, 245, 245, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_21: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40.30054644808743%"),
    minHeight: hp("40.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70.62841530054644%"),
    backgroundColor: "rgba(212, 209, 240, 1)",
    overflow: "hidden"
  },
  View_10_22: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333333%"),
    top: hp("37.70491803278689%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_10_23: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("16.39344262295083%")
  },
  View_10_24: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_10_25: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_26: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  ImageBackground_10_27: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10_28: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.6000000000000005%"),
    top: hp("-2.5956284153005384%")
  },
  ImageBackground_10_29: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.199999999999998%"),
    top: hp("1.7759562841530112%")
  },
  View_10_30: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("29.371584699453564%")
  },
  Text_10_30: {
    color: "rgba(245, 245, 245, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_31: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("18.30601092896177%")
  },
  Text_10_31: {
    color: "rgba(245, 245, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_185: {
    width: wp("24%"),
    height: hp("12.295081967213115%"),
    top: hp("17.896174863387984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_186: {
    width: wp("24%"),
    height: hp("12.295081967213115%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_33: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("16.39344262295083%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_10_183: {
    width: wp("24.53333333333333%"),
    height: hp("12.431693989071038%"),
    top: hp("17.75956284153007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_184: {
    width: wp("24.53333333333333%"),
    height: hp("12.431693989071038%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_35: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333333%"),
    top: hp("29.23497267759565%")
  },
  Text_10_35: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_36: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%"),
    top: hp("18.16939890710384%")
  },
  Text_10_36: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_37: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%"),
    top: hp("16.39344262295083%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_10_38: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.06666666666666%"),
    top: hp("16.39344262295083%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_10_39: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("29.371584699453564%")
  },
  Text_10_39: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_40: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%"),
    top: hp("18.30601092896177%")
  },
  Text_10_40: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_181: {
    width: wp("24%"),
    height: hp("12.295081967213115%"),
    top: hp("17.896174863387984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_182: {
    width: wp("24%"),
    height: hp("12.295081967213115%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_42: {
    width: wp("64.53333333333333%"),
    minWidth: wp("64.53333333333333%"),
    height: hp("39.882284695984886%"),
    minHeight: hp("39.882284695984886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("17.759562841530055%")
  },
  View_10_43: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999886%"),
    top: hp("2.3224043715846996%"),
    backgroundColor: "rgba(174, 62, 62, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_10_44: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_10_45: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_46: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  ImageBackground_10_47: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10_48: {
    width: wp("60.53333333333333%"),
    minWidth: wp("60.53333333333333%"),
    height: hp("23.633879781420767%"),
    minHeight: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.733333333333334%"),
    top: hp("24.316939890710387%")
  },
  ImageBackground_10_49: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("12.43169398907104%")
  },
  View_10_50: {
    width: wp("64.53333333333333%"),
    minWidth: wp("64.53333333333333%"),
    height: hp("39.882284695984886%"),
    minHeight: hp("39.882284695984886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-53.333333333333336%"),
    top: hp("17.759562841530055%")
  },
  View_10_51: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("2.3224043715846996%"),
    backgroundColor: "rgba(174, 62, 62, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_10_52: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_10_53: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_54: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  ImageBackground_10_55: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10_56: {
    width: wp("60.53333333333333%"),
    minWidth: wp("60.53333333333333%"),
    height: hp("23.633879781420767%"),
    minHeight: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.733333333333327%"),
    top: hp("24.316939890710387%")
  },
  ImageBackground_10_57: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("12.43169398907104%")
  },
  View_12_5: {
    width: wp("72.8%"),
    minWidth: wp("72.8%"),
    height: hp("46.17486338797814%"),
    minHeight: hp("46.17486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("11.475409836065573%")
  },
  View_12_2: {
    width: wp("72.8%"),
    minWidth: wp("72.8%"),
    height: hp("39.89071038251366%"),
    minHeight: hp("39.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.284153005464482%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_58: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("39.882284695984886%"),
    minHeight: hp("39.882284695984886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_59: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333364%"),
    top: hp("2.3224043715846996%"),
    backgroundColor: "rgba(174, 62, 62, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_10_60: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_61: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_10_62: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_63: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  ImageBackground_10_64: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("37.55988032440018%"),
    minHeight: hp("37.55988032440018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10_65: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20%"),
    top: hp("-8.333333333333334%")
  },
  ImageBackground_10_66: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.866666666666674%"),
    top: hp("0.5464480874316955%")
  },
  View_10_67: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.400000000000002%"),
    top: hp("31.01092896174864%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_68: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2666666666666657%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_69: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_69: {
    color: "rgba(245, 245, 245, 1)",
    fontSize: 58,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_70: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.46666666666667%"),
    top: hp("0%")
  },
  Text_10_70: {
    color: "rgba(245, 245, 245, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_71: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622942%")
  },
  Text_10_71: {
    color: "rgba(245, 245, 245, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_72: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("3.5519125683060118%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_10_73: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666672%"),
    top: hp("1.3661202185792334%")
  },
  Text_10_73: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_179: {
    width: wp("61.33333333333333%"),
    height: hp("32.240437158469945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_180: {
    width: wp("61.33333333333333%"),
    height: hp("32.240437158469945%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_75: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("59.2896174863388%")
  },
  View_10_76: {
    width: wp("73.06666666666666%"),
    minWidth: wp("73.06666666666666%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("4.78142076502732%"),
    backgroundColor: "rgba(212, 135, 135, 1)",
    overflow: "hidden"
  },
  View_10_77: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_11_2: {
    width: wp("61.86666666666667%"),
    minWidth: wp("61.86666666666667%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("0%")
  },
  Text_11_2: {
    color: "rgba(174, 62, 62, 1)",
    fontSize: 38,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_110: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("3.278688524590164%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_111: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_111: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_112: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737705%")
  },
  Text_10_112: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_113: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("80.05464480874316%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_114: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_10_114: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_115: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_116: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  Text_10_116: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_117: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666663%")
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
