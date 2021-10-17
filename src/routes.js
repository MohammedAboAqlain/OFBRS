import Home from './components/home.vue';
import Markets from './components/markets.vue';
import AddNewMarket from './components/AddNewMarket.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/Markets', component: Markets},
    {path: '/Markets/addNewMarket', component: AddNewMarket}
];