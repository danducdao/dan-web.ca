<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::connection('mysql3')->hasTable('stores'))
        {
            Schema::connection('mysql3')->create('stores', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->increments('id');
                $table->tinyInteger('manager_id')->unique()->unsigned();
                $table->integer('adresse_id')->unsigned();
                $table->foreign('adresse_id')->references('id')->on('adresses');
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
        Schema::connection('mysql3')->dropIfExists('stores');
    }
}
