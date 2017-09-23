import { connect } from 'react-redux';
import NewProductForm from './new_product_form';
import { createProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    test: true
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    create_product: (product) => dispatch(createProduct())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProductForm);