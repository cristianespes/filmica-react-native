import { connect } from 'react-redux';
import View from './view';
import * as DetailActions from '../../redux/filmDetail/actions';
import * as FavoriteActions from '../../redux/favoriteList/actions';

const mapStateToProps = (state) => {
    return {
        film: state.filmDetail.film,
        isFetching: state.filmDetail.isFetching,
        favList: state.favoriteList.favoriteList
    };
};

const mapDispatchToProps = (dispatch, props) => {
    // props que le llegan al componente, excepto las que inyecta redux
    return {
        getDetailFilm: () => {
            const filmSelected = props.film
            dispatch(DetailActions.initFilmDetail(filmSelected));
        },
        saveFavorite: film => {
            dispatch(FavoriteActions.saveFavoriteList(film));
        },
        removeFavoriteFilm: film => {
            dispatch(FavoriteActions.removeFavoriteFilm(film));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
