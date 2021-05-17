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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/035b/3b63/7afc4062ffe462bbc29cffd2f1229110"
        }}
        style={styles.ImageBackground_10_120}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbec/c081/c39cc0c42ff885cb2bfc8878f01944e7"
        }}
        style={styles.ImageBackground_10_121}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1456/69c7/e1ca353cdf5b3e38915018c585a504d8"
        }}
        style={styles.ImageBackground_10_122}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b8b/4b4a/6e0e9871104bd2492f6acc0ff249f14d"
        }}
        style={styles.ImageBackground_10_123}
      />
      <View style={styles.View_10_124}>
        <View style={styles.View_10_125}>
          <Text style={styles.Text_10_125}>4.5</Text>
        </View>
      </View>
      <View style={styles.View_10_130}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0651/71a5/aabc2b684cb8a91fdf37ab13e5cf9b33"
          }}
          style={styles.ImageBackground_10_131}
        />
        <View style={styles.View_10_132}>
          <View style={styles.View_10_133}>
            <Text style={styles.Text_10_133}>23º</Text>
          </View>
          <View style={styles.View_10_134}>
            <Text style={styles.Text_10_134}>Moon Cloud Fast Wind</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10_135}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d04a/6309/6f865cfdbb6701765ba13f2dcea6bd01"
          }}
          style={styles.ImageBackground_10_136}
        />
        <View style={styles.View_10_138}>
          <View style={styles.View_10_139}>
            <Text style={styles.Text_10_139}>Today’s Weather</Text>
          </View>
          <View style={styles.View_10_140}>
            <Text style={styles.Text_10_140}>Sunday, 8 March 2021</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10_141} />
      <View style={styles.View_10_142}>
        <View style={styles.View_10_143}>
          <Text style={styles.Text_10_143}>Future Weather</Text>
        </View>
        <View style={styles.View_10_144}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eb7/89e8/9618086288ac49afdacfefbbbcd49624"
            }}
            style={styles.ImageBackground_10_145}
          />
          <View style={styles.View_10_146}>
            <View style={styles.View_10_147}>
              <Text style={styles.Text_10_147}>29º</Text>
            </View>
            <View style={styles.View_10_148}>
              <View style={styles.View_10_149}>
                <Text style={styles.Text_10_149}>Monday</Text>
              </View>
              <View style={styles.View_10_150}>
                <Text style={styles.Text_10_150}>9 March 2021</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_10_151}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e7/0d68/11a82a82813c055543f7bd3b1851213f"
            }}
            style={styles.ImageBackground_10_152}
          />
          <View style={styles.View_10_153}>
            <View style={styles.View_10_154}>
              <Text style={styles.Text_10_154}>22º</Text>
            </View>
            <View style={styles.View_10_155}>
              <View style={styles.View_10_156}>
                <Text style={styles.Text_10_156}>Tuesday</Text>
              </View>
              <View style={styles.View_10_157}>
                <Text style={styles.Text_10_157}>10 March 2021</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_10_158}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9506/46bf/9c86eabd7989b463022874f06b2dac80"
            }}
            style={styles.ImageBackground_10_159}
          />
          <View style={styles.View_10_160}>
            <View style={styles.View_10_161}>
              <Text style={styles.Text_10_161}>19º</Text>
            </View>
            <View style={styles.View_10_162}>
              <View style={styles.View_10_163}>
                <Text style={styles.Text_10_163}>Wednesday</Text>
              </View>
              <View style={styles.View_10_164}>
                <Text style={styles.Text_10_164}>11 March 2021</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_10_165}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf81/381f/0979f6ce25f172521c8509a0b8fc5b94"
            }}
            style={styles.ImageBackground_10_166}
          />
          <View style={styles.View_10_167}>
            <View style={styles.View_10_168}>
              <Text style={styles.Text_10_168}>28º</Text>
            </View>
            <View style={styles.View_10_169}>
              <View style={styles.View_10_170}>
                <Text style={styles.Text_10_170}>Thursday</Text>
              </View>
              <View style={styles.View_10_171}>
                <Text style={styles.Text_10_171}>12 March 2021</Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/133e/91e0/37a23ac762f2e4e674d3935bee7ac1b0"
          }}
          style={styles.ImageBackground_10_172}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/133e/91e0/37a23ac762f2e4e674d3935bee7ac1b0"
          }}
          style={styles.ImageBackground_10_173}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/133e/91e0/37a23ac762f2e4e674d3935bee7ac1b0"
          }}
          style={styles.ImageBackground_10_174}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_10_120: {
    width: wp("147.46666666666667%"),
    minWidth: wp("147.46666666666667%"),
    height: hp("74.86338797814209%"),
    minHeight: hp("74.86338797814209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9.6%"),
    top: hp("53.00546448087432%")
  },
  ImageBackground_10_121: {
    width: wp("159.73333333333332%"),
    minWidth: wp("159.73333333333332%"),
    height: hp("81.14754098360656%"),
    minHeight: hp("81.14754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-32.53333333333333%"),
    top: hp("-30.327868852459016%")
  },
  ImageBackground_10_122: {
    width: wp("71.2%"),
    minWidth: wp("71.2%"),
    height: hp("36.20218579234973%"),
    minHeight: hp("36.20218579234973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-21.066666666666666%"),
    top: hp("74.72677595628416%")
  },
  ImageBackground_10_123: {
    width: wp("130.4%"),
    minWidth: wp("130.4%"),
    height: hp("66.53005464480874%"),
    minHeight: hp("66.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("46.58469945355191%")
  },
  View_10_124: {
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
  View_10_125: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_125: {
    color: "rgba(245, 245, 245, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_130: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("17.759562841530055%"),
    backgroundColor: "rgba(255, 255, 255, 0.30000001192092896)",
    overflow: "hidden"
  },
  ImageBackground_10_131: {
    width: wp("35.733333333333334%"),
    height: hp("19.808743169398905%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.533333333333335%")
  },
  View_10_132: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.93333333333333%"),
    top: hp("4.8497267759562845%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_133: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_133: {
    color: "rgba(245, 245, 245, 1)",
    fontSize: 58,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_134: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.792349726775953%")
  },
  Text_10_134: {
    color: "rgba(245, 245, 245, 1)",
    fontSize: 9,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_135: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4.098360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_136: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_138: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_139: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_139: {
    color: "rgba(245, 245, 245, 1)",
    fontSize: 19,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_140: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.066666666666663%"),
    top: hp("4.098360655737705%")
  },
  Text_10_140: {
    color: "rgba(245, 245, 245, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_141: {
    width: wp("77.06666666666668%"),
    minWidth: wp("77.06666666666668%"),
    height: hp("55.60109289617486%"),
    minHeight: hp("55.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("43.71584699453552%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_10_142: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("62.704918032786885%"),
    minHeight: hp("62.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("46.03825136612022%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_10_143: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4.0983606557377%")
  },
  Text_10_143: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_144: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("9.289617486338798%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_145: {
    width: wp("20%"),
    height: hp("10.245901639344263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_146: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.46666666666666%"),
    top: hp("2.5273224043715743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_147: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_147: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 29,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_148: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_149: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_149: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_150: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%")
  },
  Text_10_150: {
    color: "rgba(221, 219, 243, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_151: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("22.26775956284152%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_152: {
    width: wp("20%"),
    height: hp("10.245901639344263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_153: {
    width: wp("42.4%"),
    minWidth: wp("42.4%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("2.5273224043716027%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_154: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_154: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 29,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_155: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_156: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_156: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_157: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.45901639344261%")
  },
  Text_10_157: {
    color: "rgba(221, 219, 243, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_158: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("35.245901639344254%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_159: {
    width: wp("20%"),
    height: hp("10.245901639344263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_160: {
    width: wp("42.4%"),
    minWidth: wp("42.4%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("2.5273224043715885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_161: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_161: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 29,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_162: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_163: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_163: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_164: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%")
  },
  Text_10_164: {
    color: "rgba(221, 219, 243, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_165: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("48.224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_166: {
    width: wp("20%"),
    height: hp("10.245901639344263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_167: {
    width: wp("42.4%"),
    minWidth: wp("42.4%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("2.5273224043715743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_168: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_168: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 29,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_169: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_170: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_170: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_171: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%")
  },
  Text_10_171: {
    color: "rgba(221, 219, 243, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_172: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("7.765494379891806e-15%"),
    minHeight: hp("7.765494379891806e-15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("20.901639344262293%")
  },
  ImageBackground_10_173: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("7.765494379891806e-15%"),
    minHeight: hp("7.765494379891806e-15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("33.87978142076503%")
  },
  ImageBackground_10_174: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("8.523843440428113e-15%"),
    minHeight: hp("8.523843440428113e-15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("46.85792349726776%")
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
