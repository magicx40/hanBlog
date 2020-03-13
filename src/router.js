import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
    routes:[
        {
            path: '/',
            component: () => import('./pages/home.vue')
        }
    ],
    mode:'history',
    scrollBehavior(to, from, savedPosition) {
        if ( savedPosition ) {
            return savedPosition;
        } else {
            if (to.hash) {
                return {
                    selector: to.hash
                }
            } else {
                return { x: 0, y: 0}
            }
        }
    }
})


export default router;