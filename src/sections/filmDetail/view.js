import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, Linking } from 'react-native';
import _ from 'lodash';

import styles from './styles';
import { FilmHeader, Button } from '../../widgets';
import { LANGUAGE } from '../../config/api';
import * as colors from '../../commons/colors';

class FilmDetail extends Component {
    static defaultProps = {
        film: {}
    };

    constructor(props) {
        super(props);

        props.getDetailFilm();
    }

    render() {
        const { film, favList } = this.props;
        const genres = film.genres ? this._getGenres(film.genres) : '';
        const producers = film.production_companies ? this._getProducers(film.production_companies) : '';
        const release_date = film.release_date ? this._formatterDate(film.release_date) : '';
        return (
            <ScrollView style={styles.container}>
                <FilmHeader film={film} />
                <SafeAreaView>
                    {
                        film.overview ?
                        <View>
                            <Text style={styles.section}>{ 'Sinópsis:' }</Text>
                            <Text style={styles.content}>{ film.overview }</Text>
                        </View>
                        : null
                    }
                    {
                        film.release_date ?
                        <View>
                            <Text style={styles.section}>{ 'Estreno:' }</Text>
                            <Text style={styles.content}>{ release_date }</Text>
                        </View>
                        : null
                    }
                    {
                        film.genres ?
                        <View>
                            <Text style={styles.section}>{ 'Género:' }</Text>
                            <Text style={styles.content}>{ genres }</Text>
                        </View>
                        : null
                    }
                    {
                        film.status ?
                        <View>
                            <Text style={styles.section}>{ 'Situación:' }</Text>
                            <Text style={styles.content}>{ film.status }</Text>
                        </View>
                        : null
                    }
                    {
                        film.runtime ?
                        <View>
                            <Text style={styles.section}>{ 'Duración:' }</Text>
                            <Text style={styles.content}>{ `${film.runtime} min`}</Text>
                        </View>
                        : null
                    }
                    {
                        film.homepage ? 
                        <View>
                            <Text style={styles.section}>{ 'Web:' }</Text>
                            <Text style={[styles.content, { color: colors.blueLink }]} onPress={ this._goToURL }>{ film.homepage }</Text>
                        </View>
                        : null
                    }
                    {
                        film.tagline ?
                        <View>
                            <Text style={styles.section}>{ 'Cabecera de la película:' }</Text>
                            <Text style={styles.content}>{ film.tagline }</Text>
                        </View>
                        : null
                    }
                    <Text style={styles.section}>{ 'Productores:' }</Text>
                    <Text style={styles.content}>{ producers }</Text>
                    <Text style={styles.section}>{ 'Idioma original:' }</Text>
                    <Text style={styles.content}>{ film.original_language }</Text>
                    {
                        film.vote_average > 0 ?
                        <View>
                            <Text style={styles.section}>{ 'Putuación media:' }</Text>
                            <Text style={styles.content}>{ film.vote_average }</Text>
                        </View>
                        : null
                    }
                    {
                        !_.find(favList, film) &&
                        <Button
                            label={'Añadir a favoritos'}
                            onPress={this._saveFavorite}
                            buttonStyle={{ margin: 20 }}
                        />
                    }
                    {
                        _.find(favList, film) &&
                        <Button
                            label={'Eliminar de favoritos'}
                            onPress={this._removeFavorite}
                            buttonStyle={{ margin: 20 }}
                        />
                    }
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

    _formatterDate = date => {
        try {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const release_date = new Date(date)
            release_date.toLocaleDateString(LANGUAGE, options)
            return release_date.toLocaleDateString("es", options)
        } catch (e) {
            return date
        }
    }

    _goToURL = () => {
        const { film } = this.props;

        if (film.homepage) {
            Linking.canOpenURL(film.homepage).then(supported => {
                if (supported) {
                  Linking.openURL(film.homepage);
                } else {
                  console.log('Don\'t know how to open URI: ' + this.props.url);
                }
              });
        }
      }

    _saveFavorite = () => {
        const { film } = this.props;
        this.props.saveFavorite(film)
    }

    _removeFavorite = () => {
        const { film } = this.props;
        this.props.removeFavoriteFilm(film)
    }
}

export default FilmDetail;
