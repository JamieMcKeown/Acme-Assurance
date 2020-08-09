import tpl from '../../js/utils/avecTemplateHtml'



export default tpl({
    template: './html/recap.html',
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
       
     

      

        
        
       

     

    },
})