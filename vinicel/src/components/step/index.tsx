import { View, Text } from "react-native";
import { colors } from "@/styles/colors";

import { s } from "./styles";

export function Step() {
    return (
        <View style={s.container}>
            <View style={s.details} >
            <Text style={s.title}>Título</Text>
            <Text style={s.description}>Descrição ...</Text>
            </View>
        </View>
    )
}