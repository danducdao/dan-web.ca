<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommandesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::connection('mysql')->hasTable('commandes'))
        {
            Schema::connection('mysql')->create('commandes', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->increments('id');
                $table->string('client_id',5);
                $table->foreign('client_id')->references('id')->on('clients');
                $table->integer('employee_id')->unsigned();
                $table->foreign('employee_id')->references('id')->on('employees');
                $table->date('date_commande')->nullable();
                $table->date('date_requise')->nullable();
                $table->date('date_livraison')->nullable();
                $table->integer('expediteur_id')->unsigned();
                $table->foreign('expediteur_id')->references('id')->on('expediteurs');
                $table->decimal('fret',10,2)->nullable()->default(0);
                $table->string('nom_expediteur',40)->nullable();
                $table->string('adresse_livraison',60)->nullable();
                $table->string('ville_livraison',15)->nullable();
                $table->string('region_livraison',15)->nullable();
                $table->string('code_postale_livraison',10)->nullable();
                $table->string('pays_livraison',15)->nullable();
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
        Schema::connection('mysql')->dropIfExists('commandes');
    }
}
