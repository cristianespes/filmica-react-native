import { connect } from 'react-redux';
import View from './view';
import * as DetailActions from '../../redux/filmDetail/actions';

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
            dispatch(DetailActions.fetchDetailFilm(filmSelected));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
