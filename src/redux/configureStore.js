import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Campsites } from './campsites';
import { Comments } from './comments'
import { Partners } from './partners';
import { Promotions } from './promotiopns';
import { CAMPSITES } from '../shared/campsites';


export const ConfigureStore = ( ) => {
    const store = createStore(
        //This combines all of the imported reducers by assining them to key:value pairs and returns only one reducer because it can only retuern one reducer. 
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger)
    );

    return store
}