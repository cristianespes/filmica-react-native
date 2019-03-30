import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import { Stack, Router, Scene } from 'react-native-router-flux';

import { Films, FilmDetail } from './sections';
import { configureAxios } from './webservice';
import * as colors from './commons/colors';


export default class App extends Component {

  constructor(props) {
    super(props);

    configureAxios(); // Configuración inicial para la api
    StatusBar.setBarStyle('light-content', false);
  }

  render() {
    return (
      <Router>
        <Stack key={'root'}>
          <Scene
            key={'Films'}
            component={Films}
            initial
            title={"Filmica"}
            {...navBarStyles}
          />
          <Scene
            key={'FilmDetail'}
            component={FilmDetail}
            {...navBarStyles}
          />
        </Stack>
      </Router>
    );
  }
}

navBarStyles= {
  navigationBarStyle: { backgroundColor: colors.primaryColor },
  titleStyle: { color: colors.white },
  backButtonTextStyle: { color: colors.white },
  backButtonTintColor: colors.white
}
