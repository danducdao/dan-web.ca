<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilmTextesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('film_textes', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->smallInteger('film_id')->unique()->reference('id')->on('films');
            $table->string('titre',255);
            $table->longText('description');
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
        Schema::dropIfExists('film_textes');
    }
}
