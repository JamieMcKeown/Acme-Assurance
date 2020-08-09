import accueil from './pages/accueil'
import formulaires from './pages/formulaires'
import demandesExistant from './pages/demandesExistant'
import recap from './pages/recap'


export default new VueRouter({
    routes: [
        { path: '/', component: accueil },
        { path:'/formulaires', component: formulaires},
        { path:'/demandesExistant', component: demandesExistant},
        { path:'/recap', component: recap},
       
    ]
})