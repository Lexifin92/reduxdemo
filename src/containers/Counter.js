import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isTemplateElement } from '@babel/types';
import * as actionTypes from '../actions';
class Counter extends Component {

    render() {
        return (
            <div>
                <h2>Your score is: {this.props.ctr}</h2>
                <div>
                    <button onClick={this.props.onIncCounter}>Add one </button>
                    <button onClick={this.props.onDropCounter}>Remove one</button>
                    <button onClick={this.props.addCounter}>Add five</button>
                    <button onClick={this.props.removeCounter}>Remove five</button>

                    <button onClick={this.props.onStoreCounter}> Store result </button>


                <ul>
                {this.props.storedResult.map(item => (

                    <li key={item.id} onClick={() => this.props.onDeleteCounter(item.id)}> {item.value} </li>
                    
                    ))}
                </ul>


                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDropCounter: () => dispatch({type: actionTypes.DROP}),
        addCounter: () => dispatch({type: actionTypes.ADD, value:5}),
        removeCounter: () => dispatch({type: actionTypes.REMOVE, value:5}),

        onStoreCounter: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteCounter: (id) => dispatch({type: 'DELETE_RESULT', resultElementId: id})
 

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);