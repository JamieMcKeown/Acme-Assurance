import tpl from '../utils/avecTemplateHtml'

export default tpl({
    template: './html/formulaires.html',
    data () {
        return {
           
        }
    },
    mounted(){
      
    },
    methods: {
        homepageRoute() {
            this.$router.push("/")
        },

    },
})