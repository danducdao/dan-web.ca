<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::connection('mysql3')->hasTable('clients'))
        {
            Schema::connection('mysql3')->create('clients', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->increments('id');
                $table->integer('store_id')->unsigned();
                $table->foreign('store_id')->references('id')->on('stores');
                $table->string('prenom',120);
                $table->string('nom',120);
                $table->string('courriel',50)->nullable();
                $table->integer('adresse_id')->unsigned();
                $table->foreign('adresse_id')->references('id')->on('adresses');
                $table->tinyInteger('active')->default(1);
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
        Schema::connection('mysql3')->dropIfExists('clients');
    }
}
