import { StyleSheet } from "react-native"; 
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create ({
    logo: {
        width: 48,
        height: 48,
        marginBottom: 24,
        marginTop: 24,
    },
    title: {
        color: colors.gray[600],
        fontSize: 24,
        fontFamily: "bold",
    
    },
    subtitle: {
        color: colors.gray[500],
        fontSize: 16,
        fontFamily: "regular",
        marginTop: 12,
    },
    })