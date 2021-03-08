import React, { useEffect, useState } from "react"
import { StyleSheet,View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux"
import { fetchBoard } from "../store/actions/sugokuAction"
import VBoard from '../components/VBoard'

export const Board = () => {
    const {board} = useSelector((state) => state)
    const [boards, setBoards] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBoard())
        console.log(board, "<<<< sdad");
        if (board) {
            setBoards(board.board);
            console.log(boards, "<<<<< boards dalam use effect");
        }
    }, [])
    
    console.log(boards, "<<< boards di board.js");
    return (
        <View>
            <Text style={styles.Font}>SugoKu</Text>
            <View style={styles.Container}>
                {
                    boards?.map((el, i) => {
                        return <VBoard key={i} board={el} i={i} boards={boards} setBoards={setBoards}></VBoard>;
                    })
                }
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    Container: {
        flex: 0.9,
        flexDirection: "row",
    },
    Font: {
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        textShadowColor: "red",
        fontSize: 45,
        marginBottom: 45,
        marginTop: 100,
    },
});

export default Board