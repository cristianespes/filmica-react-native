import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class FilmDetail extends Component {
    static defaultProps = {
        film: {}
    };

    constructor(props) {
        super(props);

        this.props.getDetailFilm();
    }

    render() {
        console.log('detail this.props: ', this.props);
        const { film } = this.props;
        return (
            <View style={styles.container}>
                <Text>{ film.title }</Text>
                <Text>{ film.overview }</Text>
                <Text>{ film.release_date }</Text>
            </View>
        );
    }
}

export default FilmDetail;
