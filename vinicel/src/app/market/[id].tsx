import { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import { useLocalSearchParams, router , Redirect } from "expo-router"
import { api } from "@/services/api"
import { Loading } from "@/components/loading";
import { Cover } from "@/components/market/cover";
import { PropsDetails, Details } from "@/components/market/details";

type DataProps = PropsDetails & {
    cover: string
    
}

export default function Market() {
    const [data, setData] = useState<DataProps>()
    const [isloading, setIsLoading] = useState(true)
    const params = useLocalSearchParams < {id: string} >();

    async function fetchMarket() {
        try {
            const { data } = await api.get(`/markets/${params.id}`)
            setData(data)
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Não foi possivel carregar os dados", [
                {text: "OK", onPress: () => router.back() },
        ])
        }
    }

    useEffect(() => {
        fetchMarket()
    }, [params.id])

    if (isloading) {
        return <Loading />
    }

    if (!data) {
        return <Redirect href="/home" />
    }

    return <View style={{ flex: 1  }}>;

    <Cover uri={data.cover} />
    <Details data={data} />
    


    </View>;
}