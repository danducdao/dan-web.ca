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
        if(!Schema::connection('mysql')->hasTable('produits'))
        {
            Schema::connection('mysql')->create('produits', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->increments('id');
                $table->string('nom',120);
                $table->integer('fournisseur_id')->unsigned();
                $table->foreign('fournisseur_id')->references('id')->on('fournisseurs');
                $table->integer('categorie_id')->unsigned();
                $table->foreign('categorie_id')->references('id')->on('categories');
                $table->string('quantite_par_unite',20)->nullable();
                $table->decimal('prix',5,2)->nullable();
                $table->smallInteger('quantite_en_stock')->nullable();
                $table->smallInteger('quantite_commande')->nullable();
                $table->smallInteger('reapprovisionnement')->nullable();
                $table->smallInteger('discontinue')->default(0);
                $table->smallInteger('active')->default(1);
                $table->timestamps();
            });
        }
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
