import tpl from '../utils/avecTemplateHtml'

export default tpl({
    template: './html/formulaires.html',
    data () {
        return {
           etape1 : true,
           etape2 : false,
           etape3 : false,
           prenom : "",
           nom    : "",
           codePostale : "",
           courriel : "",
           cpAssurer : "",
           nombreVoitures : 1,
           reclamations : false,
           coutVoitures : 0,
           coutMaison : 0,
           coutTotale : 0,
        }
    },
    mounted(){
      
    },
    methods: {
        homepageRoute() {
            this.$router.push("/")
        },
        lienForm2() {
            this.etape1 = false
            localStorage.setItem("prenom", this.prenom)
            localStorage.setItem("nom", this.nom)
            localStorage.setItem("codePostale", this.codePostale)
            localStorage.setItem("courriel", this.courriel)
            this.etape2 = true
            console.log(localStorage)
            
            
        },
        lienForm3() {
            this.etape1 = false
            this.etape2 = false
            localStorage.setItem("cpAssurer", this.cpAssurer)
            localStorage.setItem("nombreVoitures", this.nombreVoitures)
            localStorage.setItem("reclamations", this.reclamations)
            console.log(localStorage)
            this.etape3 = true

           

            if (this.cpAssurer == ""){
                this.coutMaison = 0
            }
                else {
                    this.coutMaison = 1500;
                }

            if (this.reclamations){
                this.reclamations = "oui"
                this.coutVoitures = (this.coutVoitures * 1.25)
            }
                else {
                    this.reclamations = "non"
                }

            this.coutTotale = this.coutVoitures + this.coutMaison
        }

    },
})