import accueil from './pages/accueil'
import formulaires from './pages/formulaires'
import inscription from './pages/inscription'


export default new VueRouter({
    routes: [
        { path: '/', component: accueil },
        { path:'/formulaires', component: formulaires},
        { path:'/inscription', component: inscription},
       
    ]
})