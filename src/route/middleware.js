import auth from './middlewares/auth';
import store from '../store/store';

export const Auth = auth;


/**
 * Global Middlewares
 * @param router
 * @constructor
 */

export const Global = (router) => {
    router.afterEach((from, to) => {
        store.commit('viewLoad', true)
    })


    router.beforeEach((from, to, next) => {
        store.commit('viewLoad', false)
        next();
    })
}