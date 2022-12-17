import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export interface TestModalProps {
    onClose: () => void;
}

export const TestModal = ({onClose}: TestModalProps) => {
    return (
        <View style={styles.modalContainer}>
            <Text style={styles.text}>Hello, this is test modal for Joker!</Text>
            <Button
                onPress={onClose}
                title='Close modal'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color:'white',
        textAlign:'center',
    }
})