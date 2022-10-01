import React, { useEffect, useState } from 'react'
import { View, Text } from "react-native"
import api from '../api/api'

export default function Home() {
    const CLIENT_ID = "vFt3WJN6Xbre0Rgg_Byz_Pyvtm_ek653SoOmjDsDtwo"

    const [imagens, setImagens] = useState([])
    const [pais, setPais] = useState('')

    useEffect(() => {
        api.get(`search/photos?query=${pais}&client_id=${CLIENT_ID}`).then(response => {
            setImagens(response.data.results);
        })
    })

    return (
        <>
            <form>
                <input type="text"
                    placeholder="Insira o Pais"
                    values={pais}
                    onChange={e => setPais(e.target.value)}
                />
                <button >Trocar pais</button>
            </form>
            {pais !== '' ?
                imagens.map(img => (
                    <View key={img.id}>
                        <Text>{img.id}</Text>
                        <img src={img.urls.thumb} />
                        <Text>{img.user.bio}</Text>
                    </View>
                ))
                : <Text>Pesquise por um Pais!</Text>}
        </>
    );
}