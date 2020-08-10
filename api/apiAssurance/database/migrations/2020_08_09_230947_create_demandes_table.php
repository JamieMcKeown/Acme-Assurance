<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDemandesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('demandes', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->string('prenom', 100);
            $table->string('nom', 100);
            $table->string('courriel')->unique();
            $table->string('code_postal', 6)->nullable();
            $table->string('code_postal_assurer', 6)->nullable();
            $table->integer('nombre_voitures');
            $table->boolean('reclamations_dep2015');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('demandes');
    }
}
