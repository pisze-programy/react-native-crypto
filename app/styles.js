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
    height: 50,
    alignItems: 'center',
    width,
    backgroundColor: '#1da075'
  },
});
