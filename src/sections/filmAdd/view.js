import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, SafeAreaView } from 'react-native';
import _ from 'lodash';

import styles from './styles';
import { Input, Button, CameraPicker } from '../../widgets'

class FilmAdd extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            titleError: '',
            overview: '',
            overviewError: '',
            release: '',
            releaseError: '',
            poster: null
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Input
                        label={'Título:'}
                        onChangeText={ title => this.setState({ title })}
                        value={this.state.title}
                        error={this.state.titleError}
                    />

                    <Input
                        label={'Sinópsis:'}
                        onChangeText={ overview => this.setState({ overview })}
                        value={this.state.overview}
                        error={this.state.overviewError}
                    />

                    <Input
                        label={'Estreno:'}
                        onChangeText={ release => this.setState({ release })}
                        value={this.state.release}
                        placeholder={'yyyy/MM/dd'}
                        error={this.state.releaseError}
                    />

                    <View style={{ margin: 20 }}>
                        <Text style={styles.label}>{'Póster'}</Text>
                        <CameraPicker
                            value={this.state.image}
                            onChange={ image => this.setState({ image }) }
                        />
                    </View>

                </View>

                <Button
                    label={'Añadir'}
                    onPress={this._onSubmit}
                    buttonStyle={{ margin: 20 }}
                    isFetching={this.props.isFetching}
                />
            </SafeAreaView>
        );
    }

    _onSubmit = () => {
        console.log('Inicia onSubmit');

        const { title, overview, release } = this.state;
        if (!title || !overview || !release) {

            const titleError = title ? '' : "Campo obligatorio";
            const overviewError = overview ? '' : "Campo obligatorio";
            const releaseError = release ? '' : "Campo obligatorio";

            this.setState({ titleError, overviewError, releaseError })

            return
        }
        
        this.setState({ titleError: '', overviewError: '', releaseError: '' });

        const film = {
            id: 123456789,
            title,
            overview,
            release_date: release/*,
            poster_path: _.has(this.state, 'image')
                ? 'data:image/jpeg;base64,' + this.state.image.data
                : null*/,
            poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg"
        }

        this.props.addFilm(film);
    }
}

export default FilmAdd;
