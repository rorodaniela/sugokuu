import React from "react";
import { Text, View, StyleSheet, Dimensions, Button } from "react-native";
import { useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;

const Finish = (props) => {

    const handlePlayAgain = () => {
        props.navigation.push("Home");
    };

    const {winner} = useSelector((state) => state)
    return (
        <View style={styles.container}>
            <Text
                style={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 45,
                    marginBottom: 45,
                    
                }}
            >
                Leader Board
            </Text>
            {
                winner.length > 0 ? (
                    winner.map((el, idx) => {
                        return (
                            <View
                                style={{borderWidth:1, borderRadius:3, borderColor: 'black', backgroundColor: "#F9F7E8", width:200, height: 35, justifyContent: 'center' }}
                            >
                                <Text style={{textAlign: 'center', fontSize: 20}}>{el}</Text>
                            </View>
                        );
                    })
            ) : (
                <Text>No one win this game yet :(</Text>
            )
            }
            <View style={styles.ButtonLevel}>
                <Button
                    onPress={handlePlayAgain}
                    title="Play Again"
                    color="black"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#FFDBC3",
    },
    ButtonLevel: {
        backgroundColor: "white",
        borderWidth: 1,
        marginTop: 50,
        borderRadius: 5,
        width: windowWidth / 3,
    },
});
export default Finish
