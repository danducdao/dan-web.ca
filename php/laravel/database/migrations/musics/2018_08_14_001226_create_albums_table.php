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
        if(!Schema::connection("mysql2")->hasTable('albums'))
        {
            Schema::connection("mysql2")->create('albums', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->increments('id');
                $table->integer('genre_id')->unsigned();
                $table->foreign('genre_id')->references('id')->on('genres');
                $table->integer('artiste_id')->unsigned();
                $table->foreign('artiste_id')->references('id')->on('artistes');
                $table->string('titre',160);
                $table->decimal('prix',10,5);
                $table->string('photo',160)->default('assets/images/placeholder.gif');
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
        Schema::connection("mysql2")->dropIfExists('albums');
    }
}
