import tpl from '../../js/utils/avecTemplateHtml'
import {http_put} from '../utils/request'



export default tpl({
    template: './html/demandesExistant.html',
    data () {
        return {
            search: true,
            etape1 : false,
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
            courrielPourRecherche: "",
            api : "http://apiacme/api/user/",
            info: [],
            
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
                this.reclamations = "oui"
                this.coutVoitures = (this.coutVoitures * 1.25)
            }
                else {
                    this.reclamations = "non"
                }

            this.coutTotale = this.coutVoitures + this.coutMaison
        },
     
        getDemande(){
            this.api = this.api + this.courrielPourRecherche;

            http_put(this.api, {
                prenom: this.prenom
                
            }).then(data => {
                this.$router.push("/formulaires")
            })
     

        }
      

        
        
       

     

    },
})