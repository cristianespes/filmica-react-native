import { connect } from 'react-redux';
import View from './view';
import * as DiscoverActions from '../../redux/discoverFilms/actions';
import * as FavoriteActions from '../../redux/favoriteList/actions';

const mapStateToProps = (state) => {
    return {
        list: state.discoverFilms.discoverList,
        isFetching: state.discoverFilms.isFetching,
        page: state.discoverFilms.page,
        total: state.discoverFilms.totalPages
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        getFilmsList: () => {
            dispatch(DiscoverActions.initFilmsList());
        },
        updateFilmSelected: film => {
            dispatch(DiscoverActions.updateFilmSelected(film));
        },
        updateFilmsListOffset: () => {
            dispatch(DiscoverActions.updateFilmsListOffset());
        },
        initFavoriteList: () => {
            dispatch(FavoriteActions.initFavoriteList());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
