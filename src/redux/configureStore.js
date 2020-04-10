import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Campsites } from './campsites';
import { Comments } from './comments'
import { Partners } from './partners';
import { Promotions } from './promotiopns';
import { InitialFeedback } from './forms';



export const ConfigureStore = ( ) => {
    const store = createStore(
        //This combines all of the imported reducers by assining them to key:value pairs and returns only one reducer because it can only retuern one reducer. 
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store
}