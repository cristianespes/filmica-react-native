import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import { Stack, Router, Scene, Actions } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import { Films, FilmDetail, FilmAdd } from './sections';
import { configureAxios } from './webservice';
import * as colors from './commons/colors';
import { store } from './config/redux';


export default class App extends Component {

  constructor(props) {
    super(props);

    configureAxios(); // Configuración inicial para la api
    StatusBar.setBarStyle('light-content', false);
  }

  render() {
    console.log("store: ", store.getState())
    return (
      <Provider store={ store }>
        <Router>
          <Stack key={'root'}>
            <Scene
              key={'Films'}
              component={Films}
              initial
              title={"Filmica"}
              rightTitle={'Añadir'}
              onRight={ _ => Actions.FilmAdd() }
              rightButtonTextStyle={{ color: colors.white }}
              {...navBarStyles}
            />
            <Scene
              key={'FilmDetail'}
              component={FilmDetail}
              {...navBarStyles}
            />
            <Scene
              key={'FilmAdd'}
              component={FilmAdd}
              title={'Añadir película'}
              {...navBarStyles}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

navBarStyles= {
  navigationBarStyle: { backgroundColor: colors.primaryColor },
  titleStyle: { color: colors.white },
  backButtonTextStyle: { color: colors.white },
  backButtonTintColor: colors.white
}
