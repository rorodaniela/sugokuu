import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Provider} from 'react-redux'
import Board from './src/pages/Board';
import store from './src/store/index'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Board/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFDBC3",
        alignItems: "center",
        justifyContent: "center",
    },
});
