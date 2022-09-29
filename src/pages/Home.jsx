import React, { useEffect, useState } from 'react'
import { View, Text } from "react-native"
import api from '../api/api'

export default function Home() {
    const [imagens, setImagens] = useState([]);
    const CLIENT_ID = "vFt3WJN6Xbre0Rgg_Byz_Pyvtm_ek653SoOmjDsDtwo";

    useEffect(() => {
        api.get(`photos?client_id=${CLIENT_ID}`).then(response => {
            // search/photos?query=brazil :c
            setImagens(response.data);
        })
    })

    return (
        <>
            {imagens.map(img => (
                <View key={img.id}>
                    <Text>{img.id}</Text>
                    <img src={img.urls.thumb} />
                    <Text>{img.user.bio}</Text>
                </View>
            ))}
        </>
    );
}