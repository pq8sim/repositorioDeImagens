import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from "react-native"
import dayjs from 'dayjs'
import api from '../../api/api'

import styles from './styles'

export default function Imagens() {
    const CLIENTE_ID = "vFt3WJN6Xbre0Rgg_Byz_Pyvtm_ek653SoOmjDsDtwo"

    const [imagens, setImagens] = useState([])
    const [pais, setPais] = useState('')

    useEffect(() => {
        api.get(`search/photos?query=${pais}&client_id=${CLIENTE_ID}`).then(response => {
            setImagens(response.data.results);
        })
    })

    return (
        <>
            <TextInput type="text"
                values={pais}
                onChange={e => setPais(e.target.value)}
                style={styles.input}
            />
            {pais !== '' ?
                imagens.map(img => (
                    <View style={styles.card}>
                        <View key={img.id}>
                            <img src={img.urls.full}
                                style={styles.img}
                            />
                            <View style={styles.descri}>
                                <Text>
                                    <Text style={styles.strong}>
                                        Descrição da imagem
                                    </Text>:<br />{img.alt_description}
                                </Text>
                                <Text>
                                    <Text style={styles.strong}>
                                        Descrição
                                    </Text>: {img.description}
                                </Text>
                                <Text>
                                    <Text style={styles.strong}>
                                        Fotografada em
                                    </Text>: {
                                        dayjs(img.created_at).format('DD MMM YYYY')
                                    }
                                </Text>
                                <br />
                                <Text style={styles.strong}>
                                    Dados do fotografo
                                </Text>
                                <Text>
                                    <Text style={styles.strong}>
                                        Nome
                                    </Text>: {img.user.name}
                                </Text>
                                {img.user.twitter_username != null ?
                                    <Text>
                                        <Text style={styles.strong}>
                                            Twitter
                                        </Text>: {img.description}
                                    </Text>
                                    : null}
                            </View>
                        </View>
                    </View>
                ))
                : <Text style={styles.texto}>Pesquise algo.</Text>}
            {(pais !== '' && imagens == 0) ?
                <Text style={styles.texto}>Não encontramos nenhuma imagem. 🥺</Text>
                : null}
        </>
    );
}