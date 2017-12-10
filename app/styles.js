import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  mainHeaderContainer: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    width,
    backgroundColor: '#1EAAF1'
  },
});
