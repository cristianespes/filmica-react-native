import { connect } from 'react-redux';
import View from './view';
import * as DetailActions from '../../redux/filmDetail/actions';
import * as FavoriteActions from '../../redux/favoriteList/actions';

const mapStateToProps = (state) => {
    return {
        film: state.filmDetail.film,
        isFetching: state.filmDetail.isFetching
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
            console.log('mapDispatchToProps: ', film)
            dispatch(FavoriteActions.saveFavoriteList(film));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
