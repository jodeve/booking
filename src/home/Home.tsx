import React from "react";
import { Image, ImageBackground, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Page from "../components/Page";
import Text from "../components/Text";

const Home = () => {
    return (
        <Page>
            <View>

                <ImageBackground
                    source={require("../../assets/images/1.jpg")}
                    style={{
                        width: "100%",
                        height: 200,
                        flex: 1,
                    }}
                >
                    <View
                        style={{
                            position: "absolute",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            width: "100%",
                            height: 200,
                            justifyContent: "flex-end",
                            padding: RFPercentage(2),
                        }}
                    >
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: RFPercentage(2.6),
                                fontFamily: "Poppins-Bold",
                                lineHeight: RFPercentage(3),
                            }}
                        >
                            Modern Apartment
                        </Text>
                        <Text
                            style={{
                                color: "#0096FF",
                            }}
                        >
                            GHC600
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </Page>
    )
}

export default Home;