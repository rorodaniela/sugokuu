import React from "react";
import { StyleSheet, View, Text, TextInput, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateBoard } from "../store/actions/sugokuAction";


const windowWidth = Dimensions.get("window").width;
export const VBoard = (props) => {
    const {newBoard} = useSelector((state) => state)
    const dispatch = useDispatch()

    const handleOnChange = (value, j) => {
        let answer = JSON.parse(JSON.stringify(newBoard))
        answer[props.i][j] = Number(value)
        dispatch(updateBoard(answer));
    }

    return (
        <View style={styles.Container}>
            {props.board.map((el, j) => {
                if (el === 0) {
                    return <TextInput onChangeText={(value) => handleOnChange(value, j)} key={j} maxLength={1} keyboardType="numeric" style={styles.Box1} ></TextInput>;
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
        flexDirection: "row",
    },
    Box1: {
        backgroundColor: "#FEF3DE",
        width: (windowWidth - 80) / 9,
        height: (windowWidth - 80) / 9,
        borderColor: "white",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: 3,
    },
    Box2: {
        backgroundColor: "#FF6961",
        width: (windowWidth - 80) / 9,
        height: (windowWidth - 80) / 9,
        borderColor: "white",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
    },
});

export default VBoard;
