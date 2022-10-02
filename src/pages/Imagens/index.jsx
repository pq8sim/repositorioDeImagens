import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from "react-native"
import dayjs from 'dayjs'

import api from '../../api/api'

import styles from './styles'

export default function Imagens() {
    // variável publica, para poder acessar a API
    const CLIENTE_ID = "vFt3WJN6Xbre0Rgg_Byz_Pyvtm_ek653SoOmjDsDtwo"

    const [imagens, setImagens] = useState([])
    const [pesquisa, setPesquisa] = useState('')

    // o caminho, com os dados, que desejo estar buscando e a chave de validação no final
    useEffect(() => {
        api.get(`search/photos?query=${pesquisa}&client_id=${CLIENTE_ID}`).then(response => {
            setImagens(response.data.results);
        })
    })

    return (
        <>
        {/* input para estar recebendo o texto de pesquisa */}
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
                                {/* validações feitas para não exebir se for null */}
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
                // texto mostrado se não ouver pesquisa
                : <Text style={styles.texto}>Pesquise algo.</Text>
            }
            {/* mostrar uma mensagem se não char o que foi pesquisado */}
            {(pesquisa !== '' && imagens == 0) ?
                <Text style={styles.texto}>Não encontramos nenhuma imagem. 🥺</Text>
                : null}
        </>
    );
}