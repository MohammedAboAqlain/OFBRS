import Home from './components/home.vue';
import Markets from './components/markets.vue';
import AddNewMarket from './components/AddNewMarket.vue'
import FishermanInputReport from './components/FishermanInputReport.vue'
import Entries from './components/Entries.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/Markets', component: Markets},
    {path: '/Markets/addNewMarket', component: AddNewMarket},
    {path: '/FishermanInputReport', component: FishermanInputReport},
    {path: '/AllEntries', component: Entries}
];