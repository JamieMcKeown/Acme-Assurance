import tpl from '../../js/utils/avecTemplateHtml'



export default tpl({
    template: './html/demandesExistant.html',
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
        routeDemandesExistant() {
            this.$router.push("/demandesExistant")
        },
     

      

        
        
       

     

    },
})