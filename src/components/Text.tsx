import React, { FC } from "react";
import { StyleSheet, Text as T, TextProps } from "react-native";

interface ITextProps extends TextProps {
}

const Text: FC<ITextProps> = ({children}) => {
    return(
        <T
            style={[
                styles.text,
            ]}
        >
            {
                children
            }
        </T>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#000",
        fontFamily: "Poppins-Regular"
    }
})

export default Text;