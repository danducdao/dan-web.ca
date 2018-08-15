<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilmCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('film_categories', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->smallInteger('film_id')->unsigned()->reference('id')->on('films');
            $table->tinyInteger('categorie_id')->unsigned()->reference('id')->on('categories');
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
        Schema::dropIfExists('film_categories');
    }
}
