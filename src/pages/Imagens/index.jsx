import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from "react-native"
import dayjs from 'dayjs'

import api from '../../api/api'

import styles from './styles'

export default function Imagens() {
    const CLIENTE_ID = "vFt3WJN6Xbre0Rgg_Byz_Pyvtm_ek653SoOmjDsDtwo"

    const [imagens, setImagens] = useState([])
    const [pesquisa, setPesquisa] = useState('')

    useEffect(() => {
        api.get(`search/photos?query=${pesquisa}&client_id=${CLIENTE_ID}`).then(response => {
            setImagens(response.data.results);
        })
    })

    return (
        <>
            <TextInput type="text"
                values={pesquisa}
                onChange={e => setPesquisa(e.target.value)}
                style={styles.input}
            />
            {pesquisa !== '' ?
                imagens.map(img => (
                    <View style={styles.card}>
                        <View key={img.id}>
                            <img src={img.urls.full}
                                style={styles.img}
                            />
                            <View style={styles.descri}>
                                {img.alt_description != null ?
                                    <Text>
                                        <Text style={styles.strong}>
                                            Descrição da imagem
                                        </Text>:<br />{img.alt_description}
                                    </Text>
                                    : null
                                }
                                {img.description != null ?
                                    <Text>
                                        <Text style={styles.strong}>
                                            Descrição
                                        </Text>: {img.description}
                                    </Text>
                                    : null
                                }
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
                                {img.user.name != null ?
                                    <Text>
                                        <Text style={styles.strong}>
                                            Nome
                                        </Text>: {img.user.name}
                                    </Text>
                                    : null
                                }
                                {img.user.twitter_username != null ?
                                    <Text>
                                        <Text style={styles.strong}>
                                            Twitter
                                        </Text>: {img.user.twitter_username}
                                    </Text>
                                    : null
                                }
                            </View>
                        </View>
                    </View>
                ))
                : <Text style={styles.texto}>Pesquise algo.</Text>
            }
            {(pesquisa !== '' && imagens == 0) ?
                <Text style={styles.texto}>Não encontramos nenhuma imagem. 🥺</Text>
                : null}
        </>
    );
}