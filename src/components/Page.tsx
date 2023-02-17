import React, { FC } from "react";
import { View, ViewProps } from "react-native";

interface IPageProps extends ViewProps {

}

const Page: FC<IPageProps> = ({children}) => {
    return(
        <View
            style={{
                backgroundColor: "#000",
                flex: 1,
            }}
        >
            {children}
        </View>
    )
}

export default Page;