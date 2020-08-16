import React,{createContext} from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import { createStore,applyMiddleware } from 'redux';
import rootReducers from './reducers';

// const logger = function({ dispatch,getState}){

//     return function(next){

//         return function(action){

           
//         }

//     }
// }

const logger = ({ dispatch,getState}) => (next) => (action) =>{

    //logger code
    if(typeof action != 'function'){
     console.log("ACTION_TYPE=",action.type);
    }
    next(action);

}

// const thunk = ({ dispatch,getState}) => (next) => (action) =>{

//     if(typeof action === 'function'){

//         action(dispatch);
//         return;
//     }
//     next(action);

// }

const store = createStore(rootReducers,applyMiddleware(logger,thunk));

export const StoreContext = createContext();

class Provider extends React.Component {

    render(){
        const {store} = this.props;
        return(

            <StoreContext.Provider value={store}>
                {this.props.children}
            </StoreContext.Provider>
        );
    }
}

ReactDOM.render(

     <Provider store = {store}>
         <App/>
    </Provider>
    ,document.getElementById('root'));
