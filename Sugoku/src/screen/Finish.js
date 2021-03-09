import React from "react";
import { Text, View, StyleSheet, Dimensions, Button } from "react-native";
import { useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;

const Finish = () => {
    const {player} = useSelector((state) => state)
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
            {player?.map((el) => {
                return (
                    <Text
                        style={{
                            textAlign: "center",
                            color: "black",
                            fontWeight: "bold",
                            fontSize: 25,
                            marginBottom: 45,
                        }}
                    >
                        {el}
                    </Text>
                );
            })}
            <View style={styles.ButtonLevel}>
                <Button title="Back To Home" color="black" />
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
        marginTop: 20,
        marginRight: 20,
        borderRadius: 5,
        width: windowWidth / 8,
    },
});
export default Finish
