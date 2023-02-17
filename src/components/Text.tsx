import React, { FC } from "react";
import { StyleSheet, Text as T, TextProps } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

interface ITextProps extends TextProps {
}

const Text: FC<ITextProps> = ({children, style}) => {
    return(
        <T
            style={[
                styles.text,
                style,
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
        fontFamily: "Poppins-Regular",
        fontSize: RFPercentage(2),
        lineHeight: RFPercentage(2.3),
    }
})

export default Text;