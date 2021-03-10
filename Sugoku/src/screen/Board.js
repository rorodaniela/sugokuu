import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VBoard from "../components/VBoard";
import {
    fetchBoard,
    fetchSolve,
    fetchValidate,
    insertPlayer,
} from "../store/actions/sugokuAction";
import {
    StyleSheet,
    View,
    Text,
    Button,
    Dimensions,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    ActivityIndicator,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
export const Board = (props) => {
    const { difficulty, player } = props.route.params;
    const { board, status, start, loading } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBoard(difficulty));
    }, []);

    const handleValidate = () => {
        dispatch(fetchValidate());
        if (status === "solved") {
            alert("CONGRATULATIONS!! You are win!");
            dispatch(insertPlayer(player));
            props.navigation.push("Finish");
        } else {
            alert("Not Solved Yet");
        }
    };

    const handleSolve = () => {
        dispatch(fetchSolve());
        alert("GAME OVER!");
    };

    const handlePlayAgain = () => {
        props.navigation.push("Home");
    };

    const handleLeaderBoard = () => {
        props.navigation.push("Finish");
    };

    console.log(loading, "<<<");
    return (
        <KeyboardAvoidingView style={styles.container1}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    {/* <View style={{ backgroundColor: "white", alignItems: "center", width: windowWidth/5, marginLeft: 20, marginTop: 30, borderWidth: 1, borderRadius:5 }}>
                        <Button title="Back" color="black" />
                    </View> */}
                    <Text style={styles.Font}>SugoKu</Text>

                    <View
                        style={{
                            margin: 20,
                            marginTop: 10,
                            fontWeight: "bold",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style>Player : {player}</Text>
                        <Text>Level : {difficulty}</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.Row}>
                            {loading === false ? (
                                board.map((el, i) => {
                                    return (
                                        <VBoard
                                            key={i}
                                            board={el}
                                            i={i}
                                            boards={board.board}
                                        ></VBoard>
                                    );
                                })
                            ) : (
                                <ActivityIndicator size="large" />
                            )}
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}
                    >
                        {start === false ? (
                            <>
                                <View style={styles.ButtonLevel}>
                                    <Button
                                        onPress={handlePlayAgain}
                                        title="Play Again"
                                        color="black"
                                    />
                                </View>
                                <View style={styles.ButtonLevel}>
                                    <Button
                                        onPress={handleLeaderBoard}
                                        title="LeaderBoard"
                                        color="black"
                                    />
                                </View>
                            </>
                        ) : (
                            <>
                                <View style={styles.ButtonLevel}>
                                    <Button
                                        onPress={handleValidate}
                                        title="Check Answer"
                                        color="black"
                                        disabled={start === true ? false : true}
                                    />
                                </View>
                                <View style={styles.ButtonLevel}>
                                    <Button
                                        onPress={handleSolve}
                                        title="Give Up"
                                        color="black"
                                        disabled={start === true ? false : true}
                                    />
                                </View>
                            </>
                        )}
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}
                    ></View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    container1: {
        flex: 1,
        backgroundColor: "#FFDBC3",
    },
    Row: {
        flexDirection: "column",
    },
    Font: {
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        textShadowColor: "red",
        fontSize: 45,
        marginTop: 10,
    },
    ButtonLevel: {
        backgroundColor: "white",
        borderWidth: 1,
        marginTop: 30,
        borderRadius: 5,
        width: windowWidth / 3,
    },
});

export default Board;
