import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import {fetchBoard} from '../store/actions/sugokuAction'

const Home = (props) => {
    const [player, setPlayer] = useState('')
    const dispatch = useDispatch()

    const handleDifficulty = (level) => {
        props.navigation.navigate('Game', {difficulty: level, player: player})
        dispatch(fetchBoard(level))
    }
    return (
        <View style={styles.Container}>
            <Text style={styles.Font}>SugoKu</Text>
            <View>
                <TextInput onChangeText={(text) => setPlayer(text)}
                    style={styles.Input}
                    placeholder="Please input your nick name"
                />
            </View>

            <Text style={styles.Font3}>Difficulty : </Text>
            <View style={styles.Row}>
                <View style={styles.ButtonLevel}>
                    <Button
                        title="Go to Game"
                        onPress={() => handleDifficulty("easy")}
                        title="EASY"
                        color="black"
                    />
                </View>
                <View style={styles.ButtonLevel}>
                    <Button
                        title="Go to Game"
                        onPress={() => handleDifficulty("medium")}
                        title="MEDIUM"
                        color="black"
                    />
                </View>
                <View style={styles.ButtonLevel}>
                    <Button
                        title="Go to Game"
                        onPress={() => handleDifficulty("hard")}
                        title="HARD"
                        color="black"
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFDBC3",
        alignItems: "center",
        justifyContent: "center",
    },
    Font: {
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        fontSize: 45,
        marginBottom: 45,
    },
    Font2: {
        textAlign: "center",
        color: "black",
        fontWeight: "normal",
        fontSize: 18,
        marginBottom: 15,
    },
    Font3: {
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 20
    },
    Input: {
        color: "black",
        textAlign: "center",
        fontWeight: "normal",
        fontSize: 17,
        backgroundColor: "white",
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 30
    },
    ButtonLevel: {
        backgroundColor: "white",
        borderWidth: 1,
        marginTop: 20,
        marginRight: 20,
        borderRadius: 5
        
    },
    Row: {
        flexDirection: 'row'
    }
});
export default Home