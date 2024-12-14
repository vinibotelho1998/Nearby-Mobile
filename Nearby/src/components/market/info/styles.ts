import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export  const s = StyleSheet.create ({
    container: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
    text: {
        color: colors.gray[500],
        fontSize: 14,
        fontFamily: fontFamily.regular,
        lineHeight: 22.4,
        flex: 1,
    },
})