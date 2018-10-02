<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetailCommandesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::connection('mysql')->hasTable('detail_commandes'))
        {
            Schema::connection('mysql')->create('detail_commandes', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->integer('commande_id')->unsigned();
                $table->foreign('commande_id')->references('id')->on('commandes');
                $table->integer('produit_id')->unsigned();
                $table->foreign('produit_id')->references('id')->on('produits');
                $table->decimal('prix',5,2)->default(0);
                $table->smallInteger('quantite')->default(1);
                $table->decimal('discount',5,2)->default(0);
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
        Schema::connection('mysql')->dropIfExists('detail_commandes');
    }
}
