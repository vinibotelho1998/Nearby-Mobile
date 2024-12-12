import { View, Text } from "react-native";
import { Alert } from "react-native";
import { api } from "@/services/api";

export default function Home() {
    async function fetchCategories() {
        try {
            const { data } = await api.get("/categories");
            console.log(data);         
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Não foi possível carregar as categorias.");
        }
    }




    return (
        <View style={{ flex: 1, }}>
        </View>
    ); 

}

