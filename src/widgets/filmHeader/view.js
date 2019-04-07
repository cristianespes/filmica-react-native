import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity, SafeAreaView } from 'react-native';
import _ from 'lodash';
import ImageView from 'react-native-image-view';

import styles from './styles';
import { BASE_URL_IMAGE, BASE_URL_BACKDROP } from '../../config/api'

class FilmHeader extends Component {
    static defaultProps ={
        film: {}
    }

    state = { isImageViewVisible: false }
    
    render() {
        const { isImageViewVisible } = this.state;
        const { film } = this.props;
        const poster = film && film.poster_path ? { uri: `${BASE_URL_IMAGE}${film.poster_path}` } : null;
        const backdrop = _.has(film, 'backdrop_path') ? { uri: `${BASE_URL_BACKDROP}${_.get(film,'backdrop_path', null)}` } : null;
        const imageBackdrop = [
            {
                source: poster,
                title: 'Póster'
            },
            {
                source: backdrop,
                title: 'Backdrop'
            }
        ];
        return (
            <SafeAreaView>
                <TouchableOpacity
                        style={styles.container}
                        onPress={() => {
                            this.setState({ isImageViewVisible: true });
                        }}>
                    <View style = {styles.backgroundContainer}>
                            <Image source={backdrop} resizeMode='cover' style = {styles.backdrop} />
                    </View>
                    <View style = {styles.overlay}>
                        <Image style = {styles.poster} source = {poster} />
                        <Text onPress={ () => alert('hola')} style= {styles.title}>{film.title}</Text>
                    </View>
                    <ImageView
                        glideAlways
                        images={imageBackdrop}
                        animationType="fade"
                        isVisible={isImageViewVisible}
                        renderFooter={this._renderFooter}
                        onClose={() => this.setState({isImageViewVisible: false})}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    _renderFooter({title}) {
        return (
            <View style={styles.footer}>
                <Text style={styles.footerText}>{title}</Text>
            </View>
        );
    }
}

export default FilmHeader;