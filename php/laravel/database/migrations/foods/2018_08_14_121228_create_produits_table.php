<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProduitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('mysql')->create('produits', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('nom',40);
            $table->Integer('fournisseur_id')->reference('id')->on('fournisseurs');
            $table->Integer('categorie_id')->reference('id')->on('categories');
            $table->string('quantiteParUnite',20)->nullable();
            $table->decimal('prix',5,2)->nullable()->unsigned();
            $table->smallInteger('quantiteEnStock')->nullable()->unsigned();
            $table->smallInteger('quantiteCommande')->nullable()->unsigned();
            $table->smallInteger('reapprovisionnement')->nullable()->unsigned();
            $table->smallInteger('discontinue')->default(0);
            $table->smallInteger('active')->default(1);
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
        Schema::connection('mysql')->dropIfExists('produits');
    }
}
