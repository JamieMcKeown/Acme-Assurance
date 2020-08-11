<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Demande;

class Demandes extends Controller
{
    public function create (Request $request) {
        $demande = new Demande();
        $demande->prenom = $request->prenom;
        $demande->nom = $request->nom;
        $demande->courriel = $request->courriel;
        $demande->code_postal = $request->code_postal;
        $demande->code_postal_assurer = $request->code_postal_assurer;
        $demande->nombre_voitures = $request->nombre_voitures;
        $demande->reclamations_dep2015 = $request->reclamations_dep2015;
        
        $success = $demande->save();
        return $demande;


    }

    public function showWithCourriel($courriel){
        $demande = Demande::where("courriel", $courriel)->first();
        $result = [];

        $item = [
            'prenom' => $demande->prenom,
            'nom' => $demande->nom,
            'courriel' => $demande->courriel,
            'code_postal' => $demande->code_postal,
            'cpAssurer' => $demande->code_postal_assurer,
            'nombre_voitures' => $demande->nombre_voitures,
            'reclamations' => $demande->reclamations_dep2015,            
        ];
        array_push($result, $item);
        return $result;
    }

    public function modify (Request $request, $courriel){
        $demande = Demande::where("courriel", $courriel)->first();
        
        $demande->prenom = $request->prenom;
        $demande->nom = $request->nom;
        $demande->courriel = $request->courriel;
        $demande->code_postal = $request->code_postal;
        $demande->code_postal_assurer = $request->code_postal_assurer;
        $demande->nombre_voitures = $request->nombre_voitures;
        $demande->reclamations_dep2015 = $request->reclamations_dep2015;

        $success = $demande->save();
        return $demande;
    }
}
