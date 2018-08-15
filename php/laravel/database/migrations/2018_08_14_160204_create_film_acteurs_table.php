<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilmActeursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('film_acteurs', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->smallInteger('acteur_id')->unsigned()->refrence('id')->on('acteurs');
            $table->smallInteger('film_id')->unsigned()->refrence('id')->on('films');
            $table->tinyInteger('active')->default(1);
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
        Schema::dropIfExists('film_acteurs');
    }
}
