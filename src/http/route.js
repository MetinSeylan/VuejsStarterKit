import Master from '../components/master.vue';
import NotFound from '../components/errors/404.vue';
import Dashboard from '../components/dashboard/dashboard.vue';
import Market from '../components/market/market.vue';

module.exports = {
    '': {
        component: Master,
        subRoutes: {
            '/': {
                component: Dashboard
            },
            'market': {
                component: Market,
                market: true
            }
        }
    },
    '*': {
        component: NotFound
    }
};