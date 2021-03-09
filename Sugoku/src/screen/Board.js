import React, { useEffect } from "react"
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux"
import { fetchBoard, fetchSolve, fetchValidate, insertPlayer } from "../store/actions/sugokuAction"
import VBoard from '../components/VBoard'

const windowWidth = Dimensions.get("window").width;
export const Board = (props) => {
    const { difficulty, player } = props.route.params;
    const {board,  status} = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBoard(difficulty))

    }, [])

    const handleValidate = () => {
        dispatch(fetchValidate());
        if (status === 'solved') {
            alert('CONGRATULATIONS!! You are amazing!')
            dispatch(insertPlayer(player))
            props.navigation.push("Finish");
        }else{
            alert('Not Solved Yet')
        }
    }

    const handleSolve = () => {
        dispatch(fetchSolve());
        // alert("GAME OVER!");
        // props.navigation.push("Home");
    }
    
    return (
        <View style={styles.container1}>
            {/* <View style={{ backgroundColor: "white", alignItems: "center", width: windowWidth/5, marginLeft: 20, marginTop: 30, borderWidth: 1, borderRadius:5 }}>
                <Button title="Back" color="black" />
            </View> */}
            <View style={{ marginLeft: 20, marginTop: 20, fontWeight: "bold" }}>
                <Text>Player : {player}</Text>
                <Text>Level : {difficulty}</Text>
            </View>
            <Text style={styles.Font}>SugoKu</Text>
            <View style={styles.container}>
                <View style={styles.Row}>
                    {board?.map((el, i) => {
                        return (
                            <VBoard
                                key={i}
                                board={el}
                                i={i}
                                boards={board.board}
                            ></VBoard>
                        );
                    })}
                </View>
                <View style={styles.ButtonLevel}>
                    <Button
                        onPress={handleValidate}
                        title="Validate"
                        color="black"
                    />
                </View>
                <View style={styles.ButtonLevel}>
                    <Button
                        onPress={handleSolve}
                        title="Give Up"
                        color="black"
                    />
                </View>
            </View>
        </View>
    );

}
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
        marginBottom: 30,
    },
    ButtonLevel: {
        backgroundColor: "white",
        borderWidth: 1,
        marginTop: 20,
        marginRight: 20,
        borderRadius: 5,
        width: windowWidth/3
    },
});

export default Board