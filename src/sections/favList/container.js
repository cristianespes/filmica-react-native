import { connect } from 'react-redux';

import View from './view';
import * as FavoriteActions from '../../redux/favoriteList/actions';

const mapStateToProps = (state) => {
  return {
      favList: state.favoriteList.favoriteList,
      isFetching: state.favoriteList.isFetching
  };
};
  
const mapDispatchToProps = (dispatch, props) => {
  return {
    initFavoriteList: () => {
      dispatch(FavoriteActions.initFavoriteList());
    }
  };
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(View);