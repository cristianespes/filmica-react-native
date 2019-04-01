import { connect } from 'react-redux';
import View from './view';
import * as DiscoverActions from '../../redux/discoverFilms/actions';

const mapStateToProps = state => {
    return {
      
    };
  };
  
  const mapDispatchToProps = (dispatch, props) => {
    return {
      addFilm: film => {
        dispatch(DiscoverActions.addFilm(film))
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(View);
