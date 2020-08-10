import tpl from '../utils/avecTemplateHtml'
import {http_post} from '../utils/request'

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
           api : 'http://apiacme/api/user/new',
        }
    },
    mounted(){
      
    },
    methods: {
        homepageRoute() {
            this.$router.push("/")
            localStorage.clear()
            
        },
        lienForm2() {
            this.etape1 = false
            localStorage.setItem("prenom", this.prenom)
            localStorage.setItem("nom", this.nom)
            localStorage.setItem("codePostale", this.codePostale)
            localStorage.setItem("courriel", this.courriel)
            this.etape2 = true
            
            
            
        },
        lienForm3() {
            this.etape1 = false
            this.etape2 = false
            localStorage.setItem("cpAssurer", this.cpAssurer)
            localStorage.setItem("nombreVoitures", this.nombreVoitures)
            localStorage.setItem("reclamations", this.reclamations)
            this.etape3 = true

           //calcul assurance maison

            if (this.cpAssurer == ""){
                this.coutMaison = 0
            }
                else {
                    this.coutMaison = 1500;
                }
            //calcul assurance vouitures 
            this.coutVoitures = this.nombreVoitures * 750
            if (this.reclamations){
                this.coutVoitures = (this.coutVoitures * 1.25)
            }
             
            this.coutTotale = this.coutVoitures + this.coutMaison
        },

        envoyerBD() {
            http_post(this.api, {
                prenom: this.prenom,
                nom: this.nom,
                courriel: this.courriel,
                code_postal: this.codePostale,
                code_postal_assurer: this.cpAssurer,
                nombre_voitures: this.nombreVoitures,
                reclamations_dep2015: this.reclamations,
                }).then (data => {
                    this.$router.push("/")
                })

            localStorage.clear()
        }  
    }   
})