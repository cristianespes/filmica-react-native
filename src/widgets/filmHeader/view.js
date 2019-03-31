import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity, SafeAreaView } from 'react-native';
import _ from 'lodash';

import styles from './styles';
import { BASE_URL_IMAGE, BASE_URL_BACKDROP } from '../../config/api'

class FilmHeader extends Component {
    static defaultProps ={
        film: {}
    }
    
    render() {
        const { film } = this.props;
        const poster = film && film.poster_path ? { uri: `${BASE_URL_IMAGE}${film.poster_path}` } : null;
        const backdrop = _.get(film, 'backdrop_path', null) ? { uri: `${BASE_URL_BACKDROP}${_.get(film,'backdrop_path', null)}` } : null;
        return (
            <SafeAreaView style={styles.container}>
                <View style = {styles.backgroundContainer}>
                    <Image source={backdrop} resizeMode = 'cover' style = {styles.backdrop} />
                </View>
                <View style = {styles.overlay}>
                    <Image style = {styles.poster} source = {poster} />
                    <Text style = {styles.title}>{film.title}</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default FilmHeader;