import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, replace, changeCount, } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter
          count={this.props.count}
          totalCount={this.props.totalCount}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onReplace={this.props.onReplace}
          onChangeCount={this.props.onChangeCount} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReplace: (count) => dispatch(replace(count)),
    onChangeCount: () => dispatch(changeCount())
  };
}
function mapStateToProps(state) {
  return {
    count: state.count,
    totalCount: state.totalCount
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);