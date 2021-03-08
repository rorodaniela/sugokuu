import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
// import { useSelector } from "react-redux";

export const VBoard = (props) => {

    const handleOnChange = (value, j) => {
        const newBoard = props.boards
        newBoard[props.i][j] = value
        props.setBoards(newBoard)
        console.log(newBoard, "<< baru");
    }

    return (
        <View style={styles.Container}>
            {props.board.map((el, j) => {
                if (el === 0) {
                    return <TextInput onChangeText={(value) => handleOnChange(value, j)} key={j} keyboardType="numeric" style={styles.Box1} ></TextInput>;
                } else {
                    return (
                        <View key={j} style={styles.Box2}>
                            <Text>{el}</Text>
                        </View>
                    );
                }
            })}
        </View>
    );
};
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: "column",
    },
    Box1: {
        backgroundColor: "#FEF3DE",
        width: 20,
        height: 20,
        borderColor: "white",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    Box2: {
        backgroundColor: "#FF6961",
        width: 20,
        height: 20,
        borderColor: "white",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default VBoard;
