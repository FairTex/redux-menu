import { connect } from 'react-redux';
import { compose } from 'redux';
import { addNode, editNode, setMenu } from './actions';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { selectMenu } from './selectors';
import { createStructuredSelector } from 'reselect';
import HomePage from './HomePage';

const mapDispatchToProps = dispatch => ({
  addNode: (node, parentId) => dispatch(addNode(node, parentId)),
  editNode: node => dispatch(editNode(node)),
  setMenu: menu => dispatch(setMenu(menu)),
});

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
});

export default compose(
  injectReducer({ key: 'restaurant', reducer }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(HomePage);
