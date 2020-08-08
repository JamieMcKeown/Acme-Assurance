import tpl from '../../js/utils/avecTemplateHtml'



export default tpl({
    template: './html/accueil.html',
    data () {
        return {
            
            
        }
    },
    mounted(){
   
   
    },

    methods: {
        homepageRoute() {
            this.$router.push("/").catch(err => {})
        }, 
        routeFormulaires() {
            this.$router.push("/formulaires")
        },
     

      

        
        
       

     

    },
})