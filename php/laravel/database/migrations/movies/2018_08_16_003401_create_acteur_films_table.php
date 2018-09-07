<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActeurFilmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::connection('mysql3')->hasTable('acteur_films'))
        {
            Schema::connection('mysql3')->create('acteur_films', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->increments('id');
                $table->integer('acteur_id')->unsigned();
                $table->foreign('acteur_id')->references('id')->on('acteurs');
                $table->integer('film_id')->unsigned();
                $table->foreign('film_id')->references('id')->on('films');
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
        Schema::connection('mysql3')->dropIfExists('acteur_films');
    }
}
