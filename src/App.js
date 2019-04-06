import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import { Stack, Router, Scene, Actions, Tabs } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import { Films, FilmDetail, FilmAdd, FavList, RatingForm } from './sections';
import { configureAxios } from './webservice';
import * as colors from './commons/colors';
import { store } from './config/redux';
import { TabIcon } from './widgets'


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
            <Tabs
              key='TabBar'
              //inactiveBackgroundColor="#FFF"
              //activeBackgroundColor="#DDD"
              tabBarPosition='bottom'
              showLabel={false}
              hideNavBar
              tabBarStyle={tabBarStyle}
              {...navBarStyles}
              initial
            >
              <Stack 
                key="tab_discover"
                title="Discover"
                tabBarLabel="Catálogo"
                icon={TabIcon}
                titleStyle={titleTabBarStyle}
              >
                <Scene
                  key={'Films'}
                  component={Films}
                  title={"Filmica"}
                  rightTitle={'Añadir'}
                  onRight={ _ => Actions.FilmAdd() }
                  rightButtonTextStyle={{ color: colors.white }}
                  {...navBarStyles}
                />
              </Stack>

              <Stack 
                key="tab_favorites"
                title="Favorites"
                tabBarLabel="Favoritos"
                icon={TabIcon}
                titleStyle={titleTabBarStyle}
              >
                <Scene
                  key={'FavList'}
                  component={FavList}
                  title={'Favoritas'}
                  {...navBarStyles}
                />
              </Stack>
            </Tabs>
            {/* <Scene
              key={'Films'}
              component={Films}
              //initial
              title={"Filmica"}
              rightTitle={'Añadir'}
              onRight={ _ => Actions.FilmAdd() }
              rightButtonTextStyle={{ color: colors.white }}
              {...navBarStyles}
            /> */}
            <Scene
              key={'FilmDetail'}
              component={FilmDetail}
              rightTitle={'Valorar'}
              onRight={ _ => Actions.RatingForm({ film: store.getState().discoverFilms.selected }) }
              rightButtonTextStyle={{ color: colors.white }}
              {...navBarStyles}
            />
            <Scene
              key={'FilmAdd'}
              component={FilmAdd}
              title={'Añadir película'}
              {...navBarStyles}
            />
            <Scene
              key={'RatingForm'}
              component={RatingForm}
              title={'Añadir valoración'}
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

tabBarStyle = {
  backgroundColor: colors.primaryColor
}

titleTabBarStyle = {
  color: 'white',
  alignSelf: 'center' 
}
