import tpl from '../../js/utils/avecTemplateHtml'
import {http_post, http_get} from '../utils/request'

export default tpl({
    template: './html/demandesExistant.html',
    data () {
        return {
            search: true,
            errorMessage : false,
            etape1 : false,
            etape2 : false,
            etape3 : false,
            etape4 : false,
            id : "",
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
            apiPost : "http://apiacme/api/user/edit/"
            
        }
    },
    mounted(){
   
    },
    methods: {
        homepageRoute() {
            this.$router.push("/")
            localStorage.clear()
            
        },
        routeDemandesExistant() {
            this.$router.push("/demandesExistant")
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
            this.coutTotale = this.coutVoitures + this.coutMaison
        },
     
        getDemande(){
            this.api = this.api + this.courrielPourRecherche;
            
            http_get(this.api).then(data => {
               this.prenom = data[0].prenom,
               this.nom = data[0].nom,
               this.courriel = data[0].courriel,
               this.codePostale = data[0].code_postal,
               this.cpAssurer = data[0].code_postal_assurer,
               this.nombreVoitures = data[0].nombre_voitures,
               this.reclamations = data[0].reclamations_dep2015
               console.log(data)
            })
                this.search = false,
                this.etape1 = true,
                this.etape2 = true
        },

        envoyerBD(e) {
            let url = this.apiPost +  this.courriel
            http_post(url, {
                prenom: this.prenom,
                nom: this.nom,
                courriel: this.courriel,
                code_postal: this.codePostale,
                code_postal_assurer: this.cpAssurer,
                nombre_voitures: this.nombreVoitures,
                reclamations_dep2015: this.reclamations,
                }).then (data => {
                    
                })
                this.etape3 = false
                this.etape4 = true
        }  
    },
})