import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ThemeColors from './assets/theme/ThemeColors'

//import components
import SingleProduct from './components/SingleProduct';
import ManageProduct from './components/ManageProduct'

export default function App() {
  return (
    <View style={styles.container}>
      <SingleProduct />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: ThemeColors.secondaryColor,
    padding: 20,
  }
});
