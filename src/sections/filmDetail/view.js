import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

import styles from './styles';
import { FilmHeader, Button } from '../../widgets';

class FilmDetail extends Component {
    static defaultProps = {
        film: {},
        saveFavorite: () => {}
    };

    constructor(props) {
        super(props);

        props.getDetailFilm();
    }

    render() {
        const { film, saveFavorite } = this.props;
        const genres = film.genres ? this._getGenres(film.genres) : '';
        const producers = film.genres ? this._getProducers(film.production_companies) : '';
        return (
            <ScrollView style={styles.container}>
                <FilmHeader film={film} />
                <SafeAreaView>
                    <Text style={styles.section}>{ 'Sinópsis:' }</Text>
                    <Text style={styles.content}>{ film.overview }</Text>
                    <Text style={styles.section}>{ 'Estreno:' }</Text>
                    <Text style={styles.content}>{ film.release_date }</Text>
                    <Text style={styles.section}>{ 'Género:' }</Text>
                    <Text style={styles.content}>{ genres }</Text>
                    <Text style={styles.section}>{ 'Situación:' }</Text>
                    <Text style={styles.content}>{ film.status }</Text>
                    <Text style={styles.section}>{ 'Duración:' }</Text>
                    <Text style={styles.content}>{ `${film.runtime} min`}</Text>
                    {
                        film.tagline ?
                        <View>
                            <Text style={styles.section}>{ 'Web:' }</Text>
                            <Text style={styles.content}>{ film.homepage }</Text>
                        </View>
                        :
                        null
                    }
                    {
                        film.tagline ?
                        <View>
                            <Text style={styles.section}>{ 'Cabecera de la película:' }</Text>
                            <Text style={styles.content}>{ film.tagline }</Text>
                        </View>
                        :
                        null
                    }
                    <Text style={styles.section}>{ 'Productores:' }</Text>
                    <Text style={styles.content}>{ producers }</Text>
                    <Text style={styles.section}>{ 'Idioma original:' }</Text>
                    <Text style={styles.content}>{ film.original_language }</Text>
                    <Text style={styles.section}>{ 'Putuación media:' }</Text>
                    <Text style={styles.content}>{ film.vote_average }</Text>
                    <Button
                        label={'Añadir a favoritos'}
                        onPress={this._saveFavorite}
                        buttonStyle={{ margin: 20 }}
                    />
                    <Button
                        label={'Limpiar'}
                        onPress={this._clear}
                        buttonStyle={{ margin: 20 }}
                    />
                </SafeAreaView>
            </ScrollView>
        );
    }

    _getGenres = genresArr => {
        var results = '';
        
        for (var i = 0; i < genresArr.length; i++) {
            if (i == 0) 
                results = `${genresArr[i].name}`
             else 
                results = `${results} | ${genresArr[i].name}`
        }

        return results;
    }
    _getProducers = producersArr => {
        var results = '';
        
        for (var i = 0; i < producersArr.length; i++) {
            if (i == 0) 
                results = `${producersArr[i].name}`
             else 
                results = `${results} | ${producersArr[i].name}`
        }

        return results;
    }

    _saveFavorite = () => {
        const { film } = this.props;
        this.props.saveFavorite(film)
    }

    _clear = () => {
        AsyncStorage.clear()
    }
}

export default FilmDetail;
