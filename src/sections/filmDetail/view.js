import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';
import { FilmHeader } from '../../widgets';

class FilmDetail extends Component {
    static defaultProps = {
        film: {}
    };

    constructor(props) {
        super(props);

        props.getDetailFilm();
    }

    render() {
        const { film } = this.props;
        
        return (
            <ScrollView style={styles.container}>
                <FilmHeader film={film} />
                <Text>{ 'Sinópsis:' }</Text>
                <Text>{ film.overview }</Text>
                <Text>{ 'Estreno:' }</Text>
                <Text>{ film.release_date }</Text>
            </ScrollView>
        );

        return (
            <View style={styles.container}>
                <FilmHeader film={film} />
                <Text>{ film.overview }</Text>
                <Text>{ film.release_date }</Text>
            </View>
        );
    }
}

export default FilmDetail;
