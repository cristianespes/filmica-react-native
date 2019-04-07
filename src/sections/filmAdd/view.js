import React, { Component } from 'react';
import { View, Picker, Text, ScrollView, SafeAreaView, Alert } from 'react-native';
import _ from 'lodash';
import { Actions } from "react-native-router-flux";

import styles from './styles';
import { Input, Button, CameraPicker } from '../../widgets'

class FilmAdd extends Component {

    state = {
        title: '',
        titleError: '',
        overview: '',
        overviewError: '',
        release: '',
        releaseError: '',
        genre: '',
        genreError: '',
        duration: '',
        durationError: '',
        poster: null
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <SafeAreaView>
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
                            multiline={true}
                        />

                        <Input
                            label={'Estreno:'}
                            onChangeText={ release => this.setState({ release })}
                            value={this.state.release}
                            placeholder={'dd/MM/yyyy'}
                            error={this.state.releaseError}
                        />

                        <Input
                            label={'Género:'}
                            onChangeText={ genre => this.setState({ genre })}
                            value={this.state.genre}
                            placeholder={'acción, comedia'}
                            error={this.state.genreError}
                        />

                        <Input
                            label={'Duración:'}
                            onChangeText={ duration => this.setState({ duration })}
                            value={this.state.duration}
                            placeholder={'Minutos'}
                            error={this.state.durationError}
                            keyboardType={'number-pad'}
                        />

                        <View style={{ margin: 20 }}>
                            <Text style={styles.label}>{'Póster'}</Text>
                            <CameraPicker
                                value={this.state.image}
                                onChange={ image => this.setState({ image }) }
                                label={'Seleccionar póster'}
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
            </ScrollView>
        );
    }

    _onSubmit = () => {
        const { title, overview, release, genre, duration } = this.state;
        if (!title || !overview || !release || !genre || !duration) {

            const titleError = title ? '' : "Campo obligatorio";
            const overviewError = overview ? '' : "Campo obligatorio";
            const releaseError = release ? '' : "Campo obligatorio";
            const genreError = genre ? '' : "Campo obligatorio";
            const durationError = duration ? '' : "Campo obligatorio";

            this.setState({ titleError, overviewError, releaseError, genreError, durationError })

            return
        }
        
        this.setState({ titleError: '', overviewError: '', releaseError: '', genreError: '', durationError: '' });

        // const film = {
        //     id: 123456789,
        //     title,
        //     overview,
        //     release_date: release/*,
        //     poster_path: _.has(this.state, 'image')
        //         ? 'data:image/jpeg;base64,' + this.state.image.data
        //         : null*/,
        //     poster_path: "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg"
        // }

        // this.props.addFilm(film);

        Actions.pop();
        Alert.alert('Película recibida', '¡Gracias por tu aportación!');
    }
}

export default FilmAdd;
