import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#00273b',
  },

  mainHeaderContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    width,
    backgroundColor: '#1da075'
  },

  layoutContainer: {
    position: "absolute",
    top: 50,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    height: (height - 50 - 20),
  }
});

// dark theme background #00273b
// header background #1da075
// header active element #188663
// red #f84d55
// blue #008790
// yellow #e6d859