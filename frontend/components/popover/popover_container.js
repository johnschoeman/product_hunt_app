import { connect } from 'react-redux';
import Popover from './popover';

const mapStateToProps = (state, ...popover) => {

  return {
    popover
  };
};

const mapDispatchToProps = (dispatch) => {

  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popover);