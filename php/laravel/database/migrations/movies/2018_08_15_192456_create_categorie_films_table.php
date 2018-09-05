<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategorieFilmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::connection('mysql3')->hasTable('categorie_films'))
        {
            Schema::connection('mysql3')->create('categorie_films', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->increments('id');
                $table->integer('film_id')->unsigned();
                $table->foreign('film_id')->references('id')->on('films');
                $table->integer('categorie_id')->unsigned();
                $table->foreign('categorie_id')->references('id')->on('categories');
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
        Schema::connection('mysql3')->dropIfExists('categorie_films');
    }
}
