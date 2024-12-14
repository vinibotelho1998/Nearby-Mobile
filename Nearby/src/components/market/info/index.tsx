import { View, Text } from "react-native";
import {IconProps, Icon } from "@tabler/icons-react-native";
import { s } from "./styles";
import { colors } from "@/styles/theme";

type Props = {
    icon: React.ComponentType<IconProps>;
    description: string;
}

export function Info({ icon: Icon, description }: Props)
{
    return (
        <View style={s.container}>
            <Icon size={16} color={colors.gray[400]} />
            <Text style={s.text}>{description}</Text>
        </View>
    );
}