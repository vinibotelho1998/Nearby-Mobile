import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create ({
    container: {
        backgroundColor: colors.gray[100],
    },
    content: {
        gap: 8,
        paddingHorizontal: 24,
    },
    indicator: {
        width: 80,
        height: 4,
        backgroundColor: colors.gray[300],

    },
    title: {
        color: colors.gray[600],
        fontSize: 15,
        fontFamily: fontFamily.regular,
        marginBottom: 16,
    },
})