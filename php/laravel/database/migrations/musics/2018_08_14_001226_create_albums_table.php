<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlbumsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection("mysql2")->create('albums', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->smallInteger('genre_id')->references('id')->on('genres');
            $table->smallInteger('artiste_id')->references('id')->on('artistes');
            $table->string('titre',160);
            $table->decimal('prix',10,2);
            $table->string('albumArtUrl',250)->default('assets/images/placeholder.gif');
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
        Schema::connection("mysql2")->dropIfExists('albums');
    }
}
